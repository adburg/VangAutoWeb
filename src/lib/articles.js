/**
 * Article content system.
 *
 * Every article is a single markdown file in src/content/articles/<slug>.md with
 * YAML frontmatter. That file is the ONLY source of truth: it drives the article
 * page at /blog/<slug>, the featured cards and list on /artikler, and all SEO /
 * Open Graph metadata. Adding an article never requires touching application code.
 *
 * These helpers run at build time only (getStaticProps / getStaticPaths) and are
 * therefore free to touch the filesystem.
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import sharp from "sharp";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export const ARTICLES_DIR = path.join(process.cwd(), "src", "content", "articles");

// Fallback used when an image cannot be measured, so a bad image never breaks a build.
const FALLBACK_IMAGE_WIDTH = 1200;
const FALLBACK_IMAGE_HEIGHT = 630;

const imageDimensionCache = new Map();

function articleError(fileName, message) {
  return new Error(
    `Invalid article "src/content/articles/${fileName}": ${message}. ` +
      `See src/content/README.md for the expected frontmatter format.`
  );
}

/**
 * Accepts both "2023-06-06" and the Date object js-yaml produces for an
 * unquoted YAML date, and always returns the ISO day string.
 */
function normalizeDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  const match = /^(\d{4}-\d{2}-\d{2})/.exec(String(value ?? "").trim());
  return match ? match[1] : "";
}

function normalizeKeywords(value) {
  if (Array.isArray(value)) {
    return value.map((keyword) => String(keyword).trim()).filter(Boolean);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean);
  }
  return [];
}

/**
 * Last-resort excerpt: the first plain paragraph of the article body, stripped
 * of markdown syntax. Lets an automated article ship without an explicit excerpt.
 */
function deriveExcerpt(markdown) {
  const firstParagraph = markdown
    .trim()
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith(">"));

  if (!firstParagraph) return "";

  return firstParagraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Intrinsic image dimensions, needed because next/image requires width/height
 * for string sources. Measured once per build and memoised.
 */
async function getImageDimensions(imagePath) {
  const fallback = { width: FALLBACK_IMAGE_WIDTH, height: FALLBACK_IMAGE_HEIGHT };

  if (!imagePath || /^https?:\/\//i.test(imagePath)) return fallback;
  if (imageDimensionCache.has(imagePath)) return imageDimensionCache.get(imagePath);

  let dimensions = fallback;
  try {
    const filePath = path.join(process.cwd(), "public", imagePath.replace(/^\/+/, ""));
    const { width, height } = await sharp(filePath).metadata();
    if (width && height) dimensions = { width, height };
  } catch {
    // Keep the fallback - a missing or unreadable image should not fail the build.
  }

  imageDimensionCache.set(imagePath, dimensions);
  return dimensions;
}

async function markdownToHtml(markdown) {
  const file = await remark()
    .use(remarkGfm)
    // remark-html sanitizes by default, so raw HTML inside an article can never
    // be injected into the page - articles are formatted with markdown only.
    .use(remarkHtml)
    .process(markdown);

  return String(file);
}

function listArticleFiles() {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter(
      (fileName) =>
        /\.mdx?$/i.test(fileName) &&
        !fileName.startsWith("_") &&
        !/^readme\.mdx?$/i.test(fileName)
    )
    .sort();
}

async function readArticleFile(fileName) {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, fileName), "utf8");
  const { data, content } = matter(raw);

  const slug = String(data.slug || fileName.replace(/\.mdx?$/i, "")).trim();
  const title = String(data.title ?? "").trim();
  const date = normalizeDate(data.date);

  if (!slug) throw articleError(fileName, "missing a slug");
  if (!/^[a-z0-9-]+$/.test(slug)) {
    throw articleError(
      fileName,
      `slug "${slug}" must contain only lowercase letters, numbers and hyphens`
    );
  }
  if (!title) throw articleError(fileName, "missing a title");
  if (!date) throw articleError(fileName, "missing a valid date (expected YYYY-MM-DD)");

  const image = String(data.image ?? "").trim();
  const { width: imageWidth, height: imageHeight } = await getImageDimensions(image);
  const seoTitle = String(data.seoTitle ?? "").trim() || title;
  const excerpt = String(data.excerpt ?? "").trim() || deriveExcerpt(content);
  const seoDescription = String(data.seoDescription ?? "").trim() || excerpt;

  return {
    fileName,
    slug,
    url: `/blog/${slug}`,
    title,
    date,
    excerpt,
    image,
    imageAlt: String(data.imageAlt ?? "").trim() || title,
    imageWidth,
    imageHeight,
    seoTitle,
    seoDescription,
    ogTitle: String(data.ogTitle ?? "").trim() || seoTitle,
    ogDescription: String(data.ogDescription ?? "").trim() || seoDescription,
    keywords: normalizeKeywords(data.keywords),
    draft: data.draft === true,
    body: content
  };
}

function byNewestFirst(a, b) {
  if (a.date !== b.date) return a.date < b.date ? 1 : -1;
  return a.slug.localeCompare(b.slug);
}

function toMetadata({ body, fileName, ...metadata }) {
  return metadata;
}

/**
 * Every published article's metadata, newest first. Drives /artikler.
 */
export async function getAllArticles() {
  const articles = await Promise.all(listArticleFiles().map(readArticleFile));

  const published = articles.filter((article) => !article.draft);

  const seen = new Map();
  for (const article of published) {
    if (seen.has(article.slug)) {
      throw new Error(
        `Duplicate article slug "${article.slug}" in ${seen.get(article.slug)} and ${article.fileName}.`
      );
    }
    seen.set(article.slug, article.fileName);
  }

  return published.sort(byNewestFirst).map(toMetadata);
}

/**
 * Slugs of every published article. Drives getStaticPaths for /blog/[slug].
 */
export async function getArticleSlugs() {
  const articles = await getAllArticles();
  return articles.map((article) => article.slug);
}

/**
 * One article, metadata plus its rendered body. Returns null for unknown slugs
 * so the page can render a 404.
 */
export async function getArticleBySlug(slug) {
  const articles = await Promise.all(listArticleFiles().map(readArticleFile));
  const article = articles.find(
    (candidate) => candidate.slug === slug && !candidate.draft
  );

  if (!article) return null;

  return {
    ...toMetadata(article),
    contentHtml: await markdownToHtml(article.body)
  };
}
