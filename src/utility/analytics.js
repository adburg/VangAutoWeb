const GA_TRACKING_ID = "G-8WPTGWRZCG";

export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url
  });
};
