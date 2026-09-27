import Head from "next/head";
import React from "react";
import { absoluteUrl } from "../lib/site";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_ALT,
  OG_LOCALE,
  SITE_NAME,
  buildTitle,
  canonicalUrl
} from "../lib/seo";

/**
 * The one place page metadata is rendered. Every page uses this instead of its
 * own <Head> block. All props except `title` are optional.
 *
 *   path           route of the page, e.g. "/tjenester" (drives canonical + og:url)
 *   image          project-relative or absolute image; defaults to the workshop photo
 *   type           "website" (default) or "article"
 *   noindex        keep the page out of search results
 *   publishedTime  ISO date, articles only
 *   ogTitle        social title if it should differ (articles: frontmatter ogTitle)
 *   ogDescription  social description if it should differ
 *   jsonLd         array of schema.org objects from src/lib/schema.js
 */
const Seo = ({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  publishedTime,
  ogTitle,
  ogDescription,
  jsonLd = []
}) => {
  const fullTitle = buildTitle(title);
  const socialTitle = ogTitle || fullTitle;
  const socialDescription = ogDescription || description;
  const url = path != null ? canonicalUrl(path) : null;
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  const ogImageAlt = image ? imageAlt || title : DEFAULT_OG_IMAGE_ALT;
  const schemas = jsonLd.filter(Boolean);

  return (
    <Head>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large"}
      />
      {url && !noindex && <link rel="canonical" href={url} />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={OG_LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={socialTitle} />
      {socialDescription && (
        <meta property="og:description" content={socialDescription} />
      )}
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={ogImage} />
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={socialTitle} />
      {socialDescription && (
        <meta name="twitter:description" content={socialDescription} />
      )}
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, index) => (
        <script
          key={`ld-${index}`}
          type="application/ld+json"
          // JSON.stringify output is safe here apart from "</script>", which we escape.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\u003c")
          }}
        />
      ))}
    </Head>
  );
};

export default Seo;
