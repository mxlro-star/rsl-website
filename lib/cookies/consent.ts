import { CookieConsent } from '../types';

// Constants
export const CONSENT_VERSION = 1;
export const COOKIE_NAME = 'site_cookie_consent';
export const COOKIE_EXPIRY_DAYS = 180;

// Helper function to set a cookie
function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;

  // Use Secure flag only in production (HTTPS)
  const isSecure = typeof window !== 'undefined' && window.location.protocol === 'https:';
  const secureFlag = isSecure ? 'Secure;' : '';

  document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax;${secureFlag}`;
}

// Helper function to get a cookie
function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;

  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
}

// Helper function to delete a cookie
function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
}

// Create default consent object (only essential enabled)
export function createDefaultConsent(): CookieConsent {
  return {
    version: CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
    essential: true,
    analytics: false,
    functional: false,
  };
}

// Save consent to both cookie and localStorage
export function saveConsent(consent: CookieConsent): void {
  try {
    const consentString = JSON.stringify(consent);

    // Save to cookie
    setCookie(COOKIE_NAME, encodeURIComponent(consentString), COOKIE_EXPIRY_DAYS);

    // Save to localStorage as backup
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(COOKIE_NAME, consentString);
    }
  } catch (error) {
    console.error('Failed to save consent:', error);
  }
}

// Load consent from cookie (fallback to localStorage)
export function loadConsent(): CookieConsent | null {
  try {
    // Try cookie first (source of truth)
    const cookieValue = getCookie(COOKIE_NAME);
    if (cookieValue) {
      const decoded = decodeURIComponent(cookieValue);
      const parsed = JSON.parse(decoded) as CookieConsent;

      // Validate structure
      if (
        typeof parsed.version === 'number' &&
        typeof parsed.updatedAt === 'string' &&
        typeof parsed.essential === 'boolean' &&
        typeof parsed.analytics === 'boolean' &&
        typeof parsed.functional === 'boolean'
      ) {
        return parsed;
      }
    }

    // Fallback to localStorage
    if (typeof window !== 'undefined' && window.localStorage) {
      const localValue = localStorage.getItem(COOKIE_NAME);
      if (localValue) {
        const parsed = JSON.parse(localValue) as CookieConsent;

        // Validate and return
        if (
          typeof parsed.version === 'number' &&
          typeof parsed.updatedAt === 'string' &&
          typeof parsed.essential === 'boolean' &&
          typeof parsed.analytics === 'boolean' &&
          typeof parsed.functional === 'boolean'
        ) {
          // Restore to cookie if missing
          saveConsent(parsed);
          return parsed;
        }
      }
    }
  } catch (error) {
    console.error('Failed to load consent:', error);
  }

  return null;
}

// Clear all consent data
export function clearConsent(): void {
  deleteCookie(COOKIE_NAME);
  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem(COOKIE_NAME);
  }
}
