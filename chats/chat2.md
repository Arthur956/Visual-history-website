# Design style refinement

_Started 2026-10-12 10:49 UTC_

---

## User

Continuing from "New design".

## Assistant

We've been designing and building a marketing website for Visual History, a Belgian XR startup that reconstructs heritage sites in Mixed Reality and VR. The goal is to win meetings with heritage decision-makers and establish credibility at concept stage, using founder-led sales to a small, high-value audience.

We started by presenting two hero directions (time-sweep wipe vs. bottom-up rebuild), you picked the time-sweep, and I built out the full site: homepage plus Experience, Process, For Heritage Sites, For Cities & Tourism, About, and Contact pages.

Then we refined the homepage heavily: removed the MR/AR/VR labels and the Today/AD79 toggle; stripped all image labels; replaced outlined card UI with cleaner lines (thin underlines on tabs, no boxes); swapped the dashboard mock for an interactive revenue calculator; alternated light and dark sections to improve visual flow; and removed all AR references entirely, leaving only Mixed Reality and VR.

The site now has:
- Hero: full-bleed ruin-to-reconstruction scroll transition, no toggle
- Nine homepage sections following your brief, with light/dark alternation
- Two experience modes in depth (Experience page)
- Calculator showing potential revenue uplift
- Process pipeline, Why Visual History, How We Work, and Flagship Partner invitation
- Sub-pages for each audience and team info
- Nav and footer with English/Dutch switcher (Dutch only on nav and hero currently)
- All placeholder imagery, contact details, founder bios, and dashboard numbers marked as illustrative or awaiting your input

Still needed:
- Full Dutch translation (nav only done)
- Real founder roles and bios
- Pompeii swap-out if you want a Flemish site instead
- All placeholder images and proof slots
- Contact email and response promise

The sub-pages still use older card and form styling; I can apply the same refinements if you'd like.

[files: Home.dc.html, Experience.dc.html, For Cities and Tourism.dc.html, Site Nav.dc.html, Site Footer.dc.html, and others]

## User

Right now the design gives a bit too much like fancy hotel/restaurant vibe. Can we combine what's currently there with a bit more modern/tech startup style?

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: ready_for_verification]_

I restyled all pages and the shared nav and footer toward a tech-startup look, and kept a bit of the heritage feel:

- **Type:** headlines and body text now use Geist, a tight sans-serif, instead of the light serif. Labels use Geist Mono. The serif is kept only for the italic accent in the hero ("the past.").
- **Colour:** I replaced the cream and brown neutrals with cooler off-white and near-black. The gold is now a sharper amber.
- **Buttons:** the rounded pills are now squarer buttons with 6px corners.

I edited the files in place, so I didn't keep a copy of the old look. If it still feels too soft, I could add structural touches next, like visible grid lines, a small logo mark, or bracketed section numbers.

## User

Where can i adjust the photos?

## Assistant

_[tool: copy_starter_component]_

_[tool: run_script]_

_[tool: ready_for_verification]_

The image placeholders on the homepage are now drop zones. Drag a photo onto one, or click it to pick a file. Your photos stay after you reload the page, and you can double-click one to move and resize it within its frame.

- **Hero:** the ruin photo is at the top of the page. Scroll down to reveal the reconstruction slot.
- **Experience modes:** each tab has its own photo.
- **Timeline:** move the slider to each period (AD 62, AD 79, Today) to fill its photo.
- **Team:** portraits for Arthur and Ignace.

The sub-pages still show the old striped placeholders. I can convert those too.

## User

on the experience page: 1. Remove "the experience" tagline and the 3 tags under the subtitle. 2. On the modes remove the "mode 01 - flagship" tag and the labels on the pictures 3. remove the mode 02 as well and the label on the picture

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

On the Experience page I removed the "The experience" tagline, the three tags under the subtitle, the "Mode 01 · Flagship" and "Mode 02" tags, and the labels on both mode pictures.

## User

On the process page: 1. remove how a reconstruction is built. On the heritage site page: 1. Remove hte for heritage sites & museums 2. Remove the labels on the pictures. On the cities & tourism page: 1. Remove the for cities & tourism boards 2. Remove label from picture. On about page: 1. Remove about visual history text

## User

On the process page: 1. remove how a reconstruction is built. On the heritage site page: 1. Remove hte for heritage sites & museums 2. Remove the labels on the pictures. On the cities & tourism page: 1. Remove the for cities & tourism boards 2. Remove label from picture. On about page: 1. Remove about visual history text

## User

Heritage sites page: I'm not a big fan of the 3 blocks under what it means for your team, it looks very AI. On the contact page, the whole contact form section looks very AI

## User

Heritage sites page: I'm not a big fan of the 3 blocks under what it means for your team, it looks very AI. On the contact page, the whole contact form section looks very AI

