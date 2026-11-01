# Stylesheets

The styles are split by responsibility and imported in cascade order from
`src/main.tsx`. Keep that order when adding a new file.

| File | Owns |
| --- | --- |
| `tokens.css` | Palette, type families, radii, shadows, motion. Light values in `:root`, dark values in `.dark`. |
| `base.css` | Reset, focus rings, the `.app-shell` frame, shared `.eyebrow` label. |
| `layout.css` | Fixed sidebar, subject/chapter navigation, top bar, page frame, reading-size control. |
| `home.css` | Hero, subject cards, continue card, weekly card, library rows. |
| `subject.css` | Subject header and chapter catalog. |
| `lesson.css` | Lesson header, sticky TOC/objectives rail, completion actions, learning blocks, figures. |
| `prose.css` | Typographic rules for rendered Markdown, tables, disclosure, KaTeX. |
| `search.css` | Search backdrop and results dialog. |
| `responsive.css` | All breakpoints: 1200, 950, 850, 680, reduced motion. |
| `dark.css` | Dark-only colour remaps for the values not covered by tokens. |

## Conventions

- Reference `tokens.css` for any colour that has a token. Raw hex is only for
  one-off editorial tints (illustrations, artwork, specific block highlights).
- Prefer changing a token over adding a `.dark` override. A dark rule should
  only exist when the light rule uses a literal that has no token counterpart.
- Breakpoints live only in `responsive.css`. Do not add media queries to the
  component files.
- Specificity is kept low: a component file rule should be overrideable from
  `responsive.css` and `dark.css` without `!important`.
- The root font-size stays at the browser default. Reading size is handled by
  `--reading-scale` zoom on `.app-shell`, not by changing `rem`.
