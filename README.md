# Personal Website

This is a [Next.js](https://nextjs.org) project that serves as my personal website, built with React and TypeScript. The site is exported as a static site and hosted on GitHub Pages.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building and Deployment

This site is deployed as a static site to GitHub Pages. To build and deploy:

```bash
# Build the static site
npm run build

# The build command exports to the 'out' directory
# Deploy script handles pushing to GitHub Pages
./deploy.sh
```

The site uses Next.js static export functionality to generate a fully static website that can be hosted on GitHub Pages without a Node.js server.

## Project Structure

- `/app` - Next.js app directory with routes and layouts
- `/components` - Reusable React components
- `/content` - Markdown content for posts, projects, and pages
- `/public` - Static assets like images
- `/lib` - Utility functions and content management

## Features

- Static site generation with Next.js
- Markdown-based content management
- Responsive split-screen layout
- Blog posts, science projects, and tangent pages
- TypeScript for type safety
- Tailwind CSS for styling
