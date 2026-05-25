# Changelog

## 2026-05-25 — Minimalist UI rework

Reworked the presentation layer to an editorial, typographic minimalist style with native scroll effects. Data layer, types, and build/deploy pipeline are unchanged.

- **Navigation** — removed the fixed left sidebar (`src/components/Sidebar.tsx` deleted). New `TopNav.tsx` renders a centered floating pill that fades in after the hero, with anchor links, active-section highlight, and theme toggle.
- **Scroll effects** — `ScrollProgress.tsx` paints a 2px scroll-position bar at the top. `Reveal.tsx` is a thin `IntersectionObserver` wrapper that fades + slides items up on enter. Both honor `prefers-reduced-motion`. No new dependencies added.
- **Typography** — added `Fraunces` (variable serif) for headings via Google Fonts in `index.html`; kept `Inter` for body. `--font-serif` token added to `index.css`.
- **Visual style** — dropped all card chrome. Sections now use eyebrow label + display serif title + hairline `border-border/40` dividers between items. `SkillBadge` switched from shadcn `<Badge>` to a flat outlined chip.
- **Hero** — restructured `About.tsx` with display name, italic accent surname, two-column summary, scroll indicator, and a corner socials + theme cluster.
- **Highlights section removed** from render and nav (`src/sections/Highlights.tsx` deleted). The data type stays for future re-enable; the placeholder entry in `src/data/cv.ts` was emptied.
- **Verification** — `pnpm build` clean (2.52s), `pnpm lint` 0 errors / 3 expected shadcn warnings, `pnpm dev` HTTP 200 on `/`, `/src/App.tsx`, `/src/data/cv.ts`. **Visual scroll-fx not eyeballed in a real browser** — assistant could not drive one. Worth a quick human pass on `pnpm dev` to confirm the pill reveal, progress bar smoothness, and reveal timing feel right.

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
