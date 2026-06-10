# Lighthouse mobile baseline - live WordPress site

Captured 2026-05-05 against https://sierradigitalinc.com/* from the dev machine.
Lighthouse 13.2.0, headless Google Chrome stable. Mobile form factor, default 3G + slow-CPU throttling.

These are the numbers the new build must equal or beat.

| Page                  | Perf | A11y |  BP | SEO | LCP (ms) |   CLS | TBT (ms) | Page wt (KB) | JS exec (ms) |
| --------------------- | ---: | ---: | --: | --: | -------: | ----: | -------: | -----------: | -----------: |
| Homepage              |   71 |   93 |  77 |  92 |     7714 |     0 |      112 |         3069 |         1478 |
| Clean Core Assessment |   48 |   90 |  73 |  92 |     7491 | 0.330 |      241 |         2341 |         2184 |
| Process Automation    |   55 |   93 |  73 | 100 |     5455 | 0.309 |      203 |         1847 |         1616 |
| AI Suite              |   59 |   93 |  77 | 100 |     4079 | 0.672 |      150 |          680 |         1516 |

## Targets for the rebuild (per brief)

- LCP **<2.5s** (best-in-class)
- CLS **<0.1**
- INP **<200ms** (TBT is the lab proxy; aim for <100ms)

## Re-run

```bash
cd "/c/Users/BarathkumarPalanivel/Desktop/Sierra Website"
source .shell-env.sh
export CHROME_PATH="/c/Program Files/Google/Chrome/Application/chrome.exe"
lighthouse https://sierradigitalinc.com/ --output=json --output-path=docs/baseline-lighthouse/home_mobile.json \
  --chrome-flags="--headless=new --no-sandbox --disable-gpu" \
  --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --quiet
```
