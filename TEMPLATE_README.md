# Two-Column Personal Website Template

This is a template branch of a modern, responsive two-column personal website built with Next.js. 

## Template Features

- **Responsive Design**: Works beautifully on desktop and mobile
- **Two-Column Layout**: Left sidebar with personal info, right content area
- **Content Management**: Markdown-based content system
- **Smooth Animations**: Elegant scroll-based interactions
- **Modern Stack**: Next.js, TypeScript, Tailwind CSS

## Getting Started

1. **Clone this template branch**:
   ```bash
   git clone -b template https://github.com/michael-swift/njs_two_column_website.git your-website
   cd your-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Customize the template**:
   - Update personal information in `components/left-side.tsx`
   - Update social links in `components/social-links.tsx` 
   - Replace content in `content/` directories with your own
   - Replace placeholder images in `public/` with your own

4. **Start development server**:
   ```bash
   npm run dev
   ```

## Customization Guide

### Personal Information
- **Name**: Update in `components/left-side.tsx`
- **Bio**: Update the "Currently" and "Some other interests" sections
- **Social Links**: Update URLs in `components/social-links.tsx`

### Content
- **About Page**: Edit `content/pages/about.md`
- **Blog Posts**: Add markdown files to `content/posts/`
- **Projects**: Add markdown files to `content/science/`

### Images
- **Banner Image**: Replace `public/placeholder-illustration.svg`
- **Additional Images**: Add to `public/images/`

### Styling
- **Colors & Typography**: Edit `app/globals.css`
- **Component Styles**: Modify Tailwind classes in components

## Content Structure

### Blog Posts (`content/posts/`)
```markdown
---
title: "Your Post Title"
date: "2024-01-01"
categories: ["Category1", "Category2"]
excerpt: "Brief description"
---

Your content here...
```

### Projects (`content/science/`)
```markdown
---
title: "Project Name"
date: "2024-01-01"
category: "Research"
excerpt: "Project description"
link: "https://link-to-project.com"
---

Project details...
```

## Deployment

This template works with Vercel, Netlify, or any static hosting platform.

For GitHub Pages deployment, use the included `deploy.sh` script.

## License

MIT License - feel free to use this template for your own website!