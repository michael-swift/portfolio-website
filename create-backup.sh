#!/bin/bash

# Create a comprehensive backup before resetting git history

echo "📦 Creating comprehensive backup..."

BACKUP_DIR="../backup-$(date '+%Y-%m-%d-%H-%M-%S')"
mkdir -p "$BACKUP_DIR"

# Backup the entire github.io repo (including .git)
echo "💾 Backing up entire GitHub Pages repo..."
cp -r "../michael-swift.github.io" "$BACKUP_DIR/github-pages-repo"

# Backup just the source content from my-app
echo "💾 Backing up source content..."
cp -r "content" "$BACKUP_DIR/source-content"
cp -r "public" "$BACKUP_DIR/source-public"
cp -r "components" "$BACKUP_DIR/source-components"

# Create a file listing
echo "📋 Creating file inventory..."
find "$BACKUP_DIR" -type f > "$BACKUP_DIR/file-inventory.txt"

echo "✅ Backup created at: $BACKUP_DIR"
echo "📊 Total files backed up: $(wc -l < "$BACKUP_DIR/file-inventory.txt")"
echo ""
echo "Your content is now triple-protected:"
echo "1. Original source in my-app/"
echo "2. Current deployed version in michael-swift.github.io/"
echo "3. Complete backup in $BACKUP_DIR/"