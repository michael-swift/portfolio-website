import SplitLayout from "@/components/split-layout"
import { LeftSide } from "@/components/left-side"
import RightSide from "@/components/right-side"
import { getAboutContent, getLatestPosts, getScienceProjects } from "@/lib/content"

export default async function Home() {
  const [aboutContent, posts, scienceProjects] = await Promise.all([
    getAboutContent(),
    getLatestPosts(),
    getScienceProjects()
  ])

  return (
    <main className="min-h-screen bg-background">
      <SplitLayout 
        leftSide={<LeftSide aboutContent={aboutContent} />} 
        rightSide={<RightSide posts={posts} scienceProjects={scienceProjects} />} 
      />
    </main>
  )
}

