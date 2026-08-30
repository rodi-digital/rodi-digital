#!/usr/bin/env node
/**
 * Generates homepage hero background candidates.
 *
 * Usage:
 *   node scripts/gen-hero-image.mjs <concept> [crop] [provider]
 *
 *   concept   trees | fractal | ripples
 *   crop      wide (21:9, desktop) | portrait (4:5, mobile)
 *   provider  openai (default) | gemini
 *
 * Gemini is kept as a second opinion, but the key in .env currently has a
 * zero image quota, so openai is the working path.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";

const ENV_PATH = "/Users/tijs-martens/Documents/rodi-digital/rodi-digital/.env";
const env = Object.fromEntries(
  readFileSync(ENV_PATH, "utf8")
    .split("\n")
    .filter((l) => l.includes("=") && !l.trimStart().startsWith("#"))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    })
);

const NEGATIVE =
  " Do not include: 3D render, CGI, octane render, glossy plastic surfaces, HDR look, " +
  "oversaturated colour, neon, blue technology glow, sunset, dramatic sky, high contrast, " +
  "lens flare, holograms, circuitry, people, buildings, text, watermarks or signage.";

const PALETTE =
  " Overcast, shadowless, extremely soft diffused light. Warm cream, pale grey and muted " +
  "sage tones. Very low contrast, almost monochrome, high key. Shot on a Hasselblad medium " +
  "format camera, 80mm lens, f/5.6, Kodak Portra 400, fine natural film grain.";

/** The left side must stay empty — the dark indigo headline sits over it. */
const composition = {
  wide:
    " The LEFT two thirds of the frame is almost entirely empty: pale sky meeting a low " +
    "horizon, with nothing in it.",
  portrait:
    " The TOP half of the frame is almost entirely empty pale sky, with nothing in it.",
};

const CONCEPTS = {
  trees: (c) =>
    `Wide panoramic landscape photograph of a flat Dutch polder in dense morning fog. ` +
    `A row of bare winter trees recedes into the distance on the ${c === "wide" ? "RIGHT" : "LOWER RIGHT"} ` +
    `of the frame. THE CRITICAL FEATURE OF THIS PHOTOGRAPH: every single tree is an exact clone of ` +
    `the others. Not similar — identical. One tree duplicated and pasted down the row: the same ` +
    `trunk thickness, the same lean to the left, the same distinctive forked branch, the same ` +
    `silhouette, the same broken limb in the same place, repeated at perfectly even intervals, ` +
    `each one smaller with distance until they dissolve into white fog. The uncanny mechanical ` +
    `repetition is the subject of the picture. No tree varies from its neighbour in any way.` +
    composition[c] + PALETTE + NEGATIVE,

  fractal: (c) =>
    `Landscape photograph of a single bare tree standing alone in a flat field of low mist, ` +
    `positioned in the ${c === "wide" ? "RIGHT third" : "LOWER portion"} of the frame. The tree's ` +
    `branching is unnaturally perfect and self-similar: every fork splits at exactly the same angle ` +
    `and the same ratio, repeating identically down to the finest twigs, a natural fractal.` +
    composition[c] + PALETTE + NEGATIVE,

  ripples: (c) =>
    `Photograph of a perfectly mirror-still Dutch canal at dawn under flat overcast light. ` +
    `In the ${c === "wide" ? "RIGHT third" : "LOWER portion"} of the frame, one set of perfect ` +
    `concentric ripples expands across the glass-still water — nothing caused them, there is no ` +
    `stone, no bird, no object, only the rings.` +
    composition[c] + PALETTE + NEGATIVE,

  // --- Alternates -----------------------------------------------------------

  /** An invisible agent acting on the world. */
  ripplesAlt: (c) =>
    `Photograph of a perfectly mirror-still Dutch canal at dawn under flat overcast light. ` +
    `In the ${c === "wide" ? "RIGHT third" : "LOWER portion"} of the frame, several sets of ` +
    `perfect concentric ripples expand across the glass-still water. Nothing caused them: there ` +
    `is no stone, no bird, no insect, no falling object anywhere in the picture, and the air is ` +
    `completely still. Only the rings.` +
    composition[c] + PALETTE + NEGATIVE,

  /**
   * A second source of intelligence, off-frame. The first attempt produced one
   * ordinary shadow, so the two-shadow constraint is stated as the subject of
   * the picture rather than as a detail.
   */
  shadows: (c) =>
    `Photograph of a single bare tree standing alone in a vast flat mown field under a pale ` +
    `overcast winter sky, positioned in the ${c === "wide" ? "RIGHT third" : "LOWER portion"} ` +
    `of the frame. THE SUBJECT OF THIS PHOTOGRAPH IS THE SHADOWS. The tree casts TWO separate, ` +
    `complete shadows on the grass. Both begin at the base of the trunk and splay apart across ` +
    `the field in clearly different directions, forming a wide V, like the hands of a clock. ` +
    `Each shadow is a full, sharp, equally dark silhouette of the entire tree with all its ` +
    `branches. Two shadows, not one. There is no second sun, no second light source, and nothing ` +
    `else unusual anywhere in the picture.` +
    composition[c] + PALETTE + NEGATIVE,

  /** Emergence: simple agents, complex behaviour, no conductor. */
  murmuration: (c) =>
    `Photograph of an enormous starling murmuration over a flat empty Dutch field at dusk. ` +
    `The flock occupies the ${c === "wide" ? "RIGHT third" : "LOWER portion"} of the frame and ` +
    `has settled into a shape that is almost, but not quite, legible — it reads for a moment as ` +
    `a pointing hand, then dissolves back into thousands of individual birds. Soft, grainy, ` +
    `distant. The birds are tiny specks, not detailed.` +
    composition[c] + PALETTE + NEGATIVE,

  /** Replication, staged in the sky — the emptiest option. */
  clouds: (c) =>
    `Photograph of an enormous pale sky over a flat, featureless Dutch polder with a very low ` +
    `horizon. THE CRITICAL FEATURE: a row of small clouds, each one an exact duplicate of the ` +
    `others — identical shape, identical size, identical edges — spaced at perfectly even ` +
    `intervals across the ${c === "wide" ? "RIGHT half" : "LOWER half"} of the sky, receding ` +
    `toward the horizon. Every other part of the sky is completely clear and empty.` +
    composition[c] + PALETTE + NEGATIVE,

  /** The boundary of what the model knows. */
  fogwall: (c) =>
    `Photograph of a flat, empty Dutch grass field under a pale overcast sky. THE CRITICAL ` +
    `FEATURE: a bank of dense white fog occupies the ${c === "wide" ? "RIGHT portion" : "LOWER portion"} ` +
    `of the frame, and its edge is a perfectly straight, razor-sharp vertical plane, cut with ` +
    `impossible geometric precision, as though the world simply stops there. On one side, crisp ` +
    `detailed grass; on the other, featureless white. The transition is absolute, with no ` +
    `gradient and no wisps.` +
    composition[c] + PALETTE + NEGATIVE,
};

