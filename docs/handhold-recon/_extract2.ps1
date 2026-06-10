$dir = $PSScriptRoot
$css = Get-Content -Raw "$dir\_all.css"
$pageHtml = Get-Content -Raw "$dir\_home.html"

Write-Host "=== SPACING (numeric padding/margin values, top 15) ==="
$sp = [regex]::Matches($css, '(?:padding|margin)[a-z\-]*\s*:\s*([^;}!]+)') | ForEach-Object {
  $_.Groups[1].Value.Trim()
}
$sp | Where-Object { $_ -match '^[\d.]+(px|rem)' } | Group-Object | Sort-Object Count -Descending | Select-Object -First 15 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== BORDER RADIUS distinct values ==="
$r = [regex]::Matches($css, 'border-radius\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$r | Group-Object | Sort-Object Count -Descending | Select-Object -First 10 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== TRANSITION (top 10) ==="
$tr = [regex]::Matches($css, 'transition\s*:\s*([^;}!]{1,80})') | ForEach-Object { $_.Groups[1].Value.Trim() }
$tr | Group-Object | Sort-Object Count -Descending | Select-Object -First 10 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== HOMEPAGE HEADINGS ==="
[regex]::Matches($pageHtml, '<(h[1-2])[^>]*>([^<]{1,140})<') | Select-Object -First 15 | ForEach-Object {
  Write-Host ("  " + $_.Groups[1].Value + " :: " + $_.Groups[2].Value.Trim())
}

Write-Host ""
Write-Host "=== max-width usages (top 6) ==="
$mw = [regex]::Matches($css, 'max-width\s*:\s*([^;}!]+)') | ForEach-Object { $_.Groups[1].Value.Trim() }
$mw | Group-Object | Sort-Object Count -Descending | Select-Object -First 6 | Format-Table -AutoSize Count, Name

Write-Host ""
Write-Host "=== KEY CUSTOM PROPERTIES (text-* / spacing / radius / leading) ==="
[regex]::Matches($css, '\-\-(text|spacing|radius|leading|tracking)[a-zA-Z\-_0-9]*\s*:\s*([^;}!]+)') | Select-Object -First 40 | ForEach-Object {
  Write-Host ("  --" + $_.Groups[1].Value + ": " + $_.Groups[2].Value.Trim())
}
