# cv_next — Local Memory

> Per-project knowledge. Survives across sessions and devices. Not the global memory at `~/.claude/...`.

## Tech stack (locked)

- **Vite 6** + **React 18** + **TypeScript 5.7** (strict mode, `noUnusedLocals`, `noUnusedParameters`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — CSS-first config in `src/index.css` (no `tailwind.config.ts`)
- **shadcn/ui** `new-york` / neutral, hand-written primitives in `src/components/ui/` (no CLI used — CLI is interactive and incompatible with this harness)
- **lucide-react** for icons; inline SVGs only for brand marks not in lucide (StackOverflow, Flickr, LinkedIn)
- Path alias **`@/*` → `./src/*`** — enforced; never use relative `../../`
- Package manager: **pnpm** (Node 24 / pnpm 10.33 in user's env)

## Conventions

- Function components only, **named exports** for everything except `App.tsx` and `main.tsx`.
- All CV data lives in [`src/data/cv.ts`](../src/data/cv.ts) — **never** hard-code copy in section components.
- Color via Tailwind CSS variables (defined as OKLCH in `src/index.css`); **never hard-code hex**.
- Conditional classes always go through `cn()` from [`src/lib/utils.ts`](../src/lib/utils.ts).
- Dark mode via `class="dark"` on `<html>` — managed by `ThemeProvider` with `localStorage` key `cv-theme`.

## Sections

In render order in [`src/App.tsx`](../src/App.tsx):
About → Experience → Education → Skills → Projects → Interests.

The **Highlights** section was removed from render on 2026-05-25 (file deleted, `highlights` array in `src/data/cv.ts` emptied). Type `Highlight` is preserved for future re-enable — recreate `src/sections/Highlights.tsx` and add an entry back to the array when ready.

## Deploy

- Vercel-ready via [`vercel.json`](../vercel.json) (framework: vite, SPA rewrites).
- No env vars required. No backend / serverless functions.
- Build command: `pnpm run build` → outputs `dist/`.

## Source of old CV

The legacy Bootstrap-4 + Firebase CV at [`../../cv`](../../cv) (last updated Sept 2023) — all content was ported verbatim into `src/data/cv.ts`. That folder remains untouched for reference.

## Notable decisions

- Chose React 18 (not 19) for safer shadcn ecosystem compat at scaffold time. Safe to bump to React 19 later — types are aligned.
- Skipped tests: this is a static informational site with no business logic. Verification is build + lint + manual dev preview.
- Skipped a `tailwind.config.ts`: Tailwind v4 prefers CSS-first config via `@theme` blocks in the main stylesheet.
- Hand-wrote shadcn primitives instead of running the CLI (interactive prompts incompatible with non-TTY harness).

## UI design system (2026-05-25 rework)

- **Look**: editorial / typographic. `Fraunces` (variable serif, Google Fonts) for headings, `Inter` for body. Hairline `border-border/40` dividers, monochrome + single `--brand` accent, **no card chrome**.
- **No sidebar**. Navigation is a floating top pill ([`src/components/TopNav.tsx`](../src/components/TopNav.tsx)) that fades in after the user scrolls past ~60vh, with anchor links, active-section highlight via `IntersectionObserver`, and the theme toggle.
- **Scroll FX**: native only — no `framer-motion`, no `react-intersection-observer`.
  - [`Reveal.tsx`](../src/components/Reveal.tsx) wraps content in `opacity-0 translate-y-3` → `opacity-100 translate-y-0` via `IntersectionObserver`. Accepts `delay` (ms) for staggered groups. Honors `prefers-reduced-motion`.
  - [`ScrollProgress.tsx`](../src/components/ScrollProgress.tsx) renders a 2px brand-color bar at the top, width via `scaleX` driven by `scrollY / (scrollHeight - innerHeight)`.
- **Section anatomy**: eyebrow label (uppercase, small, brand) → display title (serif, light) → content. Items use a `[10rem_1fr]` grid with date on the left, body on the right, hairline divider between.
- **scroll-mt-28** on sections to clear the floating pill on anchor jumps.

## Open work

- Highlights section content (user-supplied). When re-enabled: recreate `src/sections/Highlights.tsx`, restore `highlights` data, add the anchor to `TopNav.navItems`.
- Visual scroll-fx **not yet eyeballed** in a real browser — needs a human pass on `pnpm dev`.
- Unused shadcn primitives (`ui/card.tsx`, `ui/badge.tsx`, `ui/avatar.tsx`, `ui/separator.tsx`) kept as scaffolding. Delete if confirmed never needed.
- No CI workflow — Vercel handles build on push.
