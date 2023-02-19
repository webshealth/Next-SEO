declare global {
  interface Window {
    gtag: any;
  }
}

// export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  // if (typeof window.gtag !== 'undefined') {
  window.gtag('config', 'G-1GZ3X218EX', {
    page_path: url,
  });
};
// };
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: string;
  // debug_mode: boolean;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  // if (typeof window.gtag !== 'undefined') {
  window.gtag('event', action, {
    category: category,
    label: label,
    value: value,
  });
};
// };
