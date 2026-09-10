/**
 * Central site configuration.
 *
 * The public base URL is used to turn project-relative paths (which is what the
 * markdown articles store, and what next/image needs) into the absolute URLs
 * that external crawlers such as Facebook and Twitter/X require.
 *
 * Override per environment with NEXT_PUBLIC_SITE_URL, e.g. a preview deploy.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://vangauto.no"
).replace(/\/+$/, "");

/**
 * Turn a project-relative path into an absolute, publicly reachable URL.
 *
 *   absoluteUrl("/images/articles/feriebil.jpg")
 *     -> "https://vangauto.no/images/articles/feriebil.jpg"
 *
 * Values that are already absolute are returned untouched.
 */
export function absoluteUrl(pathname = "/") {
  if (!pathname) return SITE_URL;
  if (/^https?:\/\//i.test(pathname)) return pathname;
  return `${SITE_URL}/${String(pathname).replace(/^\/+/, "")}`;
}
