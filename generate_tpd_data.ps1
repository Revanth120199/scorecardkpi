param(
  [string]$Root = "C:\Users\revanth.apuri\Downloads\Score Card"
)

$files = @(
  @{ Path = Join-Path $Root "doordash.xlsx"; Platform = "DoorDash" },
  @{ Path = Join-Path $Root "uber.xlsx"; Platform = "Uber Eats" },
  @{ Path = Join-Path $Root "grubhub.xlsx"; Platform = "Grubhub" },
  @{ Path = Join-Path $Root "Ezcater.xlsx"; Platform = "ezCater" }
)

$out = Join-Path $Root "tpd_data.js"
$map = @{}

function Normalize-Store($value) {
  $store = ([string]$value).Trim()
  if ([string]::IsNullOrWhiteSpace($store)) { return $null }
  if ($store -match '^Yogurtland\s+') { return $store }
  return "Yogurtland $store"
}

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false

try {
  foreach ($file in $files) {
    $workbook = $excel.Workbooks.Open($file.Path, $null, $true)
    try {
      $sheet = $workbook.Worksheets.Item(1)
      $range = $sheet.UsedRange
      $values = $range.Value2
      $rowCount = $values.GetLength(0)
      $colCount = $values.GetLength(1)

      $storeCol = 0
      $dateCol = 0
      $netCol = 0

      for ($col = 1; $col -le $colCount; $col++) {
        $header = ([string]$values[1, $col]).Trim()
        if ($header -eq "Store name") { $storeCol = $col }
        if ($header -eq "Date") { $dateCol = $col }
        if ($header -eq "Net Sales") { $netCol = $col }
      }

      if (-not $storeCol -or -not $dateCol -or -not $netCol) {
        throw "Missing required columns in $($file.Path)"
      }

      for ($row = 2; $row -le $rowCount; $row++) {
        $store = Normalize-Store $values[$row, $storeCol]
        if (-not $store) { continue }

        $dateNum = 0.0
        if (-not [double]::TryParse([string]($values[$row, $dateCol]), [ref]$dateNum)) { continue }
        $date = [datetime]::FromOADate($dateNum).ToString("yyyy-MM-dd")

        $net = 0.0
        [void][double]::TryParse(([string]($values[$row, $netCol]) -replace '[,$ ]', ''), [ref]$net)

        $key = "$($file.Platform)`t$store`t$date"
        if (-not $map.ContainsKey($key)) {
          $map[$key] = [pscustomobject]@{
            platform = $file.Platform
            store    = $store
            date     = $date
            orders   = 0
            cents    = 0
          }
        }

        $map[$key].orders += 1
        $map[$key].cents += [int][math]::Round($net * 100)
      }
    }
    finally {
      $workbook.Close($false)
      [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($workbook)
    }
  }
}
finally {
  $excel.Quit()
  [void][System.Runtime.InteropServices.Marshal]::ReleaseComObject($excel)
}

$rows = @($map.Values | Sort-Object platform, store, date)
$sb = [System.Text.StringBuilder]::new()
[void]$sb.Append("// Generated from DoorDash, Uber Eats, Grubhub, and ezCater workbooks. Columns: Platform, Store Name, Date, Orders, Net Sales cents.`nwindow.TPD_DATA = [")

$first = $true
foreach ($row in $rows) {
  if (-not $first) { [void]$sb.Append(",") }
  $first = $false
  [void]$sb.Append("[")
  [void]$sb.Append((ConvertTo-Json $row.platform -Compress))
  [void]$sb.Append(",")
  [void]$sb.Append((ConvertTo-Json $row.store -Compress))
  [void]$sb.Append(",""")
  [void]$sb.Append($row.date)
  [void]$sb.Append(""",")
  [void]$sb.Append([int]$row.orders)
  [void]$sb.Append(",")
  [void]$sb.Append([int]$row.cents)
  [void]$sb.Append("]")
}

[void]$sb.Append("];`n")
[System.IO.File]::WriteAllText($out, $sb.ToString(), [System.Text.UTF8Encoding]::new($false))

$dates = $rows | ForEach-Object { $_.date }
[pscustomobject]@{
  Rows    = $rows.Count
  Stores  = ($rows.store | Sort-Object -Unique).Count
  MinDate = ($dates | Sort-Object | Select-Object -First 1)
  MaxDate = ($dates | Sort-Object | Select-Object -Last 1)
  Output  = $out
  Bytes   = (Get-Item -LiteralPath $out).Length
}
