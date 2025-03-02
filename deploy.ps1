# PowerShell script for Vue build deployment
# Exit on error
$ErrorActionPreference = "Stop"

# Store the current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch"

# Store project directory path
$projectDir = Get-Location
Write-Host "Project directory: $projectDir"

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Error: You have uncommitted changes. Please commit or stash them first." -ForegroundColor Red
    exit 1
}

# Build Vue application
Write-Host "Building Vue application..." -ForegroundColor Cyan
npm run build

# IMPORTANT: Save the dist folder to a temporary location BEFORE switching branches
Write-Host "Saving build files..." -ForegroundColor Cyan
$tempDir = Join-Path $env:TEMP "vue-build-temp"
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -Path $tempDir -ItemType Directory | Out-Null
Copy-Item -Path "dist\*" -Destination $tempDir -Recurse
Write-Host "Build files saved to $tempDir" -ForegroundColor Green

# Switch to build branch
Write-Host "Switching to build branch..." -ForegroundColor Cyan
git checkout build

# Remove previous build files but preserve git files
Write-Host "Cleaning build branch..." -ForegroundColor Cyan
git rm -rf .
git clean -fxd

# Copy new build files FROM TEMP DIRECTORY
Write-Host "Copying new build files from temp directory..." -ForegroundColor Cyan
Copy-Item -Path "$tempDir\*" -Destination "." -Recurse

# Add all files to git
Write-Host "Adding files to git..." -ForegroundColor Cyan
git add .

# Commit changes
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "New production build - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Push to remote
Write-Host "Pushing to remote..." -ForegroundColor Cyan
git push origin build

# Switch back to original branch
Write-Host "Switching back to $currentBranch branch..." -ForegroundColor Cyan
git checkout $currentBranch

# Clean up temp directory
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "Deployment complete! Build branch has been updated." -ForegroundColor Green