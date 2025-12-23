# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16 website for the Future Housing Framework, built with React 19, TypeScript, and Tailwind CSS 4. The site provides information about a regulated accommodation framework and includes a GDPR-compliant cookie consent system.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Architecture

### Directory Structure

- **`/app`** - Next.js App Router structure (pages and components)
  - **`/app/components`** - Shared React components
    - **`/cookie-consent`** - Complete cookie consent implementation
    - **`/analytics`** - Analytics integration (respects cookie consent)
  - **`/app/[route]/page.tsx`** - Individual route pages (how-it-works, who-its-for, etc.)
  - **`/app/layout.tsx`** - Root layout with Header, Footer, and providers
  - **`/app/globals.css`** - Global styles, CSS variables, and animations

- **`/lib`** - Shared utilities and type definitions
  - **`/lib/cookies`** - Cookie consent logic (storage, validation)
  - **`/lib/types.ts`** - TypeScript type definitions for the entire project

- **`/public`** - Static assets

### Key Architectural Patterns

#### Cookie Consent System

The project implements a complete GDPR-compliant cookie consent system with dual storage:

1. **Storage Layer** (`/lib/cookies/consent.ts`):
   - Primary storage in cookies (180-day expiry)
   - Fallback to localStorage for resilience
   - Versioned consent for future updates
   - Includes security features (Secure flag in production, SameSite=Lax)

2. **React Context** (`CookieConsentProvider.tsx`):
   - Provides `useCookieConsent()` hook throughout the app
   - Manages consent state and modal visibility
   - Handles client-side hydration safely with `mounted` state

3. **UI Components**:
   - `CookieBanner` - Initial consent request
   - `CookiePreferencesModal` - Granular preference management
   - `CookieSettingsLink` - Reopens preferences from footer

4. **Analytics Integration** (`Analytics.tsx`):
   - Only loads Google Analytics when `consent.analytics === true`
   - Uses Next.js `Script` component with `afterInteractive` strategy
   - GA_MEASUREMENT_ID placeholder needs replacement for production

#### Layout Architecture

The root layout (`/app/layout.tsx`) wraps all pages with:
1. `CookieConsentProvider` - Outermost for app-wide consent access
2. `Header` - Fixed navigation
3. `<main className="pt-16">` - Content with header offset
4. `Footer` - Site footer with cookie settings link
5. `Analytics` - Conditionally loaded based on consent

#### Styling System

- **Tailwind CSS 4** with PostCSS integration
- **CSS Custom Properties** in `globals.css` for theming:
  - Dark theme by default (`className="dark"` on `<html>`)
  - Consistent spacing variables (`--spacing-section`, etc.)
  - Color system using zinc palette
- **Custom animations** defined in `globals.css`:
  - `fadeInUp` - Component entrance animations
  - `gridPulse`, `gridDrift`, `gridFade` - Background grid animations
- **Geist fonts** from `next/font/google` (Sans and Mono variants)

#### Component Patterns

- **Shared components** (`Button`, `SectionContainer`) for consistency
- **Page-specific components** (`AnimatedHero`, `ProcessSection`, etc.)
- **Type safety** - All component props defined in `/lib/types.ts`
- **Client components** - Use `"use client"` directive where needed (forms, animations, consent)

## TypeScript Configuration

- Path aliases: `@/*` maps to project root (use `@/lib/types` not `../../../lib/types`)
- Strict mode enabled
- Target ES2017 for broad compatibility
- React JSX transform (`jsx: "react-jsx"`)

## Important Implementation Details

### Cookie Consent Flow

When adding features that use cookies or tracking:
1. Check consent state via `useCookieConsent()` hook
2. Only load scripts/features if appropriate consent granted
3. See `Analytics.tsx` for reference implementation

### Client-Side Rendering

The cookie consent system requires client-side JavaScript. When working with consent-related components:
- Use `"use client"` directive
- Handle SSR/hydration with `mounted` state checks
- Avoid localStorage access during SSR (causes hydration errors)

### Adding New Pages

New pages follow the pattern:
1. Create `/app/[route-name]/page.tsx`
2. Import shared components from `@/app/components`
3. Wrap content sections in `<SectionContainer>`
4. Use consistent dark theme styling (zinc palette)
5. Follow existing animation patterns for consistency

### Google Analytics Setup

The Analytics component has placeholder `GA_MEASUREMENT_ID`. To enable:
1. Replace both instances in `/app/components/analytics/Analytics.tsx`
2. Ensure users can consent via cookie banner
3. Test that scripts only load when `consent.analytics === true`
