# Studyroom — Class 11 Learning Hub

A static, self-paced learning platform for Class 11 Physics, Chemistry, and Mathematics. The Physics library follows the current NCERT Class XI textbook sequence: 14 chapters across Mechanics, Properties of Matter, Heat, and Waves. Chapter 1 has four focused modules; each remaining chapter has an original lesson with objectives, explanations, a worked example, and a practice question with its answer.

The Work, Energy and Power chapter is expanded into seven core modules with a same-day study plan and a mastery check, plus a timed JEE Main practice set. These notes are independently written learning material, not a reproduction of textbook chapters. Chapter titles and ordering are used to organise the study path. The NCERT textbook portal states that its books are copyrighted and may not be republished or included in digital content packages without permission. Do not add textbook PDFs or substantial copied passages to the public site.

## Run locally

```sh
npm install
npm run dev
```

For a production build, run `npm run build`; to preview the generated site, run `npm run preview`.

## Content structure

`src/content/manifest.ts` is the navigation source of truth. Each lesson entry includes a stable ID, subject, chapter title and number, duration, learning objectives, prerequisites, and a Markdown file path. Lesson Markdown lives under `src/content/<subject>/<chapter>/`, one folder per chapter, and supports GitHub-flavoured Markdown, tables, expandable `<details>` answers, and LaTeX math (`$inline$` and `$$display$$`). Chapter folders use the same slug as the `chapter` field in the manifest. KaTeX renders equations in the browser. The lesson outline is generated from `##` and `###` headings, so authors should use meaningful headings rather than manually maintaining navigation.

Images live in `public/images/` and are referenced from lesson Markdown with a path relative to the site root, for example `images/work-energy/waterfall.jpg`. Keep relative paths (without a leading slash) so the same markup works on the root domain and under the GitHub Pages repository subpath. Photo credits and licences are recorded in `public/images/work-energy/CREDITS.md`.

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

The Chemistry and Mathematics cards are placeholders for future work. Progress is stored in browser local storage and does not sync between devices. There is no backend, account, analytics, or API call.

## GitHub Pages deployment

The included GitHub Actions workflow builds and deploys on pushes to `main`. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. Vite uses the repository name as the Pages subpath during Actions builds.

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
  App.tsx
  main.tsx
  styles.css
public/
  images/
    work-energy/*.jpg
    work-energy/CREDITS.md
.github/workflows/deploy.yml
```
