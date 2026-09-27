/**
 * postbuild: writes public/sitemap.xml and public/robots.txt.
 *
 * Runs after `next build` (npm runs "postbuild" automatically after "build").
 * Articles and service pages come from the same loaders the pages use, so a
 * new article from n8n is listed automatically, drafts are left out, and a
 * broken article still fails the build.
 *
 * The loaders in src/lib are ES modules in a package without "type": "module".
 * Node 20 cannot import them directly, so they are copied into
 * .next/seo-lib next to a package.json that marks them as ESM. Bare imports
 * such as "gray-matter" still resolve from the project's node_modules.
 */
import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { pathToFileURL } from "url";

const root = process.cwd();
const require = createRequire(import.meta.url);

// Load .env files the way Next.js does, so NEXT_PUBLIC_SITE_URL matches the pages.
try {
  require("@next/env").loadEnvConfig(root);
} catch {
  // @next/env ships with Next.js; without it we fall back to process.env.
}

// Pages that are not driven by content files. Keep in sync with src/pages.
// /bestilt, /bestiltenv and /cookies are noindex and deliberately left out.
const STATIC_PATHS = [
  "/",
  "/tjenester",
  "/artikler",
  "/omoss",
  "/kontaktoss",
  "/bestilltime",
  "/miljo"
];

async function loadLib() {
  const source = path.join(root, "src", "lib");
  const target = path.join(root, ".next", "seo-lib");

  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });
  for (const fileName of fs.readdirSync(source)) {
    if (fileName.endsWith(".js")) {
      fs.copyFileSync(path.join(source, fileName), path.join(target, fileName));
    }
  }
  fs.writeFileSync(path.join(target, "package.json"), '{ "type": "module" }\n');

  const load = (fileName) => import(pathToFileURL(path.join(target, fileName)).href);
  const [{ getAllArticles }, { getAllServices }, { canonicalUrl }, { SITE_URL }] =
    await Promise.all([
      load("articles.js"),
      load("services.js"),
      load("seo.js"),
      load("site.js")
    ]);

  return { getAllArticles, getAllServices, canonicalUrl, SITE_URL };
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function urlEntry(loc, lastmod) {
  const lines = [`  <url>`, `    <loc>${escapeXml(loc)}</loc>`];
  if (lastmod) lines.push(`    <lastmod>${lastmod}</lastmod>`);
  lines.push(`  </url>`);
  return lines.join("\n");
}

async function main() {
  const { getAllArticles, getAllServices, canonicalUrl, SITE_URL } = await loadLib();
  const [articles, services] = await Promise.all([getAllArticles(), getAllServices()]);

  const entries = [
    ...STATIC_PATHS.map((pathname) => urlEntry(canonicalUrl(pathname))),
    ...services.map((service) => urlEntry(canonicalUrl(service.url))),
    ...articles.map((article) => urlEntry(canonicalUrl(article.url), article.date))
  ];

  const sitemap = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries,
    `</urlset>`,
    ``
  ].join("\n");

  const robots = [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${SITE_URL}/sitemap.xml`, ``].join(
    "\n"
  );

  const publicDir = path.join(root, "public");
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);

  console.log(
    `SEO files: public/sitemap.xml (${entries.length} URLs: ${STATIC_PATHS.length} pages, ` +
      `${services.length} services, ${articles.length} articles) and public/robots.txt`
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
