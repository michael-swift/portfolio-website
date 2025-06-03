#!/bin/bash

# Deploy script for michael-swift.github.io
# This script builds the Next.js app and deploys to GitHub Pages

set -e  # Exit on any error

echo "🚀 Starting deployment to michael-swift.github.io..."

# Build the Next.js app
echo "📦 Building Next.js app..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed - 'out' directory not found"
    exit 1
fi

# Define the GitHub Pages repo path
DEPLOY_DIR="../michael-swift.github.io"

# Check if the GitHub Pages repo exists
if [ ! -d "$DEPLOY_DIR" ]; then
    echo "❌ GitHub Pages repo not found at $DEPLOY_DIR"
    echo "Please ensure the michael-swift.github.io repo is cloned in the parent directory"
    exit 1
fi

# Clean the deployment directory (but keep .git and .nojekyll)
echo "🧹 Cleaning deployment directory..."
cd "$DEPLOY_DIR"
find . -maxdepth 1 ! -name '.git' ! -name '.nojekyll' ! -name '.' -exec rm -rf {} +

# Copy new build files
echo "📋 Copying build files..."
cd - > /dev/null
cp -r out/* "$DEPLOY_DIR/"

# Deploy to GitHub
echo "🌐 Deploying to GitHub Pages..."
cd "$DEPLOY_DIR"

# Check if there are any changes
if git diff --quiet && git diff --staged --quiet; then
    echo "✅ No changes to deploy"
    exit 0
fi

# Add all files
git add .

# Commit with timestamp
COMMIT_MSG="Deploy updates - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$COMMIT_MSG"

# Ensure SSH key is loaded (you'll be prompted for passphrase if needed)
echo "🔑 Checking SSH authentication..."
ssh-add -l >/dev/null 2>&1 || ssh-add ~/.ssh/id_ed25519 2>/dev/null || ssh-add ~/.ssh/id_rsa 2>/dev/null || true

# Push to GitHub
echo "📤 Pushing to GitHub (you may be prompted for SSH passphrase)..."
git push origin master

echo "✅ Deployment complete!"
echo "🌍 Your site will be available at: https://michael-swift.github.io"
echo "⏰ It may take a few minutes for changes to appear"