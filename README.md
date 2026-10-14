# Visual History — marketing site

Static marketing site for Visual History, built with [Astro](https://astro.build) from the Claude Design handoff in [`project/`](project/) (design prototypes) and [`chats/`](chats/) (design conversation). See [`project/HANDOFF.md`](project/HANDOFF.md) for the original handoff note.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```

## Pages

| Route | Source | Design |
| --- | --- | --- |
| `/` | `src/pages/index.astro` | `Home.dc.html` |
| `/experience/` | `src/pages/experience.astro` | `Experience.dc.html` |
| `/process/` | `src/pages/process.astro` | `Process.dc.html` |
| `/heritage-sites/` | `src/pages/heritage-sites.astro` | `For Heritage Sites.dc.html` |
| `/cities-and-tourism/` | `src/pages/cities-and-tourism.astro` | `For Cities and Tourism.dc.html` |
| `/about/` | `src/pages/about.astro` | `About.dc.html` |
| `/contact/` | `src/pages/contact.astro` | `Contact.dc.html` |

Shared pieces: `src/components/Nav.astro` (Site Nav), `src/components/Footer.astro` (Site Footer), `src/layouts/Base.astro`, design tokens in `src/styles/global.css`.

`Hero Directions.dc.html` was an exploration (direction 1a was picked and lives in the home hero), so it is not a page. `support.js` and `image-slot.js` are the design tool's runtime and aren't used by the site.

## Interactive parts

All plain TypeScript, no framework runtime:

- **Hero:** a scroll-driven wipe from today's ruin to the AD 79 reconstruction (`src/scripts/home.ts`). With `prefers-reduced-motion`, the hero is one screen tall and shows the reconstruction straight away.
- **Experience tabs:** an ARIA tablist with arrow, Home and End key support.
- **Timeline slider:** AD 62 → AD 79 → Today crossfade, using a native range input.
- **Revenue calculator:** the starting values are placeholders from the design. Change them in `calcFields` in `index.astro`.
- **EN/NL switcher:** saved in `localStorage` (`vh-lang`) and applied as `<html data-lang>`.
- **Meeting forms:** home and contact (`src/scripts/meeting-form.ts`).

## Configuration

Copy `.env.example` to `.env`:

- `PUBLIC_FORM_ENDPOINT`: where meeting requests are POSTed as `FormData` (Formspree, Basin, your own API…). **Set this before launch.** Without it, submitting opens a pre-filled email to the contact address instead.
- `PUBLIC_CONTACT_EMAIL`: defaults to `hello@visualhistory.be`, which is still a placeholder.

## Content still to supply

- **Images:** the hero and timeline use the Pompeii images uploaded in Claude Design (`public/images/`). These are still striped placeholders, rendered by `Media.astro`; pass `src` once photos exist:
  - the experience mode images (home tabs, Experience page)
  - the Heritage and Cities hero images
  - the team portraits (home and About)
- **Vision film:** set `filmSrc` in `src/pages/experience.astro` to an .mp4/.webm file or a YouTube/Vimeo embed URL. Until then, the play button is disabled.
- **Founders:** roles and bios ("role to confirm", "Short bio to be added").
- **Dutch:** only the nav, CTAs and home hero are translated (`src/i18n/strings.ts`). Use `<T p={...} />` for new bilingual copy. Once the full NL translation exists, consider moving to `/nl/` routes for SEO.
- **Footer:** the Privacy and Accessibility statement links still point to `#`.
- **Production domain:** set `site` in `astro.config.mjs`.
