# cv_next — Implementation Plan

**Status:** ✅ Completed 2026-05-21
**Created:** 2026-05-21
**Owner:** Phat Huynh (skordesign@outlook.com)

---

## 1. Problem Statement

The old CV at [`../cv`](../../cv) is a static Bootstrap 4 + jQuery site deployed on Firebase, last updated **September 2023**. It has become stale (no entries since the user's last role change) and uses an aging stack. Build a fresh, Vercel-ready CV at [`cv_next/`](../) that:

- Preserves all factual content from the old CV (experience, education, skills, projects).
- Adds a **Highlights** placeholder section for post-2023 work (user will fill in later).
- Uses a modern FE-only stack — no backend, no Firebase.
- Deploys to Vercel with zero config beyond `vercel.json`.

---

## 2. Decisions (Confirmed)

| Decision | Choice | Rationale |
|---|---|---|
| Framework | **Vite + React 18 + TypeScript** | Lightweight SPA, fast dev server, static build deployable anywhere. |
| Styling | **Tailwind CSS v4 + shadcn/ui** | Utility-first + accessible primitives, easy dark mode. |
| Routing | None (single page, anchor scroll) | Matches old CV UX. |
| Icons | `lucide-react` + simple SVG brand marks | shadcn/ui's default; no devicon-style CDN. |
| Hosting | **Vercel** (static build) | User requirement. |
| Highlights | **Placeholder section** with TODO | User will add content later. |
| Current role | Beetech Solution — `.NET Tech Lead` — Oct 2022 → **Present** | Confirmed unchanged. |
| Memory persistence | **Skip** | User opted out. |
| Package manager | **pnpm** (fallback to npm if not installed) | Faster + smaller `node_modules`. |
| Node version | 20+ (Vercel default) | — |

---

## 3. Architecture

```
cv_next/
├── docs/CURRENT_PLAN.md          (this file)
├── public/                        static assets (profile.png ported from old CV)
├── src/
│   ├── CLAUDE.md                 techstack + coding standards
│   ├── main.tsx                  React entry
│   ├── App.tsx                   layout shell (sidebar nav + sections)
│   ├── index.css                 Tailwind import + theme tokens
│   ├── data/
│   │   └── cv.ts                 single source of truth — typed CV data
│   ├── components/
│   │   ├── Sidebar.tsx           sticky left nav with avatar
│   │   ├── Section.tsx           reusable section wrapper
│   │   ├── ResumeItem.tsx        title / subheading / date pattern
│   │   ├── SkillBadge.tsx        chips for tech list
│   │   └── ui/                   shadcn/ui primitives (Button, Card, Separator, Badge)
│   └── sections/
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Skills.tsx
│       ├── Highlights.tsx        (NEW — placeholder)
│       ├── Projects.tsx
│       └── Interests.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts            (Tailwind v4 uses CSS-first config, kept minimal)
├── components.json               shadcn/ui config
├── vercel.json                   SPA rewrites
├── package.json
└── README.md
```

### Data model (src/data/cv.ts)

```ts
export type Experience = { title: string; company: string; period: string; description: string };
export type EducationEntry = { school: string; degree: string; field?: string; gpa?: string; period: string };
export type Project = { name: string; org: string; role: string; task: string; tech: string; period: string; link?: string; failed?: boolean };
export type Highlight = { title: string; description: string; tags?: string[] };  // placeholder section
```

---

## 4. Files to Create

All under `cv_next/` (folder exists but empty):

- `package.json`, `pnpm-lock.yaml` (or `package-lock.json`)
- `vite.config.ts`, `tsconfig.json`, `tsconfig.node.json`
- `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`
- `src/CLAUDE.md` (techstack + standards, written before coding per PDVS step 1)
- `src/data/cv.ts` (port from old `cv/public/html/*.html`)
- `src/components/{Sidebar,Section,ResumeItem,SkillBadge}.tsx`
- `src/components/ui/{button,card,separator,badge}.tsx` (shadcn/ui)
- `src/sections/{About,Experience,Education,Skills,Highlights,Projects,Interests}.tsx`
- `public/profile.png` (copied from [`../cv/public/img/profile.png`](../../cv/public/img/profile.png) if present)
- `vercel.json`, `.gitignore`, `README.md`
- `CHANGELOGS.md`, `.claude/MEMORY.md`

## 5. Files NOT to Create

- No tests (no testing requirement stated; would add bloat for a static CV).
- No CI workflow (Vercel handles build on push).
- No backend / API routes.

---

## 6. Test Strategy

This is a static informational site with no business logic. **No unit tests.** Verification is limited to:

1. `pnpm run build` — TypeScript + Vite produce a clean static bundle.
2. `pnpm run lint` — ESLint passes (default Vite React-TS preset).
3. `pnpm run dev` — manual smoke test: sections render, nav scrolls, responsive layout works.

If any of the three fails, fix before declaring done (max 3 attempts per failure per PDVS).

---

## 7. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| `pnpm` not on PATH | Fall back to `npm` automatically. |
| Tailwind v4 + shadcn/ui interop quirks | Pin Tailwind to **v4.x** and use shadcn CLI's v4-aware template; or downgrade to Tailwind v3 if blocked. |
| `profile.png` missing from old CV | Use shadcn `<Avatar>` initials fallback. |
| Vercel Node version mismatch | `engines.node = ">=20"` in package.json. |
| Long install on slow network | Time-box `npm install` to 5 min; report and pause if exceeded. |

---

## 8. Sequence

1. **Plan confirmation** (this step — user approval gate).
2. Scaffold Vite project (`npm create vite@latest cv_next -- --template react-ts`, but into existing empty folder).
3. Install Tailwind v4 + shadcn/ui + `lucide-react`.
4. Write `src/CLAUDE.md` (techstack/standards) **before** further coding.
5. Build data file + components + sections in parallel where independent.
6. Add `vercel.json`, copy assets, write README.
7. Verify (build / lint / dev preview).
8. Write CHANGELOGS.md + .claude/MEMORY.md + update this plan with completion status.

---

## 9. Completion Status

- [x] Plan approved (user confirmed via AskUserQuestion, 2026-05-21)
- [x] Scaffold complete (Vite 6.4.2, React 18.3.1, TS 5.7.3, Tailwind 4.3.0)
- [x] Data ported (all of old `cv/public/html/*.html` → `src/data/cv.ts`)
- [x] All sections rendered (About / Experience / Education / Skills / Highlights / Projects / Interests)
- [x] Build / lint / dev pass — `pnpm build` (2.42s), `pnpm lint` (0 errors, 3 shadcn-pattern warnings), `pnpm dev` (ready in 412ms, HTTP 200 for `/`, `/src/App.tsx`, `/src/data/cv.ts`)
- [x] Vercel config in place (`vercel.json` with SPA rewrite + Vite preset)
- [x] Summary docs written (this file, `CHANGELOGS.md`, `.claude/MEMORY.md`)

## 10. Known follow-ups

- **Highlights section is a placeholder** — user opted to fill in post-2023 work later. Edit `src/data/cv.ts` → `highlights` array.
- 3 ESLint warnings remain (`react-refresh/only-export-components` on `theme-provider.tsx`, `ui/badge.tsx`, `ui/button.tsx`). These are intentional shadcn patterns (variants + component co-exported). Suppress by splitting variant definitions into separate files if desired.
- Profile photo copied from old CV (`cv/public/img/profile.png` → `public/profile.png`). Replace with a fresher photo when available.
- `pnpm` v10.33.0 in use; v11.1.3 available. Not blocking.
