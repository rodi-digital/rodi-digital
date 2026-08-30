import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

/**
 * The site's three typefaces, in one place.
 *
 * The previous set — Instrument Serif with Instrument Sans — is the stock
 * pairing that v0, Lovable and Bolt emit, which is why the site read as
 * generated regardless of the layout around it. JetBrains Mono across the 33
 * `.eyebrow` labels reinforced it.
 *
 * IBM Plex was drawn by Bold Monday in Amsterdam, so the Dutch lineage survives
 * the move to open-source faces. See `fonts/README.md` for alternates and for
 * the licensed upgrade path if this is ever revisited.
 */

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

/** Applied to `<html>`; exposes --font-display / --font-sans / --font-mono. */
export const fontVariables = `${display.variable} ${sans.variable} ${mono.variable}`;
