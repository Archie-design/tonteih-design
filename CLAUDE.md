# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

There are no tests configured.

## Architecture

**Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Supabase

This is a 5-page marketing site for 雅筑設計 (Atelier Design), a Taiwanese interior design firm.

```
src/
  app/
    layout.tsx          # Root layout — wraps all pages with Navbar + Footer
    page.tsx            # Home (Hero, Stats, Bento Grid, Process, Testimonial)
    about/page.tsx
    services/page.tsx
    portfolio/page.tsx
    contact/page.tsx    # Renders <ContactForm>
    globals.css         # Tailwind v4 @theme tokens + utility classes
  components/
    Navbar.tsx
    Footer.tsx
    ContactForm.tsx     # 'use client' — contact form with Server Action submission
  lib/
    supabase.ts         # Supabase client + ContactSubmission type
    actions.ts          # 'use server' — submitContact() inserts into contacts table
```

## Design System

All colors, radii, and fonts are CSS custom properties defined in `globals.css` under `@theme {}` (Tailwind v4 syntax). Always reference them via `var(--color-*)` in className strings — never hardcode hex values.

- **Primary palette**: `--color-primary` (dark charcoal), `--color-secondary` (warm brown)
- **Surfaces**: `--color-surface` through `--color-surface-container-highest` (light scale)
- **Typography**: `font-headline` → Manrope, `font-body` → Noto Serif TC, `font-label` → Manrope
- **Icons**: Google Material Symbols Outlined loaded via `<link>` in `layout.tsx` — use `<span className="material-symbols-outlined">`

## Next.js 16 Notes

- This is **Next.js 16**, which has breaking changes vs. older versions. Read `node_modules/next/dist/docs/` before writing any Next.js-specific code.
- Use `proxy.ts` (not `middleware.ts`) for request interception if needed.
- All pages are Server Components by default; add `'use client'` only for interactive components.

## Environment Variables

Required in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

The Supabase `contacts` table schema matches the `ContactSubmission` type in `src/lib/supabase.ts`: `name`, `phone`, `property_type`, `requirement`, `budget`, `detail`, `created_at`.