/** Both dimensions must be divisible by 16 for gpt-image-2. */
const SIZES = { wide: "2688x1152", portrait: "1024x1280" };

const [concept, crop = "wide", provider = "openai"] = process.argv.slice(2);
if (!CONCEPTS[concept]) throw new Error(`concept must be one of: ${Object.keys(CONCEPTS).join(", ")}`);
if (!SIZES[crop]) throw new Error(`crop must be one of: ${Object.keys(SIZES).join(", ")}`);

const prompt = CONCEPTS[concept](crop);

async function openai() {
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      authorization: `Bearer ${env.OPENAI_API_KEY}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: process.env.OPENAI_IMAGE_MODEL ?? "gpt-image-2",
      prompt,
      size: SIZES[crop],
      quality: "high",
      n: 1,
    }),
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const { data } = await res.json();
  if (data[0].b64_json) return Buffer.from(data[0].b64_json, "base64");
  return Buffer.from(await (await fetch(data[0].url)).arrayBuffer());
}

async function gemini() {
  const model = process.env.GEMINI_IMAGE_MODEL ?? "gemini-3-pro-image";
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseModalities: ["IMAGE"],
          imageConfig: { aspectRatio: crop === "wide" ? "21:9" : "4:5", imageSize: "4K" },
        },
      }),
    }
  );
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const json = await res.json();
  const part = (json.candidates?.[0]?.content?.parts ?? []).find((p) => p.inlineData);
  if (!part) throw new Error(`no image returned: ${JSON.stringify(json).slice(0, 800)}`);
  return Buffer.from(part.inlineData.data, "base64");
}

const buffer = await ({ openai, gemini })[provider]();

const outDir = resolve(process.cwd(), "hero-candidates");
mkdirSync(outDir, { recursive: true });
const variant = process.env.VARIANT ? `-${process.env.VARIANT}` : "";
const out = resolve(outDir, `${concept}-${crop}${variant}.png`);
writeFileSync(out, buffer);
console.log(`wrote ${out} (${(buffer.length / 1024).toFixed(0)} KB)`);
