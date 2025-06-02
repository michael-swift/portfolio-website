"use client"
import Image from "next/image"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { ContentItem } from "@/lib/content"

interface RightSideProps {
  posts: ContentItem[]
  scienceProjects: ContentItem[]
}

export default function RightSide({ posts, scienceProjects }: RightSideProps) {
  return (
    <div className="min-h-screen">
      {/* Banner image for desktop */}
      <div className="hidden md:block relative h-[780px]">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <Image
            src="/placeholder-illustration.svg"
            alt="Placeholder illustration"
            width={800}
            height={800}
            className="object-contain max-w-full max-h-full"
          />
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
      <section id="science" className="p-6 md:p-10">
        <h2 className="text-3xl font-serif text-center mt-6 mb-4">Projects</h2>
        <p className="text-center mb-8">Professional projects and research work.</p>

        <div className="space-y-8">
          {scienceProjects.map((project) => (
            <Card key={project.slug} className="border border-neutral-200">
              <CardContent className="p-4 border-x border-b border-neutral-200">
                <div className="text-sm uppercase mb-2">{project.category || 'Research'}</div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                {project.date && <div className="text-sm mb-2">{project.date}</div>}
                <div 
                  className="text-base mb-4 prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: project.excerpt || project.content.substring(0, 300) + '...' }}
                />
              </CardContent>
              {project.link && (
                <CardFooter className="p-4 border-x border-b border-neutral-200 flex justify-between items-center">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="transition-all hover:font-bold">Read Paper</a>
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
        <p className="text-center mb-8">Thoughts, ideas, and interesting projects I&apos;ve been working on.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Card key={post.slug} className="border border-neutral-200 hover:shadow-md transition-shadow">
              <a href={`/posts/${post.slug}`} className="block">
                <CardContent className="p-4 border-x border-b border-neutral-200">
                  <div className="text-sm uppercase mb-2">{post.categories?.[0] || 'Post'}</div>
                  <CardTitle className="text-xl mb-2 hover:text-primary transition-colors">{post.title}</CardTitle>
                {post.date && (
                  <div className="text-sm mb-2">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric',
                      timeZone: 'UTC'
                    })}
                  </div>
                )}
                <div 
                  className="text-base prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: post.excerpt || post.content.substring(0, 200) + '...' 
                  }}
                />
              </CardContent>
              <CardFooter className="p-4 border-x border-b border-neutral-200 flex justify-between items-center">
                <span className="transition-all hover:font-bold">Read Post</span>
                <ChevronRight size={16} />
              </CardFooter>
              </a>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 md:p-10">
        <h2 className="text-3xl font-serif mt-6 mb-4">Contact</h2>
        <div className="space-y-4 max-w-lg">
          <p className="text-lg font-serif leading-relaxed text-muted-foreground">
            I&apos;m always interested in connecting with like-minded professionals and collaborators.
          </p>
          <p className="text-base font-serif text-muted-foreground">
            Feel free to reach out through any of the social platforms above.
          </p>
        </div>
      </section>
    </div>
  )
}

