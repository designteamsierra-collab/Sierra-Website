$dir = $PSScriptRoot
$pairs = @(
  @{ name = "Homepage";              file = "home_mobile.json" },
  @{ name = "Clean Core Assessment"; file = "clean-core-assessment_mobile.json" },
  @{ name = "Process Automation";    file = "process-automation_mobile.json" },
  @{ name = "AI Suite";              file = "ai-suite_mobile.json" }
)

function Read-Metrics([string]$path) {
  if (-not (Test-Path $path)) { return $null }
  $r = Get-Content -Raw $path | ConvertFrom-Json
  return [pscustomobject]@{
    Perf    = if ($r.categories.performance.score -ne $null) { [math]::Round($r.categories.performance.score * 100) } else { 0 }
    A11y    = if ($r.categories.accessibility.score -ne $null) { [math]::Round($r.categories.accessibility.score * 100) } else { 0 }
    BP      = if ($r.categories.'best-practices'.score -ne $null) { [math]::Round($r.categories.'best-practices'.score * 100) } else { 0 }
    SEO     = if ($r.categories.seo.score -ne $null) { [math]::Round($r.categories.seo.score * 100) } else { 0 }
    LCP_ms  = [math]::Round($r.audits.'largest-contentful-paint'.numericValue)
    CLS     = [math]::Round($r.audits.'cumulative-layout-shift'.numericValue, 3)
    TBT_ms  = [math]::Round($r.audits.'total-blocking-time'.numericValue)
    TotalKB = if ($r.audits.'total-byte-weight'.numericValue) { [math]::Round($r.audits.'total-byte-weight'.numericValue / 1024) } else { 0 }
  }
}

$rows = @()
foreach ($p in $pairs) {
  $wp = Read-Metrics (Join-Path $dir $p.file)
  $local = Read-Metrics (Join-Path $dir "local\$($p.file)")
  $rows += [pscustomobject]@{
    Page        = $p.name
    WP_Perf     = if ($wp) { $wp.Perf } else { "-" }
    SI_Perf     = if ($local) { $local.Perf } else { "-" }
    WP_LCP      = if ($wp) { "{0}ms" -f $wp.LCP_ms } else { "-" }
    SI_LCP      = if ($local) { "{0}ms" -f $local.LCP_ms } else { "-" }
    WP_CLS      = if ($wp) { $wp.CLS } else { "-" }
    SI_CLS      = if ($local) { $local.CLS } else { "-" }
    WP_TBT      = if ($wp) { "{0}ms" -f $wp.TBT_ms } else { "-" }
    SI_TBT      = if ($local) { "{0}ms" -f $local.TBT_ms } else { "-" }
    WP_KB       = if ($wp) { $wp.TotalKB } else { "-" }
    SI_KB       = if ($local) { $local.TotalKB } else { "-" }
  }
}

$rows | Format-Table -AutoSize Page, WP_Perf, SI_Perf, WP_LCP, SI_LCP, WP_CLS, SI_CLS, WP_TBT, SI_TBT, WP_KB, SI_KB

# Markdown summary
$lines = New-Object System.Collections.ArrayList
[void]$lines.Add("# Phase 3 Lighthouse comparison")
[void]$lines.Add("")
[void]$lines.Add("**WP** = current live WordPress site (the bar to beat).")
[void]$lines.Add("**SI** = Sierra Next.js rebuild served from local ``next start``.")
[void]$lines.Add("Both runs: mobile, headless Chrome stable, default 3G + slow-CPU throttling.")
[void]$lines.Add("")
[void]$lines.Add("| Page | Perf (WP -> SI) | LCP (WP -> SI) | CLS (WP -> SI) | TBT (WP -> SI) | Page wt KB (WP -> SI) |")
[void]$lines.Add("| ---- | ----------------:| --------------:| --------------:| --------------:| ---------------------:|")
foreach ($r in $rows) {
  $perf  = "$($r.WP_Perf) -> $($r.SI_Perf)"
  $lcp   = "$($r.WP_LCP) -> $($r.SI_LCP)"
  $cls   = "$($r.WP_CLS) -> $($r.SI_CLS)"
  $tbt   = "$($r.WP_TBT) -> $($r.SI_TBT)"
  $kb    = "$($r.WP_KB) -> $($r.SI_KB)"
  [void]$lines.Add("| $($r.Page) | $perf | $lcp | $cls | $tbt | $kb |")
}
[void]$lines.Add("")
[void]$lines.Add("Targets per the brief: LCP < 2500ms, CLS < 0.1, INP/TBT < 200ms.")

$out = Join-Path $dir "COMPARISON.md"
$lines -join "`n" | Out-File -FilePath $out -Encoding utf8
Write-Host ""
Write-Host "Wrote $out"
