$dir = $PSScriptRoot
$css = Get-Content -Raw "$dir\_all.css"
$home = Get-Content -Raw "$dir\_home.html"

Write-Host "=== TYPOGRAPHY (font-family declarations) ==="
[regex]::Matches($css, 'font-family\s*:\s*([^;}]+)') | ForEach-Object { $_.Groups[1].Value.Trim() } | Sort-Object -Unique | Select-Object -First 20

Write-Host ""
Write-Host "=== TYPE SCALE (font-size values, frequency) ==="
$sizes = [regex]::Matches($css, 'font-size\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$sizes | Group-Object | Sort-Object Count -Descending | Select-Object -First 20 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== LINE HEIGHTS ==="
$lh = [regex]::Matches($css, 'line-height\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$lh | Group-Object | Sort-Object Count -Descending | Select-Object -First 12 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== COLORS (hex, top 30 by frequency) ==="
$hex = [regex]::Matches($css, '#[0-9a-fA-F]{3,8}\b') | ForEach-Object { $_.Value.ToLower() }
$hex | Group-Object | Sort-Object Count -Descending | Select-Object -First 30 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== COLORS (oklch / hsl / rgb top 20) ==="
$modern = [regex]::Matches($css, '(oklch|hsl|hsla|rgb|rgba)\s*\([^)]{1,80}\)') | ForEach-Object { $_.Value }
$modern | Group-Object | Sort-Object Count -Descending | Select-Object -First 20 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== BORDER RADIUS values ==="
$r = [regex]::Matches($css, '(?:border-radius|--radius[^:]*)\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$r | Group-Object | Sort-Object Count -Descending | Select-Object -First 12 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== BOX SHADOW values ==="
$s = [regex]::Matches($css, 'box-shadow\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$s | Group-Object | Sort-Object Count -Descending | Select-Object -First 8 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== TRANSITION DURATIONS / TIMING FUNCTIONS ==="
$td = [regex]::Matches($css, 'transition[a-z\-]*\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$td | Group-Object | Sort-Object Count -Descending | Select-Object -First 10 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== CSS CUSTOM PROPERTY DEFINITIONS (--var: value) ==="
[regex]::Matches($css, '\-\-[a-zA-Z\-_0-9]+\s*:\s*([^;}!]+)') | Select-Object -First 50 | ForEach-Object { Write-Host ("  " + $_.Value) }

Write-Host ""
Write-Host "=== HOMEPAGE OUTLINE: section/div root classes ==="
[regex]::Matches($home, '<(?:section|main|header|footer|article|aside)\b[^>]*\bclass="([^"]{0,200})"') | Select-Object -First 30 | ForEach-Object { Write-Host ("  " + $_.Value.Substring(0, [Math]::Min(180, $_.Value.Length))) }

Write-Host ""
Write-Host "=== HOMEPAGE H1 + H2 SAMPLES ==="
[regex]::Matches($home, '<(h1|h2)[^>]*>([^<]+)<') | Select-Object -First 12 | ForEach-Object { Write-Host ("  " + $_.Groups[1].Value + ": " + $_.Groups[2].Value.Trim()) }
