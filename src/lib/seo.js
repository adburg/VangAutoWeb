/**
 * Shared SEO rules: title template, canonical URLs and Open Graph defaults.
 * Used by src/components/Seo.js - pages never build these by hand.
 */
import { SITE_URL, absoluteUrl } from "./site.js";

export const SITE_NAME = "Vang Auto";
export const TITLE_SUFFIX = ` | ${SITE_NAME}`;
export const OG_LOCALE = "nb_NO";

// Real photo of the workshop and staff; used when a page has no image of its own.
export const DEFAULT_OG_IMAGE = "/images/profile/omoss.jpg";
export const DEFAULT_OG_IMAGE_ALT = "De ansatte i Vang Auto foran verkstedet";

/**
 * "Tjenester" -> "Tjenester | Vang Auto". Titles that already name the
 * business (for example article seoTitles from n8n) are left as they are.
 */
export function buildTitle(title) {
  const clean = String(title ?? "").trim();
  if (!clean) return SITE_NAME;
  return /vang auto/i.test(clean) ? clean : `${clean}${TITLE_SUFFIX}`;
}

/**
 * Absolute canonical URL without a trailing slash, matching what Netlify
 * serves (www -> apex, trailing slash -> none). The front page is SITE_URL.
 */
export function canonicalUrl(pathname = "/") {
  const clean = String(pathname || "/").split(/[?#]/)[0].replace(/\/+$/, "");
  return clean ? absoluteUrl(clean) : SITE_URL;
}
