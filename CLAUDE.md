# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Vang Auto AS website (bilverksted near Hamar, Norway). Next.js **Pages Router**,
React 18, Tailwind CSS, Framer Motion. Site language is Norwegian — all
user-facing copy, headings and button labels must be Norwegian.

```bash
npm run dev     # local dev server
npm run build   # production build (webpack; also runs the TS check)
npm run lint    # eslint src
```

`next lint` was removed in Next 16 — do not restore it; the `lint` script calls
`eslint` directly. `eslint-config-next` is still on 13.x, which is why ESLint
stays on 8.x with `.eslintrc.json`. Upgrading means migrating to ESLint 9 flat
config; treat that as its own task.

---

## The article system — read this before touching articles

Articles are **content, not code**. There is exactly one source of truth per
article: a markdown file with YAML frontmatter.

```
ARTICLE MARKDOWN FILE  (src/content/articles/<slug>.md)
       │
       ├── frontmatter ──→ /artikler featured cards
       │                 → /artikler "Flere artikler" list
       │                 → SEO / Open Graph / Twitter metadata
       │
       └── body ─────────→ /blog/<slug>
```

### File map

| Path | Role |
| --- | --- |
| `src/content/articles/*.md` | The articles. One file per article. |
| `src/content/README.md` | **The contract.** Frontmatter schema, in Norwegian. Written to be handed to an n8n workflow. Keep it in sync with `src/lib/articles.js`. |
| `src/lib/articles.js` | `getAllArticles()`, `getArticleSlugs()`, `getArticleBySlug()`. Build-time only. |
| `src/lib/site.js` | `SITE_URL` + `absoluteUrl()`. |
| `src/lib/dates.js` | `formatNorwegianDate()` — ISO → "6. Juni 2023". |
| `src/components/articles/` | `FeaturedArticle`, `ArticleListItem`, `ArticleList`. |
| `src/pages/artikler.js` | Overview. `getStaticProps` only; no article data in the file. |
| `src/pages/blog/[slug].js` | The one and only article renderer. SSG, `fallback: false`. |
| `public/images/articles/` | Article images. |

### Rules

1. **Never hard-code an article** in a React file. No arrays, no registries, no
   per-article page components. This repo used to do that and the whole point of
   the current architecture is that it no longer does.
2. **Never duplicate metadata.** A title, date, excerpt, image or URL lives in
   the markdown file and nowhere else. If you find yourself typing an article
   title into a `.js` file, stop.
3. **Adding an article must require zero code changes** — one `.md` file plus
   one image is the entire contract. If a feature request would break that,
   push back or find another way.
4. **`/blog/<slug>` URLs are public and indexed.** Changing a slug breaks
   Facebook links and search results. Don't rename slugs without being asked.
5. **Ordering is automatic**: sort by `date` descending, ties broken by slug.
   The newest two articles become the featured cards. Never select featured
   articles manually.
6. Dates are stored **only** as ISO `YYYY-MM-DD`. Norwegian display strings are
   produced by `formatNorwegianDate()` in the UI, never stored in frontmatter.

### Images and absolute URLs

Frontmatter stores one canonical project-relative path:

```yaml
image: "/images/articles/feriebil.jpg"
```

- `next/image` uses that path directly.
- External crawlers need an absolute URL, so metadata goes through
  `absoluteUrl()` from `src/lib/site.js`:
  `/images/articles/feriebil.jpg` → `https://vangauto.no/images/articles/feriebil.jpg`
- Base URL comes from `NEXT_PUBLIC_SITE_URL`, falling back to
  `https://vangauto.no`. **Never hard-code `https://vangauto.no` anywhere else.**

Never store two variants of an image path in an article.

### Implementation notes worth knowing

- **Image dimensions** are measured at build time with `sharp` (already a
  dependency) because `next/image` needs explicit `width`/`height` for string
  sources. Failure falls back to 1200×630 rather than breaking the build.
- **Markdown** is `gray-matter` + `remark` + `remark-gfm` + `remark-html`.
  `remark-html` sanitizes by default — raw HTML inside an article is stripped.
  Keep it that way; article content will eventually be machine-generated.
- **Article body typography** lives in the `.article-body` rules in
  `src/styles/globals.css`, which reproduce the classes the old hard-coded
  pages used. Style article bodies there, not with per-element classes.
  Convention: a paragraph wrapped in `**…**` is a bold lead/closing paragraph;
  `##` is a section heading.
- **`src/content/README.md` is deliberately outside `articles/`** so it is never
  parsed as an article. `src/lib/articles.js` also skips `README.md` and files
  starting with `_`.
- A malformed article (missing `title`/`date`, bad slug, duplicate slug) **fails
  the build** with a message naming the file. This is intentional: a broken
  auto-generated article must never ship silently.
- `draft: true` in frontmatter hides an article from both the site and the
  build. Useful for staged automation.

### Featured card layout

The two featured cards sit side by side, so they must stay visually symmetric
regardless of image ratio or text length. `FeaturedArticle.js` relies on:
fixed `aspect-[3/2]` image box with `object-cover`, flex column card,
`min-h-[2lh]` on the title (reserves two lines), `mt-auto` on the date.
Don't remove these — the cards fall out of alignment immediately.

---

## Future work (not built yet)

An n8n workflow will eventually generate an article, commit one `.md` file plus
one image, and let deployment do the rest. `src/content/README.md` is the
contract for that workflow. Do **not** build the n8n workflow, Facebook/Google
publishing, approval flows or AI generation in this repo unless asked — those
are separate phases.

---

## Local verification gotcha

`next start` binds port 3000 and a leftover process from an earlier run will
keep serving a **stale build** — the page renders unstyled because its HTML
references a CSS hash that no longer exists on disk. If a local check looks
inexplicably broken, kill lingering `node.exe` processes and restart before
debugging anything else.
