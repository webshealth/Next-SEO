export const GA_TRACKING_ID = "G-1GZ3X218E"; //replace it with your measurement id

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ event_name, event_parameter }) => {
  window.gtag("event", event_name, {
    event_parameter: "",
  });
};
