import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getContentItem, getContentItems } from '@/lib/content'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getContentItem('posts', slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link 
          href="/#posts" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to posts
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <div className="mb-4">
            {post.categories && post.categories.length > 0 && (
              <div className="text-sm uppercase text-muted-foreground mb-2">
                {post.categories[0]}
              </div>
            )}
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
              {post.title}
            </h1>
          </div>
          
          {post.date && (
            <div className="text-muted-foreground">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC'
              })}
            </div>
          )}

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Post content */}
        <article className="prose prose-lg max-w-none 
          prose-headings:font-serif prose-headings:font-semibold prose-headings:text-foreground
          prose-h1:text-3xl prose-h1:md:text-4xl prose-h1:mb-6 prose-h1:mt-8
          prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mb-4 prose-h2:mt-8
          prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mb-3 prose-h3:mt-6
          prose-p:text-base prose-p:md:text-lg prose-p:leading-relaxed prose-p:mb-6 prose-p:font-serif prose-p:text-muted-foreground
          prose-strong:font-semibold prose-strong:text-foreground
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-ul:mb-6 prose-ul:space-y-2 prose-li:text-base prose-li:md:text-lg prose-li:font-serif prose-li:text-muted-foreground
          prose-ol:mb-6 prose-ol:space-y-2
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-muted-foreground
          prose-code:bg-[#fdf6e3] prose-code:text-[#657b83] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-[#eee8d5]
          prose-pre:bg-[#fdf6e3] prose-pre:text-[#657b83] prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-[#eee8d5] prose-pre:shadow-sm
          prose-pre:font-mono prose-pre:text-sm prose-pre:leading-relaxed
          [&_.hljs]:bg-transparent [&_.hljs]:text-inherit
          prose-img:rounded-lg prose-img:shadow-sm prose-img:max-w-[60%] prose-img:mx-auto
          [&_img]:max-w-[60%] [&_img]:mx-auto [&_img]:block">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <Link 
            href="/#posts" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all posts
          </Link>
        </footer>
      </div>
    </div>
  )
}

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getContentItems('posts')
  
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getContentItem('posts', slug)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: `${post.title} | Michael Swift`,
    description: post.excerpt || post.content.substring(0, 160) + '...',
  }
}