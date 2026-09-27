/**
 * Service pages (/tjenester/<slug>).
 *
 * Every service is a markdown file in src/content/tjenester/<slug>.md. The file
 * name is the slug. Frontmatter:
 *
 *   name            short name for cards and breadcrumbs ("EU-kontroll")
 *   title           the H1, written as a natural sentence
 *   seoTitle        "<Tjeneste> i Hamar | Vang Auto", max 60 characters
 *   seoDescription  120-160 characters
 *   summary         one or two sentences for the service cards
 *   image           project-relative path, e.g. /images/services/dekkskift.png
 *   imageAlt        descriptive Norwegian alt text
 *   order           position in the service grids (lowest first)
 *   relatedServices slugs of related service pages
 *   articleTerms    words that link articles to this service (matched against
 *                   an article's title, keywords and excerpt)
 *   faq             list of { q, a } shown as visible questions and answers
 *
 * A missing required field fails the build, like a broken article does.
 *
 * Imported by scripts/generate-seo-files.mjs as plain Node ESM, so relative
 * imports in src/lib must keep their ".js" extension.
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAllArticles } from "./articles.js";
import { getImageDimensions } from "./images.js";
import { markdownToHtml } from "./markdown.js";

export const SERVICES_DIR = path.join(process.cwd(), "src", "content", "tjenester");

const REQUIRED_FIELDS = [
  "name",
  "title",
  "seoTitle",
  "seoDescription",
  "summary",
  "image",
  "imageAlt"
];

function serviceError(fileName, message) {
  return new Error(
    `Invalid service page "src/content/tjenester/${fileName}": ${message}. ` +
      `See src/lib/services.js for the expected frontmatter.`
  );
}

function toList(value) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => String(item).trim()).filter(Boolean);
}

function toFaq(value, fileName) {
  if (!Array.isArray(value)) return [];
  return value.map((item, index) => {
    const q = String(item?.q ?? "").trim();
    const a = String(item?.a ?? "").trim();
    if (!q || !a) {
      throw serviceError(fileName, `faq entry ${index + 1} needs both "q" and "a"`);
    }
    return { q, a };
  });
}

function listServiceFiles() {
  if (!fs.existsSync(SERVICES_DIR)) return [];
  return fs
    .readdirSync(SERVICES_DIR)
    .filter((fileName) => /\.md$/i.test(fileName) && !fileName.startsWith("_"))
    .sort();
}

async function readServiceFile(fileName) {
  const raw = fs.readFileSync(path.join(SERVICES_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const slug = fileName.replace(/\.md$/i, "");
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw serviceError(
      fileName,
      "the file name must contain only lowercase letters, numbers and hyphens"
    );
  }

  const fields = {};
  for (const field of REQUIRED_FIELDS) {
    fields[field] = String(data[field] ?? "").trim();
    if (!fields[field]) throw serviceError(fileName, `missing "${field}"`);
  }

  const { width: imageWidth, height: imageHeight } = await getImageDimensions(
    fields.image
  );

  return {
    slug,
    url: `/tjenester/${slug}`,
    ...fields,
    imageWidth,
    imageHeight,
    order: Number.isFinite(Number(data.order)) ? Number(data.order) : 999,
    relatedServices: toList(data.relatedServices),
    articleTerms: toList(data.articleTerms),
    faq: toFaq(data.faq, fileName),
    body: content
  };
}

function byOrder(a, b) {
  if (a.order !== b.order) return a.order - b.order;
  return a.slug.localeCompare(b.slug);
}

function toMetadata({ body, ...metadata }) {
  return metadata;
}

/**
 * Every service page's metadata, in display order. Drives /tjenester, the
 * front page grid and the sitemap.
 */
export async function getAllServices() {
  const services = await Promise.all(listServiceFiles().map(readServiceFile));
  return services.sort(byOrder).map(toMetadata);
}

/**
 * One service page with its rendered body, or null for an unknown slug.
 */
export async function getServiceBySlug(slug) {
  const services = await Promise.all(listServiceFiles().map(readServiceFile));
  const service = services.find((candidate) => candidate.slug === slug);
  if (!service) return null;

  return {
    ...toMetadata(service),
    contentHtml: await markdownToHtml(service.body)
  };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function containsTerm(text, terms) {
  const haystack = String(text ?? "").toLowerCase();
  return terms.some((term) =>
    new RegExp(`(^|[^\\p{L}\\p{N}])${escapeRegExp(term.toLowerCase())}`, "u").test(
      haystack
    )
  );
}

/**
 * How well an article matches a list of terms: 2 when a term is in the title
 * or excerpt, 1 when it is only in the keywords, 0 for no match. Terms must
 * start a word, so "rust" does not match "utrustet" but "dekk" matches
 * "dekkhotell". Keywords rank lower because older articles list many loosely
 * related phrases there.
 */
function matchScore(article, terms) {
  if (!terms?.length) return 0;
  if (containsTerm(`${article.title} ${article.excerpt}`, terms)) return 2;
  if (containsTerm((article.keywords || []).join(" "), terms)) return 1;
  return 0;
}

function toArticleLink({ slug, url, title, date }) {
  return { slug, url, title, date };
}

/**
 * Articles matching a service's articleTerms, best match first, then newest.
 * New articles from n8n are picked up automatically - only the fields n8n
 * already writes are used.
 */
export async function getRelatedArticles(terms, limit = 3) {
  const articles = await getAllArticles();
  return articles
    .map((article) => ({ article, score: matchScore(article, terms) }))
    .filter(({ score }) => score > 0)
    // Array.prototype.sort is stable, so equal scores keep newest-first order.
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ article }) => toArticleLink(article));
}

/**
 * The reverse link: service pages relevant to an article, best match first.
 */
export async function getServicesForArticle(article, limit = 2) {
  const services = await getAllServices();
  return services
    .map((service) => ({ service, score: matchScore(article, service.articleTerms) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ service: { slug, url, name, summary } }) => ({ slug, url, name, summary }));
}
