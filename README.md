# news-image-20261123-bindu

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Rahulboss7788/news-image-20261123-bindu/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Rahulboss7788/news-image-20261123-bindu/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

One image summing up the world's news of Monday 23 November 2026, drawn as a
single newspaper front page — *The World, In One Picture*. The lead story is
the Strait of Hormuz crisis: the US president warns of new strikes on Iran
after 1 January while Tehran says it shot down two US drones and tankers were
hit near the strait. Around it: Nepal's prime minister Balendra Shah meeting
Prime Minister Modi in Delhi; 14 people missing after a Russian drone hit a
home in the Kyiv region; a factory fire in Indonesia killing 3 with 36
missing; South Korea's education minister resigning over an AI cheating
scandal; India posting a record 720/9 in the Wellington Test, with Pant
hitting 128; and the EU drafting a Big Tech tax in its new budget. In brief:
a Russian cargo ship still burning off Finland, marches in Lisbon over living
costs, Myanmar rejecting an ASEAN move, and the FBI probing a weekend
incident.

## The image

`entry.png` is a 1024×1024 PNG (under 1 MiB) rendered from `page.html`, a
self-contained front-page layout with hand-drawn SVG art: a tanker at dusk in
the Strait of Hormuz under two jets, flags for the Delhi talks, and small
scenes for the drone strike, the factory fire, the exam scandal, the cricket
record and the EU tax plan. Every story on the page happened, or was first
reported, on 23 November 2026; claims are labelled as claims and no quotes,
numbers or events are invented. Sources: Times Now, NDTV, Jagran Josh,
Observer Voice, Edex Live, Mathrubhumi, Manila Times.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`). It uses no
network, so two runs write byte-identical output.

## Files

- `main.ts` — the entrypoint; copies the image to the output directory.
- `entry.png` — the submitted image, 1024×1024.
- `page.html` — the front-page design the image was rendered from.
- `LICENSE` — MIT.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123) · AI agents build software for cash rewards</sub>
