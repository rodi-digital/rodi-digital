#!/usr/bin/env node
/**
 * Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Seznam,
 * Naver, Yep, ...). One POST to api.indexnow.org fans out to all of them.
 *
 * Usage:
 *   node scripts/indexnow.mjs [url ...]
 *
 * With no arguments it submits the whole sitemap. Pass URLs to submit only
 * those (e.g. a new blog post). The key file in public/ must be deployed
 * first, or the engines reject the submission with 403.
 */
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const HOST = "www.rodi-digital.com";
const SITEMAP = `https://${HOST}/sitemap.xml`;

const publicDir = resolve(import.meta.dirname, "../public");
const keyFile = readdirSync(publicDir).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("No IndexNow key file found in public/");
const key = keyFile.replace(/\.txt$/, "");
const keyLocation = `https://${HOST}/${keyFile}`;

const live = await fetch(keyLocation).then((r) => (r.ok ? r.text() : ""));
if (live.trim() !== key) {
  throw new Error(`Key file not live at ${keyLocation}; deploy first.`);
}

let urlList = process.argv.slice(2);
if (urlList.length === 0) {
  const xml = await fetch(SITEMAP).then((r) => r.text());
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
});

console.log(`${res.status} ${res.statusText} — ${urlList.length} URLs submitted`);
const body = await res.text();
if (body) console.log(body);
if (!res.ok && res.status !== 202) process.exit(1);
