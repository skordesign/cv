# cv_next — Source Code Standards

## Tech stack

| Layer | Choice | Notes |
|---|---|---|
| Build | **Vite 6** | static SPA, `vite build` outputs `dist/` |
| Language | **TypeScript 5.7** (strict) | `noUnusedLocals`, `noUnusedParameters` ON |
| UI | **React 18** + JSX runtime (no `import React` needed) | function components only, no class components |
| Styling | **Tailwind CSS v4** via `@tailwindcss/vite` | CSS-first config — theme tokens live in `index.css` |
| Components | **shadcn/ui** (`new-york` style, neutral base) | components live under `@/components/ui/`, hand-rolled (no CLI) |
| Icons | **lucide-react** | tree-shaken, no other icon set |
| Path alias | `@/*` → `./src/*` | always use the alias, never `../../../` |
| Lint | ESLint 9 flat config + `typescript-eslint` + `react-hooks` | run via `pnpm lint` |
| Deploy | **Vercel** static (no server functions) | `vercel.json` rewrites all routes to `/index.html` |

## Coding standards

1. **Single source of truth** — all CV data lives in `src/data/cv.ts`. Sections only render data; they never hard-code copy.
2. **Function components only**, named exports, no default exports for components (except entry-level `App.tsx` and `main.tsx`).
3. **Types over interfaces** for data shapes (`type Foo = { ... }`). Use `interface` only for extensible component prop contracts when needed.
4. **No barrel files** (`index.ts` re-exports). Import directly from the file.
5. **Imports order** (enforced by convention, not lint): react → external libs → `@/*` → relative.
6. **Class composition** — always use `cn()` from `@/lib/utils.ts` when conditionally combining Tailwind classes.
7. **Dark mode** — toggled via `class="dark"` on `<html>`. All color tokens go through Tailwind CSS variables defined in `index.css`. **Never** hard-code hex colors in components.
8. **No CSS modules, no inline `style={{}}`** unless absolutely required (e.g., dynamic computed values).
9. **Accessibility** — semantic HTML (`<section>`, `<h2>`, `<nav>`), `aria-label` on icon-only buttons, `alt` on every `<img>`.
10. **No comments explaining what** — code is self-documenting via naming. Only comment the non-obvious *why*.

## File organisation

```
src/
├── data/cv.ts              ← single source of truth
├── lib/utils.ts            ← cn() helper only
├── components/
│   ├── ui/                 ← shadcn primitives (Button, Card, Badge, Separator, Avatar)
│   ├── theme-provider.tsx  ← dark/light context
│   ├── theme-toggle.tsx
│   ├── Sidebar.tsx
│   ├── Section.tsx
│   ├── ResumeItem.tsx
│   └── SkillBadge.tsx
└── sections/               ← one file per CV section
    ├── About.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Skills.tsx
    ├── Highlights.tsx
    ├── Projects.tsx
    └── Interests.tsx
```

## Adding content

- New experience / project → add an entry to `src/data/cv.ts`. **Do not** edit section components for content changes.
- New section → create `src/sections/<Name>.tsx`, add to `App.tsx` and `Sidebar.tsx` nav links.
- New shadcn primitive → write by hand into `@/components/ui/`; reference shadcn docs for the source.

## Commands

```bash
pnpm install     # first run
pnpm dev         # dev server (http://localhost:5173)
pnpm build       # type-check + production bundle
pnpm lint        # ESLint
pnpm preview     # serve the production build locally
```

## Vercel

Push to a branch connected to Vercel — it auto-detects Vite via `vercel.json` and builds. No env vars required.
