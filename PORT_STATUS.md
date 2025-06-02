# Jekyll to Next.js Port Status

## ✅ **Completed:**

### 1. Metadata & SEO
- ✅ Updated site title to "Michael Swift" from "Create Next App"
- ✅ Updated description to "Founding Research Scientist @ Kerna Labs"

### 2. Content Management System
- ✅ Created `/content/` directory structure
- ✅ Migrated ALL Jekyll content:
  - `content/posts/` - 5 blog posts with semantic URLs
  - `content/science/` - 3 research projects
  - `content/publications/` - 5 academic papers
  - `content/tangents/` - 2 art projects
  - `content/agents/` - 2 AI agent projects (stashed)
  - `content/pages/about.md` - bio content
- ✅ Built markdown parsing system (gray-matter + remark + rehype)
- ✅ Added secure HTML sanitization with rehype-sanitize
- ✅ Implemented syntax highlighting with rehype-highlight
- ✅ Updated React components to read from markdown files
- ✅ **You can now edit content by simply editing `.md` files!**

### 3. Individual Page Routing
- ✅ **Posts pages**: Created `/posts/[slug]` dynamic routes with full functionality
  - Individual post pages with rich typography
  - SEO metadata generation
  - Static generation for build optimization
  - Proper navigation and breadcrumbs
- ✅ **Tangents pages**: Created `/tangents` listing and `/tangents/[slug]` individual pages
  - Dynamic routing for art projects
  - Support for embedded content (Spotify, galleries)
  - Secure HTML processing for complex layouts

### 4. Visual Updates
- ✅ Replaced banner image with natto instructions SVG
- ✅ Removed circular profile photo for minimal design
- ✅ Updated B cell paper link to published PNAS version
- ✅ Added Tabula Sapiens link
- ✅ Implemented Solarized color scheme for code highlighting
- ✅ Added responsive typography with prose classes

### 5. Navigation & UX
- ✅ Added tangents to main navigation
- ✅ Implemented scroll-based navigation reveal
- ✅ Added proper back links and breadcrumbs
- ✅ Mixed navigation behavior (tangents = page route, others = scroll)

### 6. URL Structure & SEO
- ✅ **Semantic post URLs**: Renamed all posts to meaningful slugs
  - `/posts/llms-and-antibodies` (was 2023-03-04-nest-map)
  - `/posts/dalle-combinatoric-collage` (was 2023-05-24-dalle)
  - `/posts/latex-cover-letter-template` (was 2023-10-24-cover_letter)
  - `/posts/rna-obelisks` (was 2024-03-11-rna-obelisks)
  - `/posts/minimal-latex-job-description-template` (was 2024-11-19-minimal...)

### 7. Data Consistency
- ✅ Standardized all date formats across content files
- ✅ Added proper metadata (categories, excerpts, links) to science projects
- ✅ Fixed image paths for Next.js public folder structure

## 🔄 **Current State:**
- **Site running**: Fully functional Next.js application
- **Content editing**: Edit any `.md` file in `/content/` folder
- **Posts**: Individual pages working at semantic URLs
- **Tangents**: Full page and individual routing implemented
- **Science projects**: Displaying with proper links and metadata
- **About section**: Dynamic content from markdown

## 📋 **Remaining Tasks:**

### Option 1: CV/Resume Page
- Create professional summary page
- Academic and industry experience
- Skills and achievements

### Option 2: Asset Migration
- Copy missing images from Jekyll `/images/` folder to `/public/images/`
- Fix 404 errors for post images (optional, depends on desired functionality)

### Option 3: Publications Page
- Individual publication pages (currently just links to external sources)
- Could be lower priority since Google Scholar link exists

### Option 4: Search Functionality
- Optional enhancement for content discovery
- Could implement with local search or external service

## 🎯 **Major Achievements:**
1. **No more hardcoded content!** Edit content via markdown files only
2. **Complete routing system** for posts and tangents with dynamic URLs
3. **Secure content processing** with HTML sanitization and syntax highlighting
4. **Semantic URLs** that reflect actual content rather than dates
5. **Responsive design** with proper typography and mobile support

## 📁 **Content Structure:**
```
my-app/content/
├── agents/          (2 files: stashed as easter egg concept)
├── pages/           (1 file: about.md)  
├── posts/           (5 files: semantic URLs, individual pages working)
├── publications/    (5 files: academic papers, external links)
├── science/         (3 files: research projects)
└── tangents/        (2 files: art projects, full routing implemented)
```

## 💾 **How to Edit Content:**
- **Bio/About**: Edit `content/pages/about.md`
- **Blog posts**: Edit `content/posts/*.md` (URLs auto-generated from filename)
- **Science projects**: Edit `content/science/*.md`
- **Publications**: Edit `content/publications/*.md`
- **Art/Tangents**: Edit `content/tangents/*.md` (has individual pages)

The site automatically parses markdown and displays with proper formatting, syntax highlighting, and secure HTML processing.

## 📊 **Progress:**
**~90% Complete** - Core functionality implemented. Posts and tangents have full routing. Remaining work is optional enhancements and additional pages.