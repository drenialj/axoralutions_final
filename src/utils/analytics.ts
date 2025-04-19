export function gtag_report_conversion(url?: string) {
  const callback = function () {
    if (typeof(url) != 'undefined') {
      window.location.href = url;
    }
  };
  
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-17019452246/mOyyCL2e3roaENb2wLM_',
      'value': 1.0,
      'currency': 'EUR',
      'event_callback': callback
    });
  }
  
  return false;
} 