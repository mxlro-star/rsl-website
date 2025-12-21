"use client";

import Link from 'next/link';
import { useCookieConsent } from './CookieConsentProvider';

export default function CookieBanner() {
  const { updateConsent, openPreferences } = useCookieConsent();

  const handleAcceptAll = () => {
    updateConsent({ analytics: true, functional: true });
  };

  const handleRejectNonEssential = () => {
    updateConsent({ analytics: false, functional: false });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Message */}
          <div className="flex-1">
            <p className="text-sm text-zinc-400 leading-relaxed">
              We use essential cookies to make this site work. With your permission, we may also use analytics cookies to understand usage and improve the site. You can accept, reject non-essential cookies, or{' '}
              <Link href="/cookie-policy" className="text-blue-500 hover:text-blue-400 underline">
                view our cookie policy
              </Link>
              .
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 min-w-fit">
            <button
              onClick={openPreferences}
              className="px-6 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-50 border border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              Manage preferences
            </button>
            <button
              onClick={handleRejectNonEssential}
              className="px-6 py-2.5 text-sm font-medium text-zinc-300 hover:text-zinc-50 border border-zinc-700 hover:border-zinc-500 transition-colors"
            >
              Reject non-essential
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-sm font-medium text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
