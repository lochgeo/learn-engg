# Studyroom — Class 11 Learning Hub

A static, self-paced learning platform for Class 11 Physics, Chemistry, and Mathematics, plus a Claude certification track. The Physics library follows the current NCERT Class XI textbook sequence: 14 chapters across Mechanics, Properties of Matter, Heat, and Waves. Chapter 1 has four focused modules; each remaining chapter has an original lesson with objectives, explanations, a worked example, and a practice question with its answer.

The Chemistry library begins with the two organic-chemistry units of the current CBSE/NCERT Class XI syllabus: **Unit 8, Organic Chemistry: Some Basic Principles and Techniques**, and **Unit 9, Hydrocarbons**. Unit 8 has six concept lessons, a mastery check and a timed JEE Main set; Unit 9 has four concept lessons, a mastery check and its own timed set.

The **CCDV-F** track prepares developers for the Claude Certified Developer – Foundations exam. Its nine chapters follow the eight official exam domains — Agents and Workflows, Applications and Integration, Claude Code, Evaluation/Testing/Debugging, Model Selection and Optimisation, Prompt and Context Engineering, Security and Safety, and Tools and MCPs — plus an exam-readiness chapter. The 35 lessons include concept modules, worked API and SDK examples, a mastery check per domain, a study plan and a mock-exam strategy. Exam weights, format and policies are summarised for study; this is an independent, unofficial guide and the official Anthropic exam guide remains the source of truth.

The Work, Energy and Power chapter is expanded into seven core modules with a same-day study plan and a mastery check, plus a timed JEE Main practice set. These notes are independently written learning material, not a reproduction of textbook chapters. Chapter titles and ordering are used to organise the study path. The NCERT textbook portal states that its books are copyrighted and may not be republished or included in digital content packages without permission. Do not add textbook PDFs or substantial copied passages to the public site.

## Run locally

```sh
npm install
npm run dev
```

For a production build, run `npm run build`; to preview the generated site, run `npm run preview`.

## Content structure

`src/content/manifest.ts` is the navigation source of truth. Each lesson entry includes a stable ID, subject, chapter title and number, duration, learning objectives, prerequisites, and a Markdown file path. Lesson Markdown lives under `src/content/<subject>/<chapter>/`, one folder per chapter, and supports GitHub-flavoured Markdown, tables, expandable `<details>` answers, and LaTeX math (`$inline$` and `$$display$$`). Chapter folders use the same slug as the `chapter` field in the manifest. KaTeX renders equations in the browser. The lesson outline is generated from `##` and `###` headings, so authors should use meaningful headings rather than manually maintaining navigation.

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

1. Write original material in a Markdown file under `src/content/<subject>/<chapter>/`.
2. Add or update its metadata in the `lessons` array in `src/content/manifest.ts`, keeping the `file` path relative to `src/content/`.
3. Keep lessons grouped and ordered by chapter; navigation, search, and previous/next links use manifest order.

Mathematics remains a placeholder for future work; the Chemistry cards open the two organic units, and the CCDV-F card opens the certification track. Progress is stored in browser local storage and does not sync between devices. There is no backend, account, analytics, or API call.

## Cloudflare Pages deployment

The site is a static Vite build with no server-side code, so it deploys to Cloudflare Pages as-is. Nothing runs at request time: progress, theme and reading size live in `localStorage`.

**One-time setup (dashboard, Git integration):**

1. Push this repository to GitHub.
2. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**, and pick the repository.
3. Name the project **`studyroom`** (not `learn-engg`). Cloudflare derives the free URL from the project name, so this gives `https://studyroom.pages.dev`. Project names are unique, so if `studyroom` is already taken you will need a variant such as `studyroom-app`; the URL follows whatever name you choose. `wrangler.toml` records the same name for CLI deploys.
4. Use these build settings:

   | Setting | Value |
   | --- | --- |
   | Production branch | `main` |
   | Framework preset | `React (Vite)` — or `None` and type the command/output yourself |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | *(leave empty)* |

5. Save and deploy. Every later push to `main` redeploys automatically, and other branches get preview URLs such as `https://<branch>.studyroom.pages.dev`.

The preset is only a shortcut — it fills in `npm run build` and `dist`. If the dashboard shows `None`, enter those two values manually; no other setting changes.

No environment variables or secrets are required. Vite serves from the domain root on Cloudflare (`base: '/'`); the `GITHUB_ACTIONS` check in `vite.config.ts` only applies the repository subpath when GitHub Actions builds for GitHub Pages. Set `BASE_PATH` if you ever host the build under a subpath elsewhere.

`public/_headers` is copied into `dist` and tells Cloudflare Pages to cache the content-hashed `/assets/*` files immutably and to send `X-Content-Type-Options` and `Referrer-Policy` headers. `.nvmrc` pins Node 22 for the build. On GitHub Pages the `_headers` file is simply published as an inert static file; GitHub Pages ignores it.

Because navigation is React state rather than URL routing, there is no `_redirects` SPA fallback to maintain; every URL is either `/` or a static file.

If you ever want to deploy without the dashboard (for example from a local machine), run:

```sh
npm run build
npx wrangler pages deploy
```

`wrangler.toml` supplies the `studyroom` project name and the `dist` output directory, so no extra flags are needed.

## GitHub Pages deployment

The included GitHub Actions workflow builds and deploys on pushes to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Vite uses the repository name as the Pages subpath during Actions builds. Both workflows can stay enabled side by side; disable or delete `.github/workflows/deploy.yml` if Cloudflare Pages becomes the only host.

Adding the Cloudflare setup did not change this path: `BASE_PATH` is unset in Actions, so the `GITHUB_ACTIONS` branch in `vite.config.ts` still applies `/<repo>/` as the base, and renamed repositories pick up the new subpath automatically. Only set `BASE_PATH` manually if a host needs a different prefix.

## Project structure

```text
src/
  content/
    manifest.ts
    physics/
      units-measurements/*.md
      motion-straight-line/*.md
      work-energy-power/*.md
      ...
    chemistry/
      organic-chemistry-basics/*.md
      hydrocarbons/*.md
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
