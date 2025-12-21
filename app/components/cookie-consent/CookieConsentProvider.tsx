"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CookieConsent, CookieConsentContextValue } from '@/lib/types';
import { loadConsent, saveConsent, CONSENT_VERSION } from '@/lib/cookies/consent';
import CookieBanner from './CookieBanner';
import CookiePreferencesModal from './CookiePreferencesModal';

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsented, setHasConsented] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load consent on mount (client-side only)
  useEffect(() => {
    setMounted(true);
    const loaded = loadConsent();
    if (loaded && loaded.version === CONSENT_VERSION) {
      setConsent(loaded);
      setHasConsented(true);
    }
  }, []);

  const updateConsent = (partial: Partial<CookieConsent>) => {
    const newConsent: CookieConsent = {
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
      essential: true, // Always true
      analytics: partial.analytics ?? false,
      functional: partial.functional ?? false,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setHasConsented(true);
  };

  const openPreferences = () => {
    setPreferencesOpen(true);
  };

  const closePreferences = () => {
    setPreferencesOpen(false);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, updateConsent, openPreferences, hasConsented }}>
      {children}
      {mounted && !hasConsented && <CookieBanner />}
      {mounted && preferencesOpen && <CookiePreferencesModal onClose={closePreferences} />}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
