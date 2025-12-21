"use client";

import { useCookieConsent } from './CookieConsentProvider';

export default function CookieSettingsLink() {
  const { openPreferences } = useCookieConsent();

  return (
    <button
      onClick={openPreferences}
      className="text-zinc-500 hover:text-zinc-300 transition-colors"
    >
      Cookie Settings
    </button>
  );
}
