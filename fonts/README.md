# Typefaces

Set in `lib/fonts.ts`. All three are open source and loaded via
`next/font/google`, so this directory is empty unless someone later licenses
commercial faces — in which case drop the WOFF2 files here and switch
`lib/fonts.ts` to `next/font/local`.

## Current set

| Role | Face | Designed by | Licence |
| --- | --- | --- | --- |
| Display | Newsreader | Production Type | OFL |
| Sans | IBM Plex Sans | Bold Monday, Amsterdam | OFL |
| Mono | IBM Plex Mono | Bold Monday, Amsterdam | OFL |

## Why

The previous set was Instrument Serif + Instrument Sans + JetBrains Mono. That
serif/sans pairing is the stock output of v0, Lovable and Bolt, and is the
single strongest reason the site read as AI-generated. JetBrains Mono across the
33 `.eyebrow` labels reinforced it: it is the developer default and looks it.

IBM Plex was commissioned by Mike Abbink at IBM and drawn by Bold Monday in
Amsterdam, so the Dutch type lineage is preserved at no cost. Newsreader brings
real optical sizing and true italics — the design uses italic display in 11
places, including the homepage headline.

## Alternates

Swapping any of these is a one-line change in `lib/fonts.ts`.

- **Display, more dramatic**: `Bodoni_Moda` — high-contrast didone, closer to
  the old Instrument Serif silhouette but far less common.
- **Display, more characterful**: `Fraunces` — variable, with SOFT and WONK
  axes. Distinctive, arguably too quirky for B2B.
- **Sans, geometric**: `Jost` — a free Futura lineage, if a more geometric
  voice is wanted than Plex's humanist one.

Avoid the AI-template defaults: Instrument Serif/Sans, Playfair Display,
Poppins, DM Sans, Space Grotesk, Sora, Manrope, Outfit, Plus Jakarta Sans,
Space Mono, Geist.

## Licensed upgrade path

If budget appears later, the strongest set is DTL Fleischmann + DTL Nobel
(Dutch Type Library, 's-Hertogenbosch — the studio's own city, worth verifying
before using publicly) with Nitti from Bold Monday. That needs six WOFF2 files
here and a switch to `next/font/local`.
