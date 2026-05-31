// Read-only article catalog for Tank Talks. The site's genuine machine-readable
// data: every published article with title, URL, and summary. Mirrored by the MCP
// server (/mcp). Documented at /.well-known/articles-openapi.json.
import { SITE, ARTICLES } from "../_data.js";

export async function onRequest() {
  const body = JSON.stringify(
    {
      name: "Tank Talks article catalog",
      description: "Published freshwater-aquarium articles on Tank Talks. Read-only, public, no authentication.",
      site: SITE.url,
      count: ARTICLES.length,
      articles: ARTICLES,
    },
    null,
    2
  );
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "Content-Signal": "search=yes, ai-input=yes, ai-train=no",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
