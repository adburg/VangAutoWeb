/**
 * Markdown -> HTML for content files (articles and service pages).
 *
 * Imported by scripts/generate-seo-files.mjs as plain Node ESM, so relative
 * imports in src/lib must keep their ".js" extension.
 */
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

export async function markdownToHtml(markdown) {
  const file = await remark()
    .use(remarkGfm)
    // remark-html sanitizes by default, so raw HTML inside an article can never
    // be injected into the page - articles are formatted with markdown only.
    .use(remarkHtml)
    .process(markdown);

  return String(file);
}
