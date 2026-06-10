# Phase 0 Recon — Extract per-URL metadata from REST API + saved HTML
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$pagesDir = Join-Path $root "pages"
$restDir = Join-Path $root "rest"
$outFile = Join-Path $root "recon.json"

# ---- 1) Load REST metadata for all post types
$byUrl = @{}
$postTypeFiles = Get-ChildItem -Path $restDir -Filter *.json
foreach ($f in $postTypeFiles) {
    $type = ($f.BaseName -replace '_p\d+$','')
    $items = Get-Content -Raw -Encoding UTF8 $f.FullName | ConvertFrom-Json
    foreach ($it in $items) {
        $url = ($it.link -replace '\\/','/').TrimEnd('/') + '/'
        $y = $it.yoast_head_json
        $rec = [ordered]@{
            url             = $url
            postType        = $type
            id              = $it.id
            slug            = $it.slug
            datePublished   = $it.date
            dateModified    = $it.modified
            wpTitle         = $it.title.rendered
            seoTitle        = $y.title
            seoDescription  = $y.description
            canonical       = $y.canonical
            robots          = ($y.robots | ConvertTo-Json -Compress -Depth 4)
            ogTitle         = $y.og_title
            ogDescription   = $y.og_description
            ogType          = $y.og_type
            ogImage         = if ($y.og_image) { $y.og_image[0].url } else { $null }
            twitterCard     = $y.twitter_card
            schema          = ($y.schema | ConvertTo-Json -Compress -Depth 12)
            schemaTypes     = ""
        }
        # Extract @type list from schema for quick reference
        if ($y.schema."@graph") {
            $rec.schemaTypes = (($y.schema."@graph" | ForEach-Object { $_."@type" }) -join ",")
        }
        $byUrl[$url] = $rec
    }
}
Write-Host "REST records: $($byUrl.Count)"

# ---- 2) Walk HTML files and add body-derived fields
$thirdPartyScripts = @{}
$htmlFiles = Get-ChildItem -Path $pagesDir -Filter *.html
foreach ($f in $htmlFiles) {
    # Reconstruct URL from filename
    $stem = $f.BaseName
    if ($stem -eq '_home') {
        $url = 'https://sierradigitalinc.com/'
    } else {
        $path = ($stem -replace '__','/')
        $url = "https://sierradigitalinc.com/$path/"
    }
    $html = Get-Content -Raw -Encoding UTF8 $f.FullName
    if (-not $html) { continue }

    # H1 (first one)
    $h1 = ""
    if ($html -match '(?is)<h1[^>]*>(.*?)</h1>') {
        $h1 = ($matches[1] -replace '<[^>]+>','' -replace '\s+',' ').Trim()
    }

    # First paragraph (first <p> longer than 30 chars, ignore Elementor empty wrappers)
    $firstPara = ""
    $paraMatches = [regex]::Matches($html, '(?is)<p[^>]*>(.*?)</p>')
    foreach ($m in $paraMatches) {
        $txt = ($m.Groups[1].Value -replace '<[^>]+>','' -replace '\s+',' ').Trim()
        if ($txt.Length -gt 30) { $firstPara = $txt; break }
    }

    # Body word count: strip head, scripts, styles, then strip tags
    $body = $html
    $body = [regex]::Replace($body, '(?is)<head.*?</head>', '')
    $body = [regex]::Replace($body, '(?is)<script.*?</script>', '')
    $body = [regex]::Replace($body, '(?is)<style.*?</style>', '')
    $body = [regex]::Replace($body, '(?is)<nav[^>]*>.*?</nav>', '')
    $body = [regex]::Replace($body, '(?is)<footer[^>]*>.*?</footer>', '')
    $body = [regex]::Replace($body, '<[^>]+>', ' ')
    $body = [regex]::Replace($body, '&[a-z]+;', ' ')
    $words = ($body -split '\s+' | Where-Object { $_.Length -gt 1 }).Count

    # Image count
    $imgCount = ([regex]::Matches($html, '(?i)<img\s')).Count

    # Internal links (a hrefs to sierradigitalinc.com or relative)
    $linkMatches = [regex]::Matches($html, '(?i)<a[^>]+href="([^"#?]+)')
    $internalLinks = @{}
    foreach ($m in $linkMatches) {
        $href = $m.Groups[1].Value
        if ($href -match '^https?://(www\.)?sierradigitalinc\.com') {
            $internalLinks[$href.TrimEnd('/') + '/'] = $true
        } elseif ($href -match '^/[^/]') {
            $internalLinks["https://sierradigitalinc.com$($href.TrimEnd('/'))/"] = $true
        }
    }

    # Third-party scripts (track globally)
    $scriptSrcs = [regex]::Matches($html, '(?i)<script[^>]+src="([^"]+)"')
    foreach ($s in $scriptSrcs) {
        $src = $s.Groups[1].Value
        if ($src -notmatch 'sierradigitalinc\.com' -and $src -match '^https?://') {
            $hostName = ([uri]$src).Host
            if (-not $thirdPartyScripts.ContainsKey($hostName)) {
                $thirdPartyScripts[$hostName] = 0
            }
            $thirdPartyScripts[$hostName]++
        }
    }

    if (-not $byUrl.ContainsKey($url)) {
        # URL is in sitemap but not in any post type (rare — possibly archive page)
        $byUrl[$url] = [ordered]@{
            url=$url; postType="unknown"; id=$null; slug=$null
            datePublished=$null; dateModified=$null; wpTitle=$null
            seoTitle=""; seoDescription=""; canonical=""; robots=""
            ogTitle=""; ogDescription=""; ogType=""; ogImage=""
            twitterCard=""; schema=""; schemaTypes=""
        }
    }
    $rec = $byUrl[$url]
    $rec.h1 = $h1
    $rec.firstParagraph = $firstPara
    $rec.wordCount = $words
    $rec.imageCount = $imgCount
    $rec.internalLinkCount = $internalLinks.Count
    $rec.htmlSize = $f.Length
}
Write-Host "Total records after HTML merge: $($byUrl.Count)"

