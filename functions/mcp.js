// Tank Talks MCP server — stateless Streamable HTTP, read-only tools, served as a
// Pages Function at /mcp (same origin). No sessions, no SSE: every POST gets one
// JSON-RPC response. Tools expose the public article catalog and site overview.
import { SITE, ARTICLES } from "./_data.js";

const PROTOCOL_VERSION = "2025-06-18";
const SERVER_INFO = { name: "tanktalks-mcp", title: "Tank Talks", version: "1.0.0" };
const INSTRUCTIONS =
  "Read-only information about Tank Talks, a freshwater aquarium editorial site. Use the tools to " +
  "describe the site, list its published articles, and search articles by keyword.";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Mcp-Session-Id, MCP-Protocol-Version, Authorization",
  "Access-Control-Expose-Headers": "MCP-Protocol-Version",
};

const ENDPOINT = `${SITE.url}/mcp`;

const TOOLS = [
  {
    name: "get_overview",
    title: "Site overview",
    description: "What Tank Talks is — a freshwater aquarium editorial site — its sections, and affiliate disclosure.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_articles",
    title: "List articles",
    description: "Every published Tank Talks article: title, URL, and summary.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "search_articles",
    title: "Search articles",
    description: "Find Tank Talks articles whose title or summary matches a keyword (e.g. 'shrimp', 'nitrate', 'moss').",
    inputSchema: {
      type: "object",
      properties: { query: { type: "string", description: "Keyword to match against article titles and summaries." } },
      required: ["query"],
      additionalProperties: false,
    },
  },
];

function callTool(name, args = {}) {
  switch (name) {
    case "get_overview": {
      const text =
        `${SITE.name} — ${SITE.overview}\n\nSections:\n` +
        SITE.sections.map((s) => `- ${s.name}: ${s.url}`).join("\n");
      return { text };
    }
    case "list_articles": {
      const text =
        `Tank Talks articles (${ARTICLES.length}):\n\n` +
        ARTICLES.map((a) => `- ${a.title}\n  ${a.url}\n  ${a.summary}`).join("\n\n");
      return { text };
    }
    case "search_articles": {
      const q = String(args.query || "").trim().toLowerCase();
      if (!q) return { error: "Provide a non-empty 'query'." };
      const hits = ARTICLES.filter(
        (a) => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q)
      );
      const text = hits.length
        ? `Articles matching "${args.query}":\n\n` + hits.map((a) => `- ${a.title}\n  ${a.url}`).join("\n\n")
        : `No articles matched "${args.query}". See the full catalog at ${SITE.url}/articles/.`;
      return { text };
    }
    default:
      return { error: `Unknown tool: ${name}` };
  }
}

const ok = (id, result) => ({ jsonrpc: "2.0", id, result });
const err = (id, code, message) => ({ jsonrpc: "2.0", id, error: { code, message } });

function handle(msg) {
  if (!msg || msg.jsonrpc !== "2.0" || typeof msg.method !== "string") {
    return msg && msg.id !== undefined ? err(msg.id, -32600, "Invalid Request") : null;
  }
  const { id, method, params } = msg;
  const isRequest = id !== undefined && id !== null;
  switch (method) {
    case "initialize":
      return ok(id, {
        protocolVersion: params?.protocolVersion || PROTOCOL_VERSION,
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: INSTRUCTIONS,
      });
    case "ping":
      return ok(id, {});
    case "tools/list":
      return ok(id, { tools: TOOLS });
    case "tools/call": {
      const r = callTool(params?.name, params?.arguments || {});
      if (r.error) return ok(id, { content: [{ type: "text", text: r.error }], isError: true });
      return ok(id, { content: [{ type: "text", text: r.text }] });
    }
    default:
      if (method.startsWith("notifications/")) return null;
      return isRequest ? err(id, -32601, `Method not found: ${method}`) : null;
  }
}

export async function onRequest(context) {
  const { request } = context;
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });

  if (request.method === "GET") {
    return Response.json(
      {
        server: SERVER_INFO,
        transport: "streamable-http",
        endpoint: ENDPOINT,
        protocolVersion: PROTOCOL_VERSION,
        tools: TOOLS.map((t) => ({ name: t.name, description: t.description })),
        docs: SITE.url,
      },
      { headers: CORS }
    );
  }

  if (request.method !== "POST") return new Response("Method Not Allowed", { status: 405, headers: CORS });

  let payload;
  try {
    payload = await request.json();
  } catch {
    return Response.json(err(null, -32700, "Parse error"), { status: 400, headers: CORS });
  }

  const batch = Array.isArray(payload);
  const messages = batch ? payload : [payload];
  const responses = [];
  for (const m of messages) {
    const r = handle(m);
    if (r !== null) responses.push(r);
  }
  if (responses.length === 0) return new Response(null, { status: 202, headers: CORS });
  return Response.json(batch ? responses : responses[0], {
    headers: { ...CORS, "MCP-Protocol-Version": PROTOCOL_VERSION },
  });
}
