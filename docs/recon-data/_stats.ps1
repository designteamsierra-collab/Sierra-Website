$j = Get-Content -Raw "$PSScriptRoot\recon.json" | ConvertFrom-Json
Write-Host '== POST TYPE BREAKDOWN =='
$j.records | Group-Object postType | Sort-Object Count -Descending | ForEach-Object { Write-Host (('{0,-20}' -f $_.Name) + $_.Count) }
Write-Host ''
Write-Host '== WORD COUNT STATS (HTML-derived) =='
$wc = @($j.records | Where-Object { $_.wordCount } | ForEach-Object { $_.wordCount })
Write-Host ('Pages with body data: ' + $wc.Count)
Write-Host ('Total words:          ' + ($wc | Measure-Object -Sum).Sum)
Write-Host ('Mean words:           ' + [math]::Round(($wc | Measure-Object -Average).Average, 0))
$sorted = $wc | Sort-Object
Write-Host ('Median:               ' + $sorted[[int]($wc.Count/2)])
Write-Host ('Min:                  ' + ($wc | Measure-Object -Minimum).Minimum)
Write-Host ('Max:                  ' + ($wc | Measure-Object -Maximum).Maximum)
Write-Host ''
Write-Host '== HTML SIZE STATS =='
$sz = @($j.records | Where-Object { $_.htmlSize } | ForEach-Object { $_.htmlSize })
Write-Host ('Mean KB:              ' + [math]::Round((($sz | Measure-Object -Average).Average / 1024), 0))
Write-Host ('Max KB:               ' + [math]::Round((($sz | Measure-Object -Maximum).Maximum / 1024), 0))
Write-Host ''
Write-Host '== PAGES MISSING TITLE OR DESCRIPTION =='
Write-Host ('Missing seoTitle: ' + (@($j.records | Where-Object { -not $_.seoTitle -and $_.postType -ne 'unknown' })).Count)
Write-Host ('Missing seoDescription: ' + (@($j.records | Where-Object { -not $_.seoDescription -and $_.postType -ne 'unknown' })).Count)
Write-Host ''
Write-Host '== TOP 10 BY INBOUND LINKS =='
$j.records | Sort-Object -Property inboundLinkCount -Descending | Select-Object -First 10 | ForEach-Object { Write-Host (('{0,5}' -f $_.inboundLinkCount) + '  ' + $_.url) }
Write-Host ''
Write-Host '== ORPHANS (0 inbound) =='
$orphans = @($j.records | Where-Object { $_.inboundLinkCount -eq 0 -and $_.postType -ne 'unknown' })
Write-Host ('Orphans: ' + $orphans.Count)
$orphans | Select-Object -First 20 | ForEach-Object { Write-Host ('  ' + $_.url + '  [' + $_.postType + ']') }
Write-Host ''
Write-Host '== JSON-LD @TYPE FREQUENCY =='
$j.records | ForEach-Object { $_.schemaTypes -split ',' } | Where-Object { $_ } | Group-Object | Sort-Object Count -Descending | ForEach-Object { Write-Host (('{0,5}' -f $_.Count) + '  ' + $_.Name) }
Write-Host ''
Write-Host '== ROBOTS noindex CHECK =='
@($j.records | Where-Object { $_.robots -match 'noindex' }) | ForEach-Object { Write-Host ('  ' + $_.url) }
Write-Host ''
Write-Host '== TOP 5 LONGEST PAGES =='
$j.records | Sort-Object -Property wordCount -Descending | Select-Object -First 5 | ForEach-Object { Write-Host (('{0,6}' -f $_.wordCount) + ' words  ' + $_.url) }
