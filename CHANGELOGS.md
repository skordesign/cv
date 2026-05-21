# Changelog

## 2026-05-21 — Initial release

Built `cv_next` from scratch as the successor to the legacy Firebase-hosted CV at [`../cv`](../cv).

- **Stack**: Vite 6 + React 18 + TypeScript 5.7 (strict) + Tailwind CSS v4 + shadcn/ui (hand-rolled primitives, neutral / new-york style) + lucide-react.
- **Sections** (one component each under `src/sections/`): About, Experience, Education, Skills, Highlights (placeholder), Projects, Interests.
- **Single source of truth** — all CV copy in [`src/data/cv.ts`](src/data/cv.ts). Components are dumb renderers.
- **Theming** — light / dark / system toggle persisted to `localStorage`, OKLCH-based color tokens.
- **Layout** — fixed 288px sidebar on `lg+`, collapsible top-bar on mobile, scroll-spy nav.
- **Deploy** — Vercel-ready via [`vercel.json`](vercel.json) (Vite framework preset + SPA rewrites).
- **Content** — ported entire old CV verbatim; current role updated to "Beetech Solution · .NET Tech Lead · Oct 2022 – Present".
- **Highlights** — placeholder card with TODO tag. To be filled by user with post-Sept-2023 work.
- **Assets** — `public/profile.png` copied from old CV, plus a generated SVG favicon.
- **Verification** — `pnpm build` clean (2.4s), `pnpm lint` 0 errors / 3 expected warnings, `pnpm dev` serves HTTP 200 with no console errors.
