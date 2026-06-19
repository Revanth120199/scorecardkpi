# Yogurtland Portal - Daily Sales Update Script
# Reads Revanth 1.csv -> rebuilds sales_summary_data.js -> pushes to GitHub

$ErrorActionPreference = "Stop"
$dir = "C:\Users\revanth.apuri\Downloads\Score Card"
$csvFile = Join-Path $dir "Revanth 1.csv"
$jsFile  = Join-Path $dir "sales_summary_data.js"

Write-Host "Reading $csvFile ..." -ForegroundColor Cyan

$keep = @('CA','TX','NV','UT','AZ','CO','LA','NJ')

$rows = Get-Content $csvFile | Select-Object -Skip 1
$entries = New-Object System.Collections.Generic.List[string]
$skipped = 0
$written = 0

foreach ($line in $rows) {
    $parts = $line -split ','
    if ($parts.Count -lt 3) { $skipped++; continue }

    $dateRaw  = $parts[0].Trim()
    $storeRaw = $parts[1].Trim()
    $salesRaw = $parts[2].Trim()

    # Only keep CA, TX, NV, UT, AZ, CO stores
    $prefix = $storeRaw -replace '\d+.*',''
    if ($keep -notcontains $prefix) { $skipped++; continue }

    if ($salesRaw -eq 'NULL' -or $salesRaw -eq '' -or $salesRaw -eq '0') { $skipped++; continue }
    if ($storeRaw -eq '') { $skipped++; continue }

    try {
        $dt = [DateTime]::Parse($dateRaw)
        $dateStr = $dt.ToString('yyyy-MM-dd')
    } catch { $skipped++; continue }

    try {
        $cents = [int]([Math]::Round([double]$salesRaw * 100))
    } catch { $skipped++; continue }

    $storeName = 'Yogurtland ' + $storeRaw
    $entries.Add('["' + $storeName + '","' + $dateStr + '",0,' + $cents + ']')
    $written++
}

Write-Host ("Rows written: $written  |  Skipped: $skipped") -ForegroundColor Green

$content = '// Generated from Revanth 1.csv. Columns: Store Name, Date, Transactions, Net Sales cents.' + [char]10 + 'window.SALES_DATA = [' + ($entries -join ',') + '];'
[System.IO.File]::WriteAllText($jsFile, $content, [System.Text.Encoding]::UTF8)

Write-Host "sales_summary_data.js updated." -ForegroundColor Green

# Git commit and push
Set-Location $dir
$today = (Get-Date).ToString('yyyy-MM-dd')
git add sales_summary_data.js
git commit -m "Daily sales update $today"
git push origin main

Write-Host ""
Write-Host "Done! Portal will be live on Vercel in ~1 minute." -ForegroundColor Yellow
