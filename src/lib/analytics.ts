import ReactGA from 'react-ga4';

// Initialize Google Analytics
export const initGA = () => {
  ReactGA.initialize('G-9P3KNKPH4X');
};

// Track page view
export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom event
export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// CTA Button Tracking
export const trackCTA = (ctaName: string, location: string) => {
  trackEvent('CTA', 'Click', `${ctaName} - ${location}`);
};

// Form Submission Tracking
export const trackFormSubmission = (formType: string, status: 'success' | 'error') => {
  trackEvent('Form', `Submit ${status}`, formType);
};

// Cal.com Booking Tracking
export const trackBooking = (bookingType: string) => {
  trackEvent('Booking', 'Cal.com Click', bookingType);
};

// Navigation Click Tracking
export const trackNavigation = (linkName: string, linkType: 'internal' | 'external') => {
  trackEvent('Navigation', linkType === 'external' ? 'External Link' : 'Internal Link', linkName);
};

// Outbound Link Tracking
export const trackOutboundLink = (url: string, linkName: string) => {
  trackEvent('Outbound', 'Click', `${linkName} - ${url}`);
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth: number, pagePath: string) => {
  trackEvent('Scroll', `Depth ${depth}%`, pagePath);
};

// Download Tracking
export const trackDownload = (fileName: string, location: string) => {
  trackEvent('Download', 'Click', `${fileName} - ${location}`);
};

// Video/Media Interaction
export const trackMediaInteraction = (action: 'play' | 'pause' | 'complete', mediaName: string) => {
  trackEvent('Media', action, mediaName);
};

// Newsletter Signup
export const trackNewsletterSignup = (location: string) => {
  trackEvent('Newsletter', 'Signup', location);
};
