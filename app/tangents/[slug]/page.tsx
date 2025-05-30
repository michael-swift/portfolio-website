import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getContentItem, getContentItems } from '@/lib/content'

interface TangentPageProps {
  params: Promise<{ slug: string }>
}

export default async function TangentPage({ params }: TangentPageProps) {
  const { slug } = await params
  const tangent = await getContentItem('tangents', slug)

  if (!tangent) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link 
          href="/tangents" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to tangents
        </Link>

        {/* Post header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            {tangent.title}
          </h1>
          
          {tangent.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {tangent.excerpt}
            </p>
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
          prose-img:rounded-lg prose-img:shadow-sm prose-img:mx-auto
          prose-figure:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground prose-figcaption:mt-2
          [&_.centered-image]:block [&_.centered-image]:mx-auto [&_.centered-image]:w-1/4
          [&_.large-centered-image]:block [&_.large-centered-image]:mx-auto [&_.large-centered-image]:w-3/4
          [&_.image-gallery]:flex [&_.image-gallery]:justify-center [&_.image-gallery]:flex-wrap
          [&_.image-gallery_figure]:m-2 [&_.image-gallery_figure]:w-1/4
          [&_.centered-caption]:flex [&_.centered-caption]:flex-col [&_.centered-caption]:items-center
          [&_iframe]:mx-auto [&_iframe]:rounded-xl [&_iframe]:shadow-lg"
        >
          <div dangerouslySetInnerHTML={{ __html: tangent.content }} />
        </article>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t">
          <Link 
            href="/tangents" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to all tangents
          </Link>
        </footer>
      </div>
    </div>
  )
}

// Generate static paths for all tangents
export async function generateStaticParams() {
  const tangents = await getContentItems('tangents')
  
  return tangents.map((tangent) => ({
    slug: tangent.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: TangentPageProps) {
  const { slug } = await params
  const tangent = await getContentItem('tangents', slug)

  if (!tangent) {
    return {
      title: 'Tangent Not Found'
    }
  }

  return {
    title: `${tangent.title} | Michael Swift`,
    description: tangent.excerpt || tangent.content.substring(0, 160) + '...',
  }
}