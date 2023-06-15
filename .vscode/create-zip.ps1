param (
  [string]$sourcePath,
  [string]$destinationPath
)

$zipPath = [System.IO.Path]::ChangeExtension($destinationPath, ".zip")

Add-Type -A 'System.IO.Compression.FileSystem'
$zipFile = [System.IO.Compression.ZipFile]::Open($zipPath, 'Create')

# exclude ZIP files
Get-ChildItem -Path $sourcePath -Recurse -File -Exclude "*.zip" |
ForEach-Object {
  $relativePath = $_.FullName.Substring($sourcePath.Length + 1)
  Write-Host "Adding $relativePath to $zipPath"
  $zipEntry = $zipFile.CreateEntry($relativePath)
  $zipStream = $zipEntry.Open()

  $fileStream = $_.OpenRead()
  $fileStream.CopyTo($zipStream)

  $fileStream.Close()
  $zipStream.Close()
}

$zipFile.Dispose()