# ---- 3) Build inbound link counts (how many other pages link TO each URL)
$inbound = @{}
foreach ($f in $htmlFiles) {
    $html = Get-Content -Raw -Encoding UTF8 $f.FullName
    if (-not $html) { continue }
    $linkMatches = [regex]::Matches($html, '(?i)<a[^>]+href="([^"#?]+)')
    $seenOnPage = @{}
    foreach ($m in $linkMatches) {
        $href = $m.Groups[1].Value
        $resolved = ""
        if ($href -match '^https?://(www\.)?sierradigitalinc\.com(/.*)?$') {
            $resolved = ($href -replace '^https?://(www\.)?sierradigitalinc\.com','https://sierradigitalinc.com').TrimEnd('/') + '/'
        } elseif ($href -match '^/[^/]') {
            $resolved = "https://sierradigitalinc.com$($href.TrimEnd('/'))/"
        }
        if ($resolved -and -not $seenOnPage.ContainsKey($resolved)) {
            $seenOnPage[$resolved] = $true
            if (-not $inbound.ContainsKey($resolved)) { $inbound[$resolved] = 0 }
            $inbound[$resolved]++
        }
    }
}
foreach ($k in @($byUrl.Keys)) {
    if ($inbound.ContainsKey($k)) {
        $byUrl[$k].inboundLinkCount = $inbound[$k]
    } else {
        $byUrl[$k].inboundLinkCount = 0
    }
}

# ---- 4) Output
$out = [ordered]@{
    generatedAt    = (Get-Date).ToString("o")
    totalUrls      = $byUrl.Count
    thirdPartyHosts= $thirdPartyScripts
    records        = ($byUrl.Values | Sort-Object -Property @{Expression={$_.url}})
}
$out | ConvertTo-Json -Depth 12 | Out-File -Encoding utf8 $outFile
Write-Host "Wrote $outFile"
Write-Host "Records: $($byUrl.Count)"
Write-Host "Third-party hosts: $($thirdPartyScripts.Count)"
