$dir = $PSScriptRoot
$files = @(
    @{ name = "Homepage";              file = "home_mobile.json";                    url = "https://sierradigitalinc.com/" },
    @{ name = "Clean Core Assessment"; file = "clean-core-assessment_mobile.json";   url = "https://sierradigitalinc.com/clean-core-assessment/" },
    @{ name = "Process Automation";    file = "process-automation_mobile.json";      url = "https://sierradigitalinc.com/process-automation/" },
    @{ name = "AI Suite";              file = "ai-suite_mobile.json";                url = "https://sierradigitalinc.com/ai-suite/" }
)

$rows = @()
foreach ($f in $files) {
    $path = Join-Path $dir $f.file
    if (-not (Test-Path $path)) { Write-Host "MISSING: $($f.file)"; continue }
    $r = Get-Content -Raw $path | ConvertFrom-Json

    $perf = if ($r.categories.performance.score -ne $null) { [math]::Round($r.categories.performance.score * 100) } else { 0 }
    $a11y = if ($r.categories.accessibility.score -ne $null) { [math]::Round($r.categories.accessibility.score * 100) } else { 0 }
    $bp   = if ($r.categories.'best-practices'.score -ne $null) { [math]::Round($r.categories.'best-practices'.score * 100) } else { 0 }
    $seo  = if ($r.categories.seo.score -ne $null) { [math]::Round($r.categories.seo.score * 100) } else { 0 }

    $lcp = $r.audits.'largest-contentful-paint'.numericValue
    $cls = $r.audits.'cumulative-layout-shift'.numericValue
    $tbt = $r.audits.'total-blocking-time'.numericValue
    $fcp = $r.audits.'first-contentful-paint'.numericValue
    $si  = $r.audits.'speed-index'.numericValue
    $tti = $r.audits.'interactive'.numericValue

    $totalBytes = $r.audits.'total-byte-weight'.numericValue
    $totalKb = if ($totalBytes) { [math]::Round($totalBytes / 1024) } else { 0 }
    $jsExec = if ($r.audits.'bootup-time'.numericValue) { [math]::Round($r.audits.'bootup-time'.numericValue) } else { 0 }

    $rows += [pscustomobject]@{
        Page    = $f.name
        URL     = $f.url
        Perf    = $perf
        A11y    = $a11y
        BP      = $bp
        SEO     = $seo
        LCP_ms  = [math]::Round($lcp)
        FCP_ms  = [math]::Round($fcp)
        SI_ms   = [math]::Round($si)
        TTI_ms  = [math]::Round($tti)
        TBT_ms  = [math]::Round($tbt)
        CLS     = [math]::Round($cls, 3)
        TotalKB = $totalKb
        JS_ms   = $jsExec
    }
}

Write-Host ""
Write-Host "=== Lighthouse mobile baseline (live WordPress site) ==="
$rows | Format-Table -AutoSize -Property Page, Perf, A11y, BP, SEO, LCP_ms, CLS, TBT_ms, TotalKB, JS_ms

$lines = New-Object System.Collections.ArrayList
[void]$lines.Add("# Lighthouse mobile baseline - live WordPress site")
[void]$lines.Add("")
[void]$lines.Add("Captured 2026-05-05 against `https://sierradigitalinc.com/*` from the dev machine.")
[void]$lines.Add("Lighthouse 13.2.0, headless Google Chrome stable. Mobile form factor, default 3G + slow-CPU throttling.")
[void]$lines.Add("")
[void]$lines.Add("These are the numbers the new build must equal or beat.")
[void]$lines.Add("")
[void]$lines.Add("| Page | Perf | A11y | BP | SEO | LCP (ms) | CLS | TBT (ms) | Page wt (KB) | JS exec (ms) |")
[void]$lines.Add("| ---- | ---: | ---: | -: | --: | -------: | --: | -------: | -----------: | -----------: |")
foreach ($r in $rows) {
    [void]$lines.Add("| $($r.Page) | $($r.Perf) | $($r.A11y) | $($r.BP) | $($r.SEO) | $($r.LCP_ms) | $($r.CLS) | $($r.TBT_ms) | $($r.TotalKB) | $($r.JS_ms) |")
}
[void]$lines.Add("")
[void]$lines.Add("## Targets for the rebuild (per brief)")
[void]$lines.Add("")
[void]$lines.Add("- LCP **<2.5s** (best-in-class)")
[void]$lines.Add("- CLS **<0.1**")
[void]$lines.Add("- INP **<200ms** (TBT is the lab proxy; aim for <100ms)")
[void]$lines.Add("")
[void]$lines.Add("## Re-run")
[void]$lines.Add("")
[void]$lines.Add('```bash')
[void]$lines.Add('cd "/c/Users/BarathkumarPalanivel/Desktop/Sierra Website"')
[void]$lines.Add("source .shell-env.sh")
[void]$lines.Add('export CHROME_PATH="/c/Program Files/Google/Chrome/Application/chrome.exe"')
[void]$lines.Add("lighthouse https://sierradigitalinc.com/ --output=json --output-path=docs/baseline-lighthouse/home_mobile.json \")
[void]$lines.Add('  --chrome-flags="--headless=new --no-sandbox --disable-gpu" \')
[void]$lines.Add("  --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --quiet")
[void]$lines.Add('```')

$mdPath = Join-Path $dir "BASELINE.md"
$lines -join "`n" | Out-File -FilePath $mdPath -Encoding utf8
Write-Host ""
Write-Host "Wrote $mdPath"
