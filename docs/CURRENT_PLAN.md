# cv_next — UI Rework Plan

**Status:** ✅ Completed 2026-05-25
**Created:** 2026-05-25
**Owner:** Phat Huynh (skordesign@outlook.com)

> Supersedes the previous "Implementation Plan" (completed 2026-05-21). The original scaffold + content port is unchanged; only the presentation layer is being reworked.

---

## 1. Problem Statement

The current CV uses a fixed left sidebar nav and shadcn-style card blocks. The user wants:

- **Minimalist look** — typographic / editorial, hairline dividers, generous whitespace, one accent color.
- **Scroll effects** — content fades + slides up as it enters the viewport, plus a thin scroll-progress bar at the top.
- **No sidebar** — replace with a small floating top pill nav that appears on scroll and highlights the active section.
- **Drop the Highlights placeholder section** until real content exists.

All CV data, the data model, and the build/deploy pipeline stay as-is. This is a pure presentation-layer rework.

---

## 2. Decisions (Confirmed by user)

| Decision | Choice |
|---|---|
| Navigation | **Floating top pill** — centered, semi-transparent, anchors + active highlight + theme toggle, appears on scroll past hero |
| Scroll effect | **Fade + slide-up on enter** via IntersectionObserver + CSS (no framer-motion) |
| Visual style | **Typographic / editorial** — display heading, hairline dividers, monochrome + single accent (brand), no cards |
| Theme toggle | **Keep** (lives in the floating pill / top-right) |
| Scroll progress | **Add** — thin bar fixed at top, width = scroll % |
| Highlights section | **Drop** — remove from render & nav (data file stays, placeholder entry deleted) |
| Sidebar.tsx | **Delete** — dead code not kept |
| Lib additions | **None** — no framer-motion, no react-intersection-observer; native IntersectionObserver + Tailwind transitions |

---

## 3. Approach

### 3.1 Layout / components

- **Delete** `src/components/Sidebar.tsx`.
- **New** `src/components/TopNav.tsx` — floating pill with anchor links, active-section highlight, theme toggle. Shows after user scrolls past the hero (~80% of first viewport).
- **New** `src/components/ScrollProgress.tsx` — fixed 2px bar at top, width driven by `scroll / (scrollHeight - innerHeight)`.
- **New** `src/components/Reveal.tsx` — thin wrapper that adds `opacity-0 translate-y-3` and toggles to `opacity-100 translate-y-0` once visible via IntersectionObserver. Honors `prefers-reduced-motion` (skips animation, shows immediately).
- **Update** `src/components/Section.tsx` — drop the heavy border + uppercase title style; replace with hairline top rule + small uppercase eyebrow label + large display title. Wrap children in `<Reveal>` group.
- **Update** `src/components/ResumeItem.tsx` — strip card chrome, switch to a typographic two-column layout (date small on the left/top, content body on the right). Hairline divider between items.
- **Update** `src/components/SkillBadge.tsx` — drop the shadcn Badge, render as plain inline-block with subtle border + monospace tracking.

### 3.2 Sections

- **About / hero** — full-viewport, name in display weight, role + tagline below, contact line, summary list. No card. Removes the "min-h-screen flex items-center" hack — replaced by an editorial hero with breathing room.
- **Experience / Education / Projects** — keep data shape, restyle with the new `ResumeItem`. Project items lose the left border + dl grid; switch to a tighter typographic list.
- **Skills** — group label as eyebrow, items as the new `SkillBadge` inline list. "Worked on" becomes a plain bulleted list (no `Check` icon, replaced with a hairline left rule).
- **Highlights** — **removed** from `App.tsx` and from the nav. Data entry deleted from `src/data/cv.ts` (the type stays for future re-enable).
- **Interests** — minor type/spacing tweaks only.

### 3.3 App shell

- `App.tsx` no longer renders `<Sidebar />`. Instead renders `<ScrollProgress />`, `<TopNav />`, then sections directly. No `lg:ml-72` offset.
- Hero (`About`) gets a top-right corner cluster (theme toggle + socials icons) — visible while the pill is hidden.

### 3.4 Theme + typography

- `index.css` — add display font hookup. Use `Fraunces` (variable serif, Google Fonts) for headings, keep `Inter` for body. Loaded via `<link>` in `index.html`.
- Tweak `--brand` token slightly if it reads too saturated against the new monochrome palette (decide during build, not pre-commit).

### 3.5 Scroll mechanics

- `html { scroll-behavior: smooth }` stays.
- `scroll-mt-*` on sections increased to clear the floating pill nav.
- Reveal uses `rootMargin: "0px 0px -10% 0px"` and `threshold: 0.1` — fires slightly before fully in view.

