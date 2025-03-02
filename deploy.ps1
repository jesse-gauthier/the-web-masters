# PowerShell script for Vue build deployment
# Exit on error
$ErrorActionPreference = "Stop"

# Store the current branch
$currentBranch = git branch --show-current
Write-Host "Current branch: $currentBranch"

# Check for uncommitted changes
$status = git status --porcelain
if ($status) {
    Write-Host "Error: You have uncommitted changes. Please commit or stash them first." -ForegroundColor Red
    exit 1
}

# Build Vue application
Write-Host "Building Vue application..." -ForegroundColor Cyan
npm run build

# Switch to build branch
Write-Host "Switching to build branch..." -ForegroundColor Cyan
git checkout build

# Remove previous build files but preserve git files
Write-Host "Cleaning build branch..." -ForegroundColor Cyan
git rm -rf .
git clean -fxd

# Get the project folder name
$projectFolder = Split-Path -Leaf (Get-Location)

# Copy new build files from dist
Write-Host "Copying new build files..." -ForegroundColor Cyan
Copy-Item -Path "../$projectFolder/dist/*" -Destination "." -Recurse

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

Write-Host "Deployment complete! Build branch has been updated." -ForegroundColor Green