/**
 * Verified business facts (NAP: name, address, phone) - the single source for
 * the footer, the contact page, the front page and all JSON-LD.
 *
 * These strings must match the Google Business Profile exactly. Do not retype
 * them in components; import them from here. See docs/seo/seo-kontrakt.md.
 */
export const BUSINESS = {
  legalName: "Vang Auto AS",
  name: "Vang Auto",
  address: {
    street: "Vindholvegen 1",
    postalCode: "2324",
    locality: "Vang På Hedmark",
    region: "Innlandet",
    country: "NO"
  },
  phone: {
    display: "62 59 57 33",
    e164: "+4762595733"
  },
  email: "post@vangauto.no",
  bookingPath: "/bestilltime",
  geo: {
    latitude: 60.8268862,
    longitude: 11.2526382
  },
  // Google Maps Place ID of the business listing; makes map links open the listing itself.
  googlePlaceId: "ChIJE6u798HiQUYRTu00wSYFqX4",
  openingHours: {
    display: "Mandag–fredag 07.00–16.00",
    closedDisplay: "Lørdag og søndag stengt",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "07:00",
    closes: "16:00"
  },
  areaServed: ["Hamar", "Løten", "Elverum", "Stange", "Ringsaker"],
  // Leave a profile null until its URL is confirmed; null entries are never rendered.
  profiles: {
    facebook: "https://facebook.com/vangauto",
    // Stable CID form of the Google Business Profile (from maps.app.goo.gl/oass485Wv38r95rf8).
    google: "https://www.google.com/maps?cid=9126831783851388238",
    meca: "https://www.meca.no/bilverksted/vang-hedmark/vang-auto-as",
    dekkpartner: "https://www.dekkpartner.no/vang/vang-auto-as"
  }
};

export const PHONE_HREF = `tel:${BUSINESS.phone.e164}`;
export const EMAIL_HREF = `mailto:${BUSINESS.email}`;
export const FULL_ADDRESS = `${BUSINESS.address.street}, ${BUSINESS.address.postalCode} ${BUSINESS.address.locality}`;
// Google Maps URLs API: the query is the fallback, query_place_id pins the exact listing.
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS.legalName}, ${FULL_ADDRESS}`
)}&query_place_id=${BUSINESS.googlePlaceId}`;

export function sameAsProfiles() {
  return Object.values(BUSINESS.profiles).filter(Boolean);
}
