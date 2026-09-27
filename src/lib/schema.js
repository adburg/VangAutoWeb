/**
 * schema.org JSON-LD builders. Every value here must also be visible on the
 * page it is used on - structured data describes the page, it never adds
 * claims of its own. No prices, no aggregateRating (the site has no reviews),
 * and no FAQPage (Google no longer shows FAQ results; the questions are
 * visible text instead).
 */
import { BUSINESS, sameAsProfiles } from "./business.js";
import { DEFAULT_OG_IMAGE, SITE_NAME, canonicalUrl } from "./seo.js";
import { SITE_URL, absoluteUrl } from "./site.js";

const CONTEXT = "https://schema.org";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
const LOGO_PATH = "/images/svgs/logo.png";

function postalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    postalCode: BUSINESS.address.postalCode,
    addressLocality: BUSINESS.address.locality,
    addressRegion: BUSINESS.address.region,
    addressCountry: BUSINESS.address.country
  };
}

function areaServed() {
  return BUSINESS.areaServed.map((name) => ({ "@type": "City", name }));
}

/**
 * The business itself (AutoRepair is a LocalBusiness subtype). Used on the
 * front page, where the address, phone, e-mail and opening hours are shown.
 */
export function autoRepairSchema() {
  const schema = {
    "@context": CONTEXT,
    "@type": "AutoRepair",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.legalName,
    alternateName: BUSINESS.name,
    url: canonicalUrl("/"),
    logo: absoluteUrl(LOGO_PATH),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    telephone: BUSINESS.phone.e164,
    email: BUSINESS.email,
    address: postalAddress(),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: BUSINESS.openingHours.days,
        opens: BUSINESS.openingHours.opens,
        closes: BUSINESS.openingHours.closes
      }
    ],
    areaServed: areaServed()
  };

  if (BUSINESS.geo?.latitude && BUSINESS.geo?.longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude
    };
    schema.hasMap = `https://www.google.com/maps/search/?api=1&query=${BUSINESS.geo.latitude},${BUSINESS.geo.longitude}`;
  }

  const sameAs = sameAsProfiles();
  if (sameAs.length) schema.sameAs = sameAs;

  return schema;
}

/**
 * Short reference to the business, for use as provider/author/publisher on
 * pages that do not show the full NAP block.
 */
function organizationReference() {
  return {
    "@type": "AutoRepair",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.legalName,
    url: canonicalUrl("/")
  };
}

export function websiteSchema() {
  return {
    "@context": CONTEXT,
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: canonicalUrl("/"),
    inLanguage: "nb-NO",
    publisher: { "@id": ORGANIZATION_ID }
  };
}

export function serviceSchema(service) {
  return {
    "@context": CONTEXT,
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.seoDescription,
    url: canonicalUrl(service.url),
    image: absoluteUrl(service.image),
    provider: organizationReference(),
    areaServed: areaServed()
  };
}

export function blogPostingSchema(article) {
  const organization = {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BUSINESS.legalName,
    url: canonicalUrl("/"),
    logo: { "@type": "ImageObject", url: absoluteUrl(LOGO_PATH) }
  };

  const schema = {
    "@context": CONTEXT,
    "@type": "BlogPosting",
    headline: article.title,
    description: article.seoDescription,
    datePublished: article.date,
    inLanguage: "nb-NO",
    mainEntityOfPage: canonicalUrl(article.url),
    url: canonicalUrl(article.url),
    author: organization,
    publisher: organization
  };

  if (article.image) schema.image = absoluteUrl(article.image);

  return schema;
}

/**
 * Mirrors the visible <Breadcrumbs> trail: pass the same items.
 */
export function breadcrumbSchema(items) {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path)
    }))
  };
}
