// Renders every route to static HTML so each page loads with real content and its own title.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { routes } from './src/routes.js';
import { site } from './src/site.config.js';

const root = path.dirname(fileURLToPath(import.meta.url));
const clientDir = path.join(root, 'dist/client');
const template = fs.readFileSync(path.join(clientDir, 'index.html'), 'utf-8');
const { render } = await import(path.join(root, 'dist/server/entry-server.js'));

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'WaveMax',
  url: site.url,
  logo: `${site.url}/brand/wavemax-logo.svg`,
  description: 'Brain-inspired AI research for robotics and autonomous systems: cognitive architecture, memory, perception and simulation.',
  knowsAbout: ['Brain-inspired AI', 'Cognitive architecture', 'Robot memory', 'Robot perception', 'Robot simulation', 'Embodied AI', 'AI governance'],
};

const escape = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const headFor = ({ path: p, title, description, keywords }) => {
  const url = site.url + (p === '/' ? '/' : p);
  return [
    `<title>${escape(title)}</title>`,
    `<meta name="description" content="${escape(description)}" />`,
    keywords ? `<meta name="keywords" content="${escape(keywords)}" />` : '',
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="WaveMax" />`,
    `<meta property="og:title" content="${escape(title)}" />`,
    `<meta property="og:description" content="${escape(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${site.url}/brand/wavemax-logo.svg" />`,
    `<meta name="twitter:card" content="summary" />`,
    p === '/' ? `<script type="application/ld+json">${JSON.stringify(orgSchema)}</script>` : '',
  ].filter(Boolean).join('\n    ');
};

const writePage = (route, file) => {
  const html = template
    .replace('<!--head-->', headFor(route))
    .replace('<!--app-->', render(route.path));
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
};

for (const route of routes) {
  const file = route.path === '/'
    ? path.join(clientDir, 'index.html')
    : path.join(clientDir, route.path.slice(1), 'index.html');
  writePage(route, file);
}

writePage(
  { path: '/404', title: 'Page not found | WaveMax', description: 'This page does not exist.' },
  path.join(clientDir, '404.html'),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url><loc>${site.url}${r.path === '/' ? '/' : r.path}</loc></url>`).join('\n')}
  <url><loc>${site.url}/demo/neural-network/</loc></url>
</urlset>
`;
fs.writeFileSync(path.join(clientDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(clientDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);

console.log(`Prerendered ${routes.length} pages, 404, sitemap and robots.txt`);
