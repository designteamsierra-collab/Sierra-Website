# Phase 3 Lighthouse comparison

**WP** = current live WordPress site (the bar to beat).
**SI** = Sierra Next.js rebuild served from local `next start`.
Both runs: mobile, headless Chrome stable, default 3G + slow-CPU throttling.

| Page                  | Perf (WP -> SI) |   LCP (WP -> SI) | CLS (WP -> SI) | TBT (WP -> SI) | Page wt KB (WP -> SI) |
| --------------------- | --------------: | ---------------: | -------------: | -------------: | --------------------: |
| Homepage              |        71 -> 86 | 7714ms -> 3869ms |         0 -> 0 | 112ms -> 159ms |           3069 -> 785 |
| Clean Core Assessment |        48 -> 90 | 7491ms -> 3690ms |     0.330 -> 0 |  241ms -> 59ms |           2341 -> 833 |
| Process Automation    |        55 -> 91 | 5455ms -> 3466ms |     0.309 -> 0 |  203ms -> 46ms |           1847 -> 779 |
| AI Suite              |        59 -> 84 | 4079ms -> 4591ms |     0.672 -> 0 |  150ms -> 51ms |           680 -> 1530 |

Targets per the brief: LCP < 2500ms, CLS < 0.1, INP/TBT < 200ms.
