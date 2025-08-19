"use client"
import Image from "next/image"
import React, { useState, useRef } from "react"
import { ContentItem } from "@/lib/content"
import { CoverImage } from "@/lib/get-cover-images"

interface ImageItem {
  type: 'cover' | 'content'
  image: CoverImage
  title: string
  description: string
  link?: string
}

interface MinimalRightSideProps {
  posts: ContentItem[]
  scienceProjects: ContentItem[]
  coverImages: CoverImage[]
}


export default function MinimalRightSide({ posts, scienceProjects, coverImages }: MinimalRightSideProps) {
  const [hoveredCover, setHoveredCover] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to extract image from content (enhanced frontmatter approach)
  const getContentImage = (item: ContentItem): CoverImage => {
    // Priority 1: Dedicated image field in frontmatter
    if (item.image && typeof item.image === 'string') {
      return {
        src: item.image,
        alt: item.title,
        width: 1200,
        height: 630
      }
    }
    
    // Priority 2: teaser field (common Jekyll convention)
    if (item.teaser && typeof item.teaser === 'string') {
      return {
        src: item.teaser,
        alt: item.title,
        width: 1200,
        height: 630
      }
    }
    
    // Priority 3: og_image in header
    const header = item.header as Record<string, unknown> | undefined
    if (header?.og_image && typeof header.og_image === 'string') {
      return {
        src: header.og_image,
        alt: item.title,
        width: 1200,
        height: 630
      }
    }
    
    // Priority 4: header.teaser (alternative location)
    if (header?.teaser && typeof header.teaser === 'string') {
      return {
        src: header.teaser,
        alt: item.title,
        width: 1200,
        height: 630
      }
    }
    
    // Priority 5: Fallback to cover images based on content type
    const fallbackIndex = item.slug ? item.slug.length % coverImages.length : 0
    return coverImages[fallbackIndex] || {
      src: '/covers/RibbonModel-crJaneRichardson-Lede-2048x1152.webp',
      alt: item.title,
      width: 1200,
      height: 630
    }
  }

  // Create cover image descriptions (decorative scientific imagery)
  const coverDescriptions: Record<string, string> = {
    'RibbonModel-crJaneRichardson-Lede-2048x1152.webp': 'Jane Richardson\'s elegant protein ribbon representation. [decorative]',
    '3d_IgG1.png': 'A spacefilling 3D model of an antibody. [decorative]',
    '96_well_technical.png': 'The 96-well plate - Each well holds a tiny experiment. [decorative]',
    'Waddingtons-1957-depiction-of-his-epigenetic-landscape-reprinted-with-permission.png': 'Waddington\'s epigenetic landscape. A good sign you\'ve entered a developmental biology seminar. [decorative]',
    'clepsine.png': 'Clepsine embryos were some of the first models to study development using lineage tracing. [decorative]',
    'yamanaka_factors_stylized.png': 'The screen which identified the Yamanaka factors. [decorative]'
  }

  // Create arrays for each content type
  const coverItems = coverImages.map(image => ({
    type: 'cover' as const,
    image,
    title: image.alt,
    description: coverDescriptions[image.src.split('/').pop() || ''] || 'A scientific image that captures the beauty of research.',
  }))

  const scienceItems = scienceProjects
    .filter(project => !project.disable_link)
    .map((project) => ({
      type: 'content' as const,
      image: getContentImage(project),
      title: project.title,
      description: project.excerpt || project.content.substring(0, 100) + '...',
      link: project.link || `/science/${project.slug}`
    }))

  const postItems = posts.map((post) => ({
    type: 'content' as const,
    image: getContentImage(post),
    title: post.title,
    description: post.excerpt || post.content.substring(0, 100) + '...',
    link: `/posts/${post.slug}`
  }))

  // Intersperse the content - alternate between work and decorative
  const contentItems = [...scienceItems, ...postItems]
  const imageItems: ImageItem[] = []
  
  let coverIndex = 0
  let contentIndex = 0
  
  // Start with a decorative image, then alternate with some variation
  for (let i = 0; i < coverItems.length + contentItems.length; i++) {
    if (i % 3 === 0 && coverIndex < coverItems.length) {
      // Every third item is decorative
      imageItems.push(coverItems[coverIndex++])
    } else if (contentIndex < contentItems.length) {
      imageItems.push(contentItems[contentIndex++])
    } else if (coverIndex < coverItems.length) {
      imageItems.push(coverItems[coverIndex++])
    }
  }


  const handleClick = (item: ImageItem) => {
    if (item.link) {
      if (item.link.startsWith('http')) {
        window.open(item.link, '_blank', 'noopener noreferrer')
      } else {
        window.location.href = item.link
      }
    }
  }

  const handleCoverHover = (itemId: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCover(itemId)
    }, 1500) // 1.5 second delay
  }

  const handleCoverLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredCover(null)
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* Invisible anchor points for navigation */}
      <div id="science" className="absolute -top-20"></div>
      <div id="posts" className="absolute top-1/2"></div>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
        {imageItems.map((item, index) => {
          const itemId = `${item.type}-${index}`
          const showCoverText = item.type === 'cover' && hoveredCover === itemId
          
          return (
            <div
              key={itemId}
              className={`relative group ${item.link ? 'cursor-pointer' : ''}`}
              onClick={() => handleClick(item)}
              onMouseEnter={() => item.type === 'cover' && handleCoverHover(itemId)}
              onMouseLeave={() => item.type === 'cover' && handleCoverLeave()}
            >
              <div className={`relative h-80 w-full overflow-hidden rounded-lg ${item.type === 'content' ? 'ring-2 ring-black' : ''}`}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className={`object-contain transition-all duration-300 ${
                    item.type === 'content' 
                      ? 'group-hover:opacity-20 group-hover:brightness-150 group-hover:contrast-50' 
                      : showCoverText
                        ? 'opacity-30'
                        : ''
                  }`}
                />
                {/* Show text overlay for actual work (content type) */}
                {item.type === 'content' && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-black max-w-[90%] font-mono">
                      <p className="text-xs mb-2 font-medium">{item.description}</p>
                      {item.link && (
                        <span className="text-xs underline font-bold">Read more</span>
                      )}
                    </div>
                  </div>
                )}
                {/* Show text for decorative images after 1.5 second hover */}
                {item.type === 'cover' && showCoverText && (
                  <div className="absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-500">
                    <div className="text-center text-black max-w-[90%] font-mono">
                      <p className="text-xs font-medium">{item.description.replace(' [decorative]', '')}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}