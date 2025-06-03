import SplitLayout from "@/components/split-layout"
import { LeftSide } from "@/components/left-side"
import RightSide from "@/components/right-side"
import { getAboutContent, getLatestPosts, getScienceProjects } from "@/lib/content"
import { getCoverImages } from "@/lib/get-cover-images"

export default async function Home() {
  const [aboutContent, posts, scienceProjects, coverImages] = await Promise.all([
    getAboutContent(),
    getLatestPosts(),
    getScienceProjects(),
    Promise.resolve(getCoverImages()) // Wrap in Promise.resolve since it's not async
  ])

  return (
    <main className="min-h-screen bg-background">
      <SplitLayout 
        leftSide={<LeftSide aboutContent={aboutContent} />} 
        rightSide={<RightSide posts={posts} scienceProjects={scienceProjects} coverImages={coverImages} />} 
      />
    </main>
  )
}

