// Form Data Types

// Request Introduction Form (NEW - replaces old IntroductionFormData)
export interface RequestIntroductionFormData {
  fullName: string;
  email: string;
  phone: string;
  organisation: string;
  requestType: 'Landlord' | 'Local Authority' | 'Partner' | 'Other';
  message: string;
  consent: boolean;
  honeypot: string; // Anti-spam field
}

export interface RequestIntroductionValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  organisation?: string;
  requestType?: string;
  message?: string;
  consent?: string;
  _form?: string; // General form error
}

// API Response Type
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  details?: Record<string, string>;
}

// Component Prop Types
export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export interface AnimatedHeroProps {
  headline: string;
  subheadline: string;
}

export interface ProcessSectionProps {
  number: string;
  title: string;
  description: string;
}

export interface LogoProps {
  className?: string;
  color?: string;
}

export interface BulletPoint {
  title: string;
  description: string;
}

export interface CriteriaSectionProps {
  forItems: string[];
  notForItems: string[];
}

// Cookie Consent Types
export interface CookieConsent {
  version: number;
  updatedAt: string; // ISO timestamp
  essential: boolean; // Always true
  analytics: boolean;
  functional: boolean;
}

export interface CookieCategory {
  id: 'essential' | 'analytics' | 'functional';
  label: string;
  description: string;
  required: boolean;
}

export interface CookieConsentContextValue {
  consent: CookieConsent | null;
  updateConsent: (consent: Partial<CookieConsent>) => void;
  openPreferences: () => void;
  hasConsented: boolean;
}

// Onboarding Pack Form Types
export interface OnboardingPackFormData {
  fullName: string;
  email: string;
  phone: string;
  numberOfProperties: string;
  propertyLocations: string;
}

export interface OnboardingPackModalProps {
  isOpen: boolean;
  onClose: () => void;
}
