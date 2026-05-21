# cv_next

Phat Huynh's personal CV — fullstack developer & .NET tech lead.

> Vite + React 18 + TypeScript · Tailwind v4 · shadcn/ui · Deploy to Vercel.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # type-check + production bundle into dist/
pnpm preview      # serve the production build locally
pnpm lint
```

> Node 20+ required. Falls back to `npm` if `pnpm` is missing.

## Editing CV content

All copy lives in **[src/data/cv.ts](src/data/cv.ts)**:

- `profile` — name, contact, summary, social links
- `experience` — work history (mark current role with `current: true`)
- `education`
- `skills` + `workedOn`
- `projects` — grouped by `org` in the rendered Projects section
- `highlights` — placeholder, fill in with recent shipped work
- `interests`

No component edits needed for content changes. To add a new section, create `src/sections/<Name>.tsx`, add it to `src/App.tsx`, and add a nav entry to `src/components/Sidebar.tsx`.

## Deploy to Vercel

1. Push to GitHub (or any Vercel-connected Git host).
2. Import the repo in Vercel — it auto-detects Vite via [vercel.json](vercel.json).
3. No env vars required.

## Stack details

See [src/CLAUDE.md](src/CLAUDE.md) for conventions and architecture.

## License

Personal CV — content © Phat Huynh. Component code derived from [shadcn/ui](https://ui.shadcn.com) (MIT).
