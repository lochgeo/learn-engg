# Studyroom — Class 11, Class 12 and Certification

A static, self-paced learning platform organised as three paths: **Class 11**, **Class 12**, and a professional **Certification** track. Each path contains subjects, each subject contains chapters, and each chapter contains lessons. The navigation, home page, breadcrumbs, search and progress all follow that hierarchy, so the same `Physics` name can exist in both Class 11 and Class 12 without colliding.

Class 11 currently has the full Physics and Chemistry libraries, plus a planned Mathematics map. The Physics library follows the current NCERT Class XI textbook sequence: 14 chapters across Mechanics, Properties of Matter, Heat, and Waves. The Chemistry library covers the nine chapters of the current CBSE/NCERT Class XI syllabus, from Some Basic Concepts of Chemistry through Hydrocarbons.

Class 12 is registered as a complete 37-chapter curriculum map — 14 Physics, 10 Chemistry and 13 Mathematics — and is filled chapter by chapter by the unattended builder. Planned chapters appear on the subject page with a **Planned** badge and their lesson count; lessons appear only when they have been written.

The **CCDV-F** track prepares developers for the Claude Certified Developer – Foundations exam. Its nine chapters follow the eight official exam domains — Agents and Workflows, Applications and Integration, Claude Code, Evaluation/Testing/Debugging, Model Selection and Optimisation, Prompt and Context Engineering, Security and Safety, and Tools and MCPs — plus an exam-readiness chapter. The 35 lessons include concept modules, worked API and SDK examples, a mastery check per domain, a study plan and a mock-exam strategy. Exam weights, format and policies are summarised for study; this is an independent, unofficial guide and the official Anthropic exam guide remains the source of truth.

These notes are independently written learning material, not a reproduction of textbook chapters. Chapter titles and ordering are used to organise the study path. The NCERT textbook portal states that its books are copyrighted and may not be republished or included in digital content packages without permission. Do not add textbook PDFs or substantial copied passages to the public site.

## Run locally

```sh
npm install
npm run dev
```

For a production build, run `npm run build`; to preview the generated site, run `npm run preview`.

## Content structure

`src/content/manifest.ts` is the navigation source of truth. It exports four things:

- `tracks` — the three top-level paths: Class 11, Class 12 and Certification.
- `subjects` — one entry per track + subject, with a stable `id` such as `class-11-physics` or `class-12-physics`.
- `curriculum` — every chapter, including planned chapters that have no lessons yet. This is what lets Class 12 show its full syllabus before the builder has written it.
- `lessons` — the authored lessons, each with `track`, `subjectId`, `chapter`, duration, objectives, prerequisites and a Markdown file path.

Lesson Markdown lives under `src/content/<track>/<subject>/<chapter>/`, one folder per chapter, and supports GitHub-flavoured Markdown, tables, expandable `<details>` answers, and LaTeX math (`$inline$` and `$$display$$`). New chapter folders use the chapter id; the migrated Class 11 and certification folders keep their original short slugs, and the `file` path in the manifest is authoritative. KaTeX renders equations in the browser. The lesson outline is generated from `##` and `###` headings, so authors should use meaningful headings rather than manually maintaining navigation.

Images live in `public/images/` and are referenced from lesson Markdown with a path relative to the site root, for example `images/work-energy/waterfall.jpg`. Keep relative paths (without a leading slash) so the same markup works on the root domain and under the GitHub Pages repository subpath. Photo credits and licences are recorded in the `CREDITS.md` file inside each image folder.

### Reusable lesson blocks

Use a `learning-block` HTML tag in Markdown when a passage needs a consistent teaching treatment. Its `type` may be `concept`, `example`, `check`, `mistake`, or `recap`; `title` is optional.

```md
<learning-block type="check" title="Pause and predict">

What changes if the force acts perpendicular to the motion?

</learning-block>
```

These are presentation primitives only: they keep future lessons consistent without prescribing their content.

To add or revise a lesson:

