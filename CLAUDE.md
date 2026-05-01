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

**Stack**: Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Neon Postgres (`@neondatabase/serverless`)

This is a 5-page marketing site for 美東歐美室內設計, a Taoyuan-based Taiwanese interior design firm.

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
    db.ts               # Lazy-init Neon SQL client (getSql) + ContactSubmission type
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

Required in `.env.local` (auto-provisioned by Vercel Marketplace Neon integration):

```
DATABASE_URL=postgres://...
ADMIN_PASSWORD=...                     # password for /admin gate
NEXT_PUBLIC_SITE_URL=                  # optional, used by metadataBase
```

## Admin Page

`/admin` lists contact submissions. Auth gate uses HMAC(`ADMIN_PASSWORD`) stored in an HttpOnly cookie:
- `src/lib/auth.ts` — `makeToken` / `verifyToken` / `checkPassword`
- `src/app/admin/login/` — login form + Server Action
- `src/app/admin/page.tsx` — server-side cookie check, queries `contacts`, renders table

`getSql()` in `src/lib/db.ts` lazily reads `DATABASE_URL` only on first query — `next build` does not require it to be set.

## Database Schema

Run once on Neon (SQL Editor or `psql`):

```sql
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_type TEXT NOT NULL,
  requirement TEXT NOT NULL,
  budget TEXT NOT NULL,
  detail TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

Schema matches the `ContactSubmission` type in `src/lib/db.ts`.