---

## 4. Files to create / modify / delete

**Create**
- `src/components/TopNav.tsx`
- `src/components/ScrollProgress.tsx`
- `src/components/Reveal.tsx`

**Modify**
- `src/App.tsx` — swap shell composition
- `src/index.css` — display font, refined tokens, reveal utilities if needed
- `index.html` — Google Fonts preconnect + stylesheet link for Fraunces
- `src/components/Section.tsx` — editorial layout
- `src/components/ResumeItem.tsx` — strip chrome
- `src/components/SkillBadge.tsx` — flat style
- `src/sections/About.tsx` — hero rework + corner cluster
- `src/sections/Experience.tsx`, `Education.tsx`, `Projects.tsx`, `Skills.tsx`, `Interests.tsx` — style tweaks (data unchanged)
- `src/data/cv.ts` — drop placeholder Highlight entry (keep `Highlight` type)
- `src/CLAUDE.md` — document the new components + scroll-fx conventions
- `CHANGELOGS.md` — append rework entry
- `.claude/MEMORY.md` — append new conventions (nav, reveal, typography)

**Delete**
- `src/components/Sidebar.tsx`
- `src/sections/Highlights.tsx`

---

## 5. Test strategy

Per project convention: **no unit tests**. Verification is:

1. `pnpm build` — TypeScript + Vite produce a clean static bundle.
2. `pnpm lint` — ESLint passes (warnings already known on shadcn `ui/*` files are allowed).
3. `pnpm dev` — manual smoke: scroll through, verify pill appears past hero, anchors scroll to the right place, active link updates, progress bar tracks, reveals fire once, dark mode toggles, mobile layout reflows.

If lint/build fails — fix the code, don't suppress. Cap at 3 attempts before stopping and reporting.

---

## 6. Risks

| Risk | Mitigation |
|---|---|
| Display font (`Fraunces`) slows first paint | `preconnect` + `display=swap`; fall back to system serif. |
| IntersectionObserver janky on Safari for first-paint elements | Use `threshold: 0.1` + `rootMargin` headroom; visible-by-default until JS hydrates (no `opacity:0` before JS). |
| Floating pill collides with hero text on mobile | Pill is hidden until scroll past hero on all breakpoints. |
| `prefers-reduced-motion` users | `Reveal` short-circuits to visible immediately when the media query matches. |

---

## 7. Sequence

1. **Plan confirmation** (user gate — this step).
2. Update `src/CLAUDE.md` (techstack + new component conventions).
3. Create `Reveal.tsx`, `ScrollProgress.tsx`, `TopNav.tsx` in parallel.
4. Update `Section.tsx`, `ResumeItem.tsx`, `SkillBadge.tsx` in parallel.
5. Restyle all sections + `About` hero in parallel.
6. Rewrite `App.tsx`, edit `index.html` + `index.css` + `data/cv.ts`.
7. Delete `Sidebar.tsx` and `Highlights.tsx`.
8. Verify: `pnpm build` → `pnpm lint` → `pnpm dev` (manual scroll check).
9. Update `CHANGELOGS.md`, `.claude/MEMORY.md`, and this plan's completion status.

---

## 8. Completion status

- [x] Plan approved (user confirmed 2026-05-25)
- [x] `src/CLAUDE.md` updated with new UI design system + component conventions
- [x] New components created (`TopNav.tsx`, `ScrollProgress.tsx`, `Reveal.tsx`)
- [x] Shell + section components restyled (Section, ResumeItem, SkillBadge, all sections)
- [x] Highlights section + Sidebar removed (files deleted, data emptied)
- [x] Build (2.52s) / lint (0 errors, 3 expected warnings) / dev (HTTP 200) pass
- [x] CHANGELOGS.md + .claude/MEMORY.md updated

## 9. Known limitations

- Visual scroll effects were **not eyeballed in a real browser** — the assistant could not drive one. Build/lint/dev probe is green, but timing/feel of the floating pill, progress bar, and reveal transitions should be human-verified on `pnpm dev`.
- Unused shadcn primitives (`ui/card.tsx`, `ui/badge.tsx`, `ui/avatar.tsx`, `ui/separator.tsx`) remain in the repo as scaffolding — harmless, intended for future reuse.
- Google Fonts (`Fraunces`, `Inter`) loaded via `<link>`, not self-hosted — adds a network dependency on first paint. Acceptable for a personal CV; can be switched to `@fontsource-variable/*` packages if desired.
