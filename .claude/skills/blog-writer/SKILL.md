---
name: blog-writer
description: >
  Write or rewrite a blog article for the Rodi Digital site so it reads like a
  person wrote it and holds up in search and in AI answers. Use when asked to
  write a post, rewrite an article, add a blog topic, or fix copy that "sounds
  like AI". Handles the route file, the registry in lib/blog.ts, and the schema.
  Adapted from rediumvex/seo-blog-writer-claude.
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - WebFetch
  - WebSearch
---

# Blog writer — Rodi Digital

Turns a topic, URL, or set of notes into a finished article that lives in this
codebase. Not a CMS paste-up: you edit real route files.

Adapted from [rediumvex/seo-blog-writer-claude](https://github.com/rediumvex/seo-blog-writer-claude).
The craft rules are that skill's. What changed, and why, is at the bottom.

---

## Step 1 — Work out what you are writing

State it in three lines before writing anything:

```
Input:     [topic / URL / notes / competitor post]
Question:  [the actual question a reader types before landing here]
Angle:     [what we say that a generic post on this topic would not]
```

If a URL was given, fetch it. If it is a bare topic, search for two or three
sources first — but the article's spine has to come from what Rodi Digital has
actually built, not from the sources.

## Step 2 — Wire the post into the site

The site is English only. An article is three things, not one file:

1. Add a `RouteKey` in `lib/routes.ts` (`blogSomething: "/blog/the-slug"`).
2. Register it in `lib/blog.ts`: `datePublished`, `readingTime`, `title`,
   `excerpt`, `topic`. The index, the footer, and the schema all read from here.
3. Create the route file under `app/blog/<slug>/` using `ArticleLayout`, and
   emit `blogPostingSchema`, `faqPageSchema`, and `breadcrumbSchema`.

**Dates must be in the past.** Check today's date before picking one. A future
`datePublished` is a schema error, not a detail.

Never pass a raw `path` to `pageMetadata` — use the route key, so the canonical
URL comes from the one map.

## Step 3 — The craft rules

### Burstiness — break the rhythm

AI writes sentences of similar length. People do not. Mix three-word sentences
with long, clause-heavy ones.

> "This saves hours. Not because it is clever, but because it absorbs the
> repetitive part of the work your team has been doing by hand for months while
> telling itself it would automate it eventually."

Every third or fourth sentence, drop one under six words. Full stop.

### Perplexity — unexpected word choices

Pick the word the model would not. Concrete beats abstract, always.

- "improves efficiency" → "cuts the waiting"
- "it is important to note" → say the thing
- "in order to" → "to"
- Unexpected but accurate metaphors. No stock imagery.

### Experience — real only

This is where the source skill and this one part ways, and it is not negotiable.

**Never invent a client, a number, a timeline, or a personal anecdote.** This is
a commercial site. A fabricated "we ran this for three clients" is a false claim
to a prospect, not a writing technique.

Get specificity from what is documented in this repo instead. The case studies
under `app/cases/` are the evidence pool:

- **Wally** — AI assistant for accounting firms. Runs inside Outlook. Belgian VAT,
  corporate tax, personal income tax, answers grounded in official sources.
  Reads invoices, contracts, tax documents.
- **IPRHQ** — replaced five to seven disconnected tools with one platform. AI risk
  scoring ranks threats by relevance. Word add-in, Chrome extension. Clearance
  and enforcement decisions from weeks to hours.
- **Loop Sleep** — built while part of the team at Nimble, for Loop Earplugs.
  V1.0 shipped February 2026, four-week build, on time and within budget.
  Switching to streaming TTS removed the worst friction point.
- **DiffGraph** — dependency graphs posted into pull request comments.
- **Trai** — triathlon plans generated from the athlete's own Strava data.
- **PEACHealth** — free health information app, later extended with subscriptions.
- **Rodi Sites** — websites from €75/month, average fourteen days to live, against
  the €2,000–€8,000 upfront a traditional agency charges.

If a claim is not in that list and not otherwise verifiable, cut it or write
around it. "We have seen this go wrong" is honest. "We saw this go wrong at
three accountancy firms last spring" is not, unless it did.

### Kill filler — zero tolerance

Scan every sentence. Delete on sight.

**English:** in today's world · fast-paced · digital landscape · it is important
to note · worth noting · in conclusion · to summarize · let's dive into · delve
into · comprehensive · robust · leverage · utilize · facilitate · this article
will · seamless · unlock · game-changer · Furthermore, · Moreover, ·
Additionally, · It is worth

Also banned: any sentence whose only job is announcing the next sentence.

### Format unpredictably

- Lists of 3, 4, 6, or 7 items. Never exactly 5 — that is the model's default.
- Vary item length inside one list. One-liners next to two-sentence entries.
- Bold **mid-sentence** sometimes, not only at the start of a bullet.
- Em dashes to break a thought — like this.
- Parentheticals where a writer would actually drop one.

### Voice

First person plural. We build this; we have opinions about it. Direct, technical
where it earns its place, willing to say "that is the wrong tool" — the strongest
credibility signal a development agency has is telling someone not to buy.

Never patronise the reader. Assume they are competent and short on time.

---

## Step 4 — Structure

1. **Hook** — a claim, a cost, or a failure mode. No warm-up paragraph.
2. **Promise** — one sentence on what they walk away with. Often this is the lead.
3. **Body** — three to seven H2 sections. Each answers "so what do I do?"
4. **Close** — a concrete next step or a stated opinion. Never "good luck".

H2 headings carry weight in AI answers. Phrase them as the question a reader
would type: *"What does AI development cost?"* beats *"Cost considerations"*.

The first paragraph under a question-shaped H2 is what answer engines lift. Make
it self-contained, 40–60 words, and correct on its own.

**Length:** 1200–2000 words. Shorter if the topic is genuinely thin — a padded
article ranks worse than a short one.

---

## Step 5 — SEO fields

Set these in `pageMetadata` in the route file:

- **`title`** — under 60 characters, primary keyword in it, not clickbait.
- **`description`** — under 160 characters, primary keyword, a reason to click.
- **`keywords`** — primary plus two to four long-tail variants.
- **`route`** — never a raw `path`. The canonical URL comes from the route map,
  so a hardcoded path drifts the moment a slug changes.

FAQs (`faqPageSchema`) are phrased exactly as someone would type them into a
search box. Each answer stands alone in 50–100 words: a reader who sees only
that snippet should get a complete answer. Three to five per article.

---

## Step 6 — Before you call it done

- [ ] Route key added to `lib/routes.ts` and used via `route:`, not `path:`
- [ ] Registered in `lib/blog.ts`, `datePublished` is in the past
- [ ] No banned filler
- [ ] Sentence lengths genuinely vary — read the first screen aloud
- [ ] Every number and claim traces to something real
- [ ] H2s read as questions a person would ask
- [ ] SEO title under 60, description under 160
- [ ] Ends on an action or an opinion
- [ ] `pnpm build` passes and the page prerenders

---

## What was changed from the source skill, and why

The source is [rediumvex/seo-blog-writer-claude](https://github.com/rediumvex/seo-blog-writer-claude)
(`knoxhub-blog` v2.0.0). Burstiness, perplexity, the banned-phrase list, the
list-length rule, and the structure are its ideas and are kept.

Three changes:

1. **Fabricated experience removed.** The source instructs the writer to add
   invented first-person markers and made-up figures to defeat AI detectors.
   On a commercial site those are false statements to prospective clients.
   Replaced with a fixed pool of verifiable facts from this repo's case studies.
2. **Retargeted.** Knox Hub's brand, the "Roman Knox" voice, its tag taxonomy,
   and its internal links pointed at another company. Replaced with Rodi Digital's
   voice and this site's structure.
3. **Output is code, not a paste-up.** The source emits CMS fields. Here an
   article is a TSX route file plus a registry entry plus schema, so the steps
   describe that instead.

Writing for detectors is also not the goal. Writing something a person would
finish reading is; the detector question takes care of itself.
