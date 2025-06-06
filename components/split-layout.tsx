"use client"

import type { ReactNode } from "react"
// import { useMediaQuery } from "@/hooks/use-media-query"

interface SplitLayoutProps {
  leftSide: ReactNode
  rightSide: ReactNode
}

export default function SplitLayout({ leftSide, rightSide }: SplitLayoutProps) {
  // const isMobile = useMediaQuery("(max-width: 1120px)")

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile: Full height intro section that scrolls normally */}
      {/* Desktop: Fixed sidebar as before */}
      <div className="min-h-screen md:min-h-0 md:w-2/5 md:fixed md:h-screen md:top-0 md:left-0 md:border-r-2 md:border-neutral-200 bg-background">
        {leftSide}
      </div>
      {/* Right side content */}
      <div className="w-full md:w-3/5 md:ml-[40%]">{rightSide}</div>
    </div>
  )
}

