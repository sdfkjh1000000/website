// Concatenates the per-page .md twins into llms-full.txt. Run after any .md regen.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pages = [
  'index.md', 'tools.md', 'troubleshooting.md', 'gear.md',
  ...fs.readdirSync(path.join(root, 'articles')).filter((f) => f.endsWith('.md')).map((f) => `articles/${f}`),
  ...fs.readdirSync(path.join(root, 'legal')).filter((f) => f.endsWith('.md')).map((f) => `legal/${f}`),
];

const header = `---
date: ${new Date().toISOString().slice(0, 10)}
---

# Tank Talks: full page content

> Complete markdown content of tanktalks.sdfkjh.com for language models. Index and summary: https://tanktalks.sdfkjh.com/llms.txt

`;

const body = pages
  .map((f) => fs.readFileSync(path.join(root, f), 'utf8').trim())
  .join('\n\n---\n\n');

fs.writeFileSync(path.join(root, 'llms-full.txt'), (header + body + '\n').replace(/\r\n/g, '\n'));
console.log(`llms-full.txt written (${pages.length} pages)`);
