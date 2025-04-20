// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    fbq: (...args: any[]) => void;
  }
}

export function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-17019452246/mOyyCL2e3roaENb2wLM_',
      'value': 1.0,
      'currency': 'EUR',
      'event_callback': callback
    });
  }
  
  return false;
}

export function track_form_submission() {
  // Google Ads Conversion
  gtag_report_conversion();
  
  // Facebook Pixel Conversion
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
} 