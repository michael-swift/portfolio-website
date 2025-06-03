import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSanitize from 'rehype-sanitize'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'
import { defaultSchema } from 'hast-util-sanitize'

const contentDirectory = path.join(process.cwd(), 'content')

// Safe HTML schema that allows iframes from trusted domains
const safeSchema = {
  ...defaultSchema,
  tagNames: [
    ...(defaultSchema.tagNames || []),
    'iframe', 'figure', 'figcaption', 'div'
  ],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      'src', 'width', 'height', 'frameBorder', 'allowfullscreen', 
      'allow', 'loading', 'style', 'title'
    ],
    div: ['class', 'style'],
    figure: ['class'],
    figcaption: ['class'],
    img: [...(defaultSchema.attributes?.img || []), 'class']
  },
  protocols: {
    ...defaultSchema.protocols,
    src: ['https']
  }
}

export interface ContentItem {
  slug: string
  title: string
  date?: string
  excerpt?: string
  category?: string
  categories?: string[]
  tags?: string[]
  link?: string
  content: string
  [key: string]: unknown
}

export async function getContentItems(type: string): Promise<ContentItem[]> {
  const fullPath = path.join(contentDirectory, type)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }
  
  const filenames = fs.readdirSync(fullPath)
  const allContentData = await Promise.all(filenames
    .filter(name => name.endsWith('.md'))
    .map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullFilePath = path.join(fullPath, filename)
      const fileContents = fs.readFileSync(fullFilePath, 'utf8')
      
      const { data, content } = matter(fileContents)
      
      // Process markdown content to HTML with syntax highlighting
      const processedContent = await remark()
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeSanitize, safeSchema)
        .use(rehypeHighlight)
        .use(rehypeStringify)
        .process(content)
      const contentHtml = processedContent.toString()
      
      return {
        slug,
        content: contentHtml,
        title: data.title || slug,
        date: data.date,
        excerpt: data.excerpt,
        category: data.category,
        tags: data.tags,
        ...data
      } as ContentItem
    }))
  
  // Sort by date if available
  return allContentData.sort((a, b) => {
    if (a.date && b.date) {
      const dateA = new Date(a.date)
      const dateB = new Date(b.date)
      return dateB.getTime() - dateA.getTime()
    }
    return 0
  })
}

export async function getContentItem(type: string, slug: string): Promise<ContentItem | null> {
  try {
    const fullPath = path.join(contentDirectory, type, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    const { data, content } = matter(fileContents)
    
    // Process markdown content to HTML with syntax highlighting
    const processedContent = await remark()
      .use(remarkRehype, { allowDangerousHtml: true })
      .use(rehypeRaw)
      .use(rehypeSanitize, safeSchema)
      .use(rehypeHighlight)
      .use(rehypeStringify)
      .process(content)
    const contentHtml = processedContent.toString()
    
    return {
      slug,
      content: contentHtml,
      title: data.title || slug,
      date: data.date,
      excerpt: data.excerpt,
      category: data.category,
      categories: data.categories,
      tags: data.tags,
      link: data.link,
      ...data
    } as ContentItem
  } catch {
    return null
  }
}

// Helper function to get about page content
export async function getAboutContent(): Promise<ContentItem | null> {
  return getContentItem('pages', 'about')
}

// Helper function to get latest posts
export async function getLatestPosts(limit = 5): Promise<ContentItem[]> {
  const posts = await getContentItems('posts')
  return posts.slice(0, limit)
}

// Helper function to get science projects
export async function getScienceProjects(): Promise<ContentItem[]> {
  return getContentItems('science')
}

// Helper function to get publications
export async function getPublications(): Promise<ContentItem[]> {
  return getContentItems('publications')
}