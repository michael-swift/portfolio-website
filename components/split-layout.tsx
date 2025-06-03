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
      <div className="w-full md:w-2/5 md:fixed md:h-screen md:top-0 md:left-0 border-r-2 border-neutral-200">
        {leftSide}
      </div>
      <div className="w-full md:w-3/5 md:ml-[40%]">{rightSide}</div>
    </div>
  )
}