1. Write original material in a Markdown file under `src/content/<track>/<subject>/<chapter>/`.
2. Add or update its metadata in the `lessons` array in `src/content/manifest.ts`, keeping the `file` path relative to `src/content/`.
3. Keep lessons grouped and ordered by chapter; navigation, search, and previous/next links use manifest order.
4. If the chapter is new, add it to `curriculum` first. The chapter `id` must be globally unique and match the `chapter` field on its lessons.

Class 11 Mathematics and the whole of Class 12 are planned curriculum at the moment; their chapter maps are visible, but their lessons are still being written. Progress is stored in browser local storage and does not sync between devices. There is no backend, account, analytics, or API call.

## Cloudflare Pages deployment

The site is a static Vite build with no server-side code, so it deploys to Cloudflare Pages as-is. Nothing runs at request time: progress, theme and reading size live in `localStorage`.

**One-time setup (dashboard, Git integration):**

1. Push this repository to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**, and pick the repository.
3. Name the project **`studyroomz`**. Cloudflare derives the free URL from the project name, so this gives `https://studyroomz.pages.dev`. The plain `studyroom` name was already taken — project names are globally unique, and a taken name gets random characters appended instead of failing outright, so check the subdomain preview under the name field. Names are also permanent: `*.pages.dev` subdomains cannot be renamed, only recreated. `wrangler.toml` records the same name for CLI deploys.
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `React (Vite)` — or `None` and type the command/output yourself |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |

5. Save and deploy. Every later push to `main` redeploys automatically, and other branches get preview URLs such as `https://<branch>.studyroomz.pages.dev`.

The preset is only a shortcut — it fills in `npm run build` and `dist`. If the dashboard shows `None`, enter those two values manually; no other setting changes.

No environment variables or secrets are required. Vite serves from the domain root on Cloudflare (`base: '/'`); the `GITHUB_ACTIONS` check in `vite.config.ts` only applies the repository subpath when GitHub Actions builds for GitHub Pages. Set `BASE_PATH` if you ever host the build under a subpath elsewhere.

`public/_headers` is copied into `dist` and tells Cloudflare Pages to cache the content-hashed `/assets/*` files immutably and to send `X-Content-Type-Options` and `Referrer-Policy` headers. `.nvmrc` pins Node 22 for the build. On GitHub Pages the `_headers` file is simply published as an inert static file; GitHub Pages ignores it.

Because navigation is React state rather than URL routing, there is no `_redirects` SPA fallback to maintain; every URL is either `/` or a static file.

If you ever want to deploy without the dashboard (for example from a local machine), run:

```sh
npm run build
npx wrangler pages deploy
```

`wrangler.toml` supplies the `studyroomz` project name and the `dist` output directory, so no extra flags are needed.

## GitHub Pages deployment

The included GitHub Actions workflow builds and deploys on pushes to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Vite uses the repository name as the Pages subpath during Actions builds. Both workflows can stay enabled side by side; disable or delete `.github/workflows/deploy.yml` if Cloudflare Pages becomes the only host.

Adding the Cloudflare setup did not change this path: `BASE_PATH` is unset in Actions, so the `GITHUB_ACTIONS` branch in `vite.config.ts` still applies `/<repo>/` as the base, and renamed repositories pick up the new subpath automatically. Only set `BASE_PATH` manually if a host needs a different prefix.

## Project structure

```text
src/
  content/
    manifest.ts
    class-11/
      physics/
        units-measurements/*.md
        motion-straight-line/*.md
        ...
      chemistry/
        organic-chemistry-basics/*.md
        hydrocarbons/*.md
    class-12/
      physics/        (planned chapters; filled by the builder)
      chemistry/      (planned chapters)
      mathematics/    (planned chapters)
    certification/
      ccdv-f/
        agents-and-workflows/*.md
        ...
        exam-readiness/*.md
  App.tsx
  main.tsx
  styles.css
public/
  _headers
  images/
    work-energy/*.jpg
    work-energy/CREDITS.md
    organic-chemistry/*.png, *.jpg
    organic-chemistry/CREDITS.md
.nvmrc
wrangler.toml
.github/workflows/deploy.yml
```
