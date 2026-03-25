const fs = require('fs');
const path = require('path');

const config = require('../next-sitemap.config.cjs');
const siteUrl = String(config.siteUrl || '').replace(/\/$/, '');
const dist = path.join(__dirname, '..', 'dist');

function main() {
  if (!fs.existsSync(dist)) {
    console.warn('postbuild-sitemap: dist/ not found; run `npm run build` first.');
    process.exit(0);
  }
  if (!siteUrl) {
    console.warn('postbuild-sitemap: siteUrl is empty in next-sitemap.config.cjs');
    process.exit(1);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`;
  fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap, 'utf8');

  if (config.generateRobotsTxt) {
    const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
    fs.writeFileSync(path.join(dist, 'robots.txt'), robots, 'utf8');
  }

  console.log('postbuild-sitemap: wrote sitemap.xml' + (config.generateRobotsTxt ? ' and robots.txt' : '') + ' to dist/');
}

main();
