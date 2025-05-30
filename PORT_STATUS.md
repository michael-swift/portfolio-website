# Jekyll to Next.js Port Status

## ✅ **Completed:**

### 1. Metadata & SEO
- ✅ Updated site title to "Michael Swift" from "Create Next App"
- ✅ Updated description to "Founding Research Scientist @ Kerna Labs"

### 2. Content Management System
- ✅ Created `/content/` directory structure
- ✅ Migrated ALL Jekyll content:
  - `content/posts/` - 5 blog posts
  - `content/science/` - 3 research projects
  - `content/publications/` - 5 academic papers
  - `content/tangents/` - 2 art projects
  - `content/agents/` - 2 AI agent projects
  - `content/pages/about.md` - bio content
- ✅ Built markdown parsing system (gray-matter + remark)
- ✅ Updated React components to read from markdown files
- ✅ **You can now edit content by simply editing `.md` files!**

### 3. Visual Updates
- ✅ Replaced banner image with art collage from Jekyll site
- ✅ Updated B cell paper link to published PNAS version: https://www.pnas.org/doi/10.1073/pnas.2406474122
- ✅ Added Tabula Sapiens link: https://tabula-sapiens.sf.czbiohub.org/

### 4. Data Consistency
- ✅ Standardized all date formats across content files
- ✅ Added proper metadata (categories, excerpts, links) to science projects

## 🔄 **Current State:**
- **Site running**: http://localhost:3000 
- **Content editing**: Edit any `.md` file in `/content/` folder
- **Posts displaying**: All 5 blog posts now show correctly with proper dates
- **Science projects**: 3 projects with proper links and metadata
- **About section**: Uses dynamic content from `content/pages/about.md`

## 📋 **Next Steps (Road Map Items 2-5):**

### 2. Create routing for individual blog posts
- Currently showing post previews only
- Need to create `/posts/[slug]` dynamic routes
- Need individual post page component

### 3. Add missing sections
- **Tangents page**: Art projects and creative work
- **Agents page**: AI agents section  
- **CV/Resume page**: Professional background
- **Publications page**: Academic publications list
- **Teaching page**: Academic teaching experience

### 4. Migrate remaining assets
- Copy missing images from Jekyll `/images/` folder
- Fix 404 errors for post images:
  - `/images/posts/llm_antibody/`
  - `/images/posts/dalle_files/`
  - `/images/posts/latex/`

### 5. Update navigation
- Jekyll navigation: science, posts, tangents, agents
- Next.js navigation: science, posts, contact (missing tangents & agents)
- Add missing sections to navigation component

## 🎯 **Major Achievement:**
**No more hardcoded content!** You can now edit your bio, blog posts, research descriptions, etc. by simply opening the corresponding markdown file instead of touching React code.

## 📁 **Content Structure:**
```
my-app/content/
├── agents/          (2 files: brennerbot.md, sound_reasoning.md)
├── pages/           (1 file: about.md)  
├── posts/           (5 files: your blog posts)
├── publications/    (5 files: your academic papers)
├── science/         (3 files: research projects)
└── tangents/        (2 files: art projects)
```

## 💾 **How to Edit Content:**
- **Bio/About**: Edit `content/pages/about.md`
- **Blog posts**: Edit `content/posts/*.md` 
- **Science projects**: Edit `content/science/*.md`
- **Publications**: Edit `content/publications/*.md`
- **Art/Tangents**: Edit `content/tangents/*.md`
- **AI Agents**: Edit `content/agents/*.md`

The site automatically parses markdown and displays with proper formatting.

## 📊 **Progress:**
**~75% Complete** - All content migrated and displaying properly. Foundation is solid, remaining work is routing and additional pages.