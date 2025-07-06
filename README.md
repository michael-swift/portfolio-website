# Portfolio Website

A minimal, responsive two-column portfolio website built with Next.js, featuring a clean split-screen layout and smooth scrolling interactions. Showcases scientific research, blog posts, and projects with a focus on computational biology and systems biology.

## Demo

![Portfolio Website Demo](./public/frontpage.png)

*Clean two-column layout with responsive design and smooth scrolling*

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

## CI/CD Pipeline

This project includes a complete CI/CD pipeline using GitHub Actions:

- **Continuous Integration**: Automated testing, linting, and TypeScript checking on every push
- **Continuous Deployment**: Automatic deployment to GitHub Pages when tests pass
- **Quality Gates**: Code must pass all checks before deployment
- **Cross-Repository Deployment**: Builds in source repo, deploys to GitHub Pages repo

## Project Structure

- `/app` - Next.js app directory with routes and layouts
- `/components` - Reusable React components
- `/content` - Markdown content for posts, projects, and pages
- `/public` - Static assets like images
- `/lib` - Utility functions and content management

## Features

- **Minimal Two-Column Layout** - Clean split-screen design with smooth scrolling
- **Responsive Design** - Adapts seamlessly to desktop and mobile devices
- **Static Site Generation** - Built with Next.js for optimal performance
- **Markdown-Based Content** - Easy content management for posts and projects
- **Scientific Portfolio** - Showcases research projects, publications, and blog posts
- **TypeScript & Modern Stack** - Type-safe development with Tailwind CSS styling
- **CI/CD Pipeline** - Automated testing and deployment with GitHub Actions
