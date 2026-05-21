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
About → Experience → Education → Skills → **Highlights** → Projects → Interests.

The **Highlights** section is a placeholder for post-Sept-2023 work the user opted to fill in later. Update by editing `highlights` array in `src/data/cv.ts`.

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

## Open work

- Highlights section content (user-supplied).
- No CI workflow — Vercel handles build on push.
