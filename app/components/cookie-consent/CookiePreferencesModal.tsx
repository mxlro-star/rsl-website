"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCookieConsent } from './CookieConsentProvider';
import { CookieCategory } from '@/lib/types';
import { clearConsent } from '@/lib/cookies/consent';

interface Props {
  onClose: () => void;
}

const COOKIE_CATEGORIES: CookieCategory[] = [
  {
    id: 'essential',
    label: 'Essential Cookies',
    description: 'Required for basic site functionality, security, and access control. These cannot be disabled.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Analytics Cookies',
    description: 'Help us understand how visitors interact with our website by collecting anonymous usage data.',
    required: false,
  },
  {
    id: 'functional',
    label: 'Functional Cookies',
    description: 'Enable enhanced functionality and personalization, such as remembering your preferences.',
    required: false,
  },
];

export default function CookiePreferencesModal({ onClose }: Props) {
  const { consent, updateConsent } = useCookieConsent();
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: consent?.analytics ?? false,
    functional: consent?.functional ?? false,
  });

  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLButtonElement>(null);

  // Focus trap and keyboard handling
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    // Focus first element
    firstFocusableRef.current?.focus();

    // Prevent background scroll
    document.body.style.overflow = 'hidden';

    // Trap focus within modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleToggle = (category: 'analytics' | 'functional') => {
    setPreferences(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const handleSave = () => {
    updateConsent(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    updateConsent({ analytics: true, functional: true });
    onClose();
  };

  const handleRejectNonEssential = () => {
    updateConsent({ analytics: false, functional: false });
    onClose();
  };

  const handleReset = () => {
    if (confirm('This will reset your cookie preferences. The banner will reappear on your next visit. Continue?')) {
      clearConsent();
      window.location.reload();
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 id="modal-title" className="text-2xl font-medium text-zinc-50">
              Cookie Preferences
            </h2>
            <button
              ref={firstFocusableRef}
              onClick={onClose}
              className="text-zinc-400 hover:text-zinc-50 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
            Manage your cookie preferences. Essential cookies are always active as they are necessary for the website to function.
            Learn more in our{' '}
            <Link href="/cookie-policy" className="text-blue-500 hover:text-blue-400 underline">
              Cookie Policy
            </Link>
            .
          </p>

          {/* Categories */}
          <div className="space-y-6 mb-8">
            {COOKIE_CATEGORIES.map((category) => (
              <div key={category.id} className="border border-zinc-800 bg-zinc-950/50 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-zinc-50 mb-2">
                      {category.label}
                    </h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Toggle */}
                  <div className="flex-shrink-0">
                    {category.required ? (
                      <div className="px-3 py-1 text-xs font-medium text-zinc-500 border border-zinc-800 bg-zinc-900">
                        Always active
                      </div>
                    ) : (
                      <button
                        onClick={() => handleToggle(category.id as 'analytics' | 'functional')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          preferences[category.id as keyof typeof preferences]
                            ? 'bg-blue-500'
                            : 'bg-zinc-700'
                        }`}
                        role="switch"
                        aria-checked={preferences[category.id as keyof typeof preferences]}
                        aria-label={`Toggle ${category.label}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            preferences[category.id as keyof typeof preferences]
                              ? 'translate-x-6'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="space-y-4">
            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onClose}
                className="px-6 py-3 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-6 py-3 text-sm font-medium text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-50 transition-colors"
              >
                Reject non-essential
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-3 text-sm font-medium text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                Accept all
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-3 text-sm font-medium text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600 transition-colors"
              >
                Save preferences
              </button>
            </div>

            {/* Reset Link */}
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={handleReset}
                className="text-xs text-zinc-500 hover:text-zinc-400 transition-colors"
              >
                Reset all preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
