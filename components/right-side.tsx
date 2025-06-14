"use client"
import Image from "next/image"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { ContentItem } from "@/lib/content"
import { useState, useEffect } from "react"
import { CoverImage } from "@/lib/get-cover-images"

interface RightSideProps {
  posts: ContentItem[]
  scienceProjects: ContentItem[]
  coverImages: CoverImage[]
}

export default function RightSide({ posts, scienceProjects, coverImages }: RightSideProps) {
  const [selectedImage, setSelectedImage] = useState<CoverImage | null>(null)

  useEffect(() => {
    // Randomly select an image on component mount with bias towards ribbon model
    if (coverImages.length > 0) {
      const ribbonModelIndex = coverImages.findIndex(img => 
        img.src.includes('RibbonModel-crJaneRichardson-Lede-2048x1152.webp')
      )
      
      // 60% chance for ribbon model, 40% chance for others
      if (ribbonModelIndex !== -1 && Math.random() < 0.6) {
        setSelectedImage(coverImages[ribbonModelIndex])
      } else {
        // Select randomly from all images (including ribbon model)
        const randomIndex = Math.floor(Math.random() * coverImages.length)
        setSelectedImage(coverImages[randomIndex])
      }
    }
  }, [coverImages])

  return (
    <div className="min-h-screen">
      {/* Banner image - now visible on both mobile and desktop */}
      <div className="relative h-[60vh] md:h-[780px]">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {selectedImage && (
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="object-contain max-w-full max-h-full"
            />
          )}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={() => {
              const firstSection = document.getElementById("science")
              if (firstSection) {
                firstSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-transparent border-none cursor-pointer"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>

      {/* Science Section */}
      <section id="science" className="p-6 md:p-10 pt-12 md:pt-6">
        <h2 className="text-3xl font-serif text-center mt-6 mb-4">Science</h2>
        <p className="text-center mb-8">Research projects in computational biology and immunology.</p>

        <div className="space-y-6 max-w-full md:max-w-[90%] mx-auto">
          {scienceProjects
            .filter(project => !project.disable_link)
            .map((project) => (
            <Card key={project.slug} className="border border-neutral-200">
              <CardContent className="p-3 border-x border-b border-neutral-200">
                <div className="text-sm uppercase mb-1">{project.category || 'Research'}</div>
                <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                {project.date && <div className="text-sm mb-2">{project.date}</div>}
                <div 
                  className="text-base mb-2 prose prose-sm max-w-none text-justify [&_img]:mx-auto [&_img]:block [&_img]:max-w-full"
                  dangerouslySetInnerHTML={{ __html: project.excerpt || project.content.substring(0, 500) + '...' }}
                />
              </CardContent>
              {(project.link || !project.disable_link) && (
                <CardFooter className="p-3 border-x border-b border-neutral-200 flex justify-between items-center">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-all hover:font-bold">Read the Paper</a>
                  ) : (
                    <a href={`/science/${project.slug}`} className="transition-all hover:font-bold">View Details</a>
                  )}
                  <ChevronRight size={16} />
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="posts" className="p-6 md:p-10">
        <h2 className="text-3xl font-serif text-center mt-6 mb-4">Posts</h2>
        <p className="text-center mb-8">partially formed ideas and partially implemented projects.</p>

        <div className="space-y-6 max-w-full md:max-w-[90%] mx-auto">
          {posts.map((post) => (
            <Card key={post.slug} className="border border-neutral-200 hover:shadow-md transition-shadow">
              <a href={`/posts/${post.slug}`} className="block">
                <CardContent className="p-3 border-x border-b border-neutral-200">
                  <div className="text-sm uppercase mb-1">{post.categories?.[0] || 'Post'}</div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">{post.title}</CardTitle>
                {post.date && (
                  <div className="text-sm mb-1">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      timeZone: 'UTC'
                    })}
                  </div>
                )}
                <div 
                  className="text-base prose prose-sm max-w-none text-justify [&_img]:mx-auto [&_img]:block [&_img]:max-w-full"
                  dangerouslySetInnerHTML={{ 
                    __html: post.excerpt || post.content.substring(0, 400) + '...' 
                  }}
                />
              </CardContent>
              <CardFooter className="p-3 border-x border-b border-neutral-200 flex justify-between items-center">
                <span className="transition-all hover:font-bold">Read Post</span>
                <ChevronRight size={16} />
              </CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}

