"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Navigation } from "./navigation"
import { SocialLinks } from "./social-links"
import { ContentItem } from "@/lib/content"

interface LeftSideProps {
  aboutContent: ContentItem | null
}

export function LeftSide({ aboutContent }: LeftSideProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showSecondComponent, setShowSecondComponent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      // Different scroll thresholds for mobile vs desktop
      const scrollThreshold = isMobile ? 200 : 50

      if (scrollPosition > scrollThreshold && !hasScrolled) {
        setHasScrolled(true)
        setTimeout(() => {
          setShowSecondComponent(true)
        }, 300)
      } else if (scrollPosition <= scrollThreshold && hasScrolled) {
        setShowSecondComponent(false)
        setTimeout(() => {
          setHasScrolled(false)
        }, 300)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasScrolled, isMobile])

  return (
    <div className="min-h-screen md:h-full flex flex-col justify-between p-6 md:p-16 lg:p-20">
      <div className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 md:block">
        {/* Mobile: Show everything immediately */}
        {/* Desktop: Keep scroll animation */}
        <div className={`transition-opacity duration-500 ${hasScrolled && !isMobile ? "opacity-50" : "opacity-100"}`}>
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-sans font-medium">
              <Link href="/" className="hover:underline underline-offset-4 transition-all">Michael Swift</Link>
            </h1>
          </div>
        </div>

        {/* Content that appears on scroll (desktop) or immediately (mobile) */}
        <div
          className={`transition-all duration-500 space-y-4 ${
            isMobile || showSecondComponent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="space-y-6">
            {aboutContent && (
              <div className="space-y-6">
                {/* Currently Section */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground">Currently</h3>
                  <div className="space-y-4 text-lg md:text-xl font-serif leading-relaxed text-muted-foreground">
                    <p>I&apos;m a systems biologist using machine learning to design better RNA therapeutics.</p>
                    <p>I earned my PhD at Stanford in the Quake lab, where I studied the generation and maintenance of diversity in the human immune system.</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-neutral-200"></div>

                {/* Interests Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-semibold text-foreground">Some other interests</h3>
                  <div className="space-y-2 text-base md:text-lg font-serif text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <Link href="/science/sequencing" className="hover:underline underline-offset-4 transition-all">
                        <span>sequencing everything</span>
                      </Link>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <span>other stuff</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <Link href="/tangents/maiklo" className="hover:underline underline-offset-4 transition-all">
                        <span>producing music</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="mt-6 w-full h-px bg-neutral-200"></div>

          <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <Navigation />
            <div className="md:ml-16">
              <h4 className="text-sm font-medium mb-2">social</h4>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>


      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-auto pb-8">
        <p className="text-sm text-muted-foreground mb-2">Scroll for projects</p>
        <button
          onClick={() => {
            const scienceSection = document.getElementById("science")
            if (scienceSection) {
              scienceSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
          className="bg-transparent border-none cursor-pointer animate-bounce"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  )
}

