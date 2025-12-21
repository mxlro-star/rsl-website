"use client";

import Script from 'next/script';
import { useCookieConsent } from '../cookie-consent/CookieConsentProvider';

export default function Analytics() {
  const { consent } = useCookieConsent();

  // Only load analytics if user has consented
  if (!consent?.analytics) {
    return null;
  }

  return (
    <>
      {/* Google Analytics - Replace GA_MEASUREMENT_ID with your actual tracking ID */}
      {/* Example: G-XXXXXXXXXX */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
    </>
  );
}
