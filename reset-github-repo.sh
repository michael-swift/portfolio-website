#!/bin/bash

# Script to reset the GitHub Pages repo with a clean history
# This removes all the minimal-mistakes history and starts fresh

set -e

echo "🧹 Creating fresh git history for michael-swift.github.io..."

REPO_DIR="../michael-swift.github.io"

# Navigate to the repo
cd "$REPO_DIR"

# Create a backup branch (just in case)
echo "📦 Creating backup branch..."
git branch backup-before-reset 2>/dev/null || true

# Remove all git history but keep files
echo "🗑️  Removing old git history..."
rm -rf .git

# Initialize new git repo
echo "🆕 Initializing fresh git repository..."
git init
git branch -M master

# Add all current files
echo "📁 Adding all current files..."
git add .

# Create initial commit
echo "📝 Creating initial commit..."
git commit -m "Initial commit: Next.js personal website

🚀 Fresh start with:
- Next.js static site export
- Tailwind CSS styling
- Personal blog and portfolio content
- GitHub Pages deployment ready

Generated with Claude Code"

# Add remote (using existing repo URL)
echo "🔗 Adding GitHub remote..."
git remote add origin git@github.com:michael-swift/michael-swift.github.io.git

# Force push to replace all history
echo "⚠️  WARNING: This will replace all history on GitHub!"
read -p "Continue? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Force pushing to GitHub..."
    git push --force origin master
    echo "✅ Fresh git history created!"
    echo "🌍 Your site: https://michael-swift.github.io"
else
    echo "❌ Operation cancelled"
    exit 1
fi