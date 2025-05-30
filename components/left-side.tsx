"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { Navigation } from "./navigation"
import { SocialLinks } from "./social-links"
import { ContentItem } from "@/lib/content"

interface LeftSideProps {
  aboutContent: ContentItem | null
}

export function LeftSide({ aboutContent }: LeftSideProps) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [showSecondComponent, setShowSecondComponent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const scrollThreshold = 50

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
  }, [hasScrolled])

  return (
    <div className="h-full flex flex-col justify-between p-10 md:p-16 lg:p-20">
      <div className="space-y-6">
        {/* Initial component - always visible */}
        <div className={`transition-opacity duration-500 ${hasScrolled ? "opacity-50" : "opacity-100"}`}>
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-sans font-medium">
              <a href="/">Michael Swift</a>
            </h1>
          </div>
        </div>

        {/* Second component - appears on scroll */}
        <div
          className={`transition-all duration-500 space-y-4 ${
            showSecondComponent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="space-y-6">
            {aboutContent && (
              <div className="space-y-6">
                {/* Currently Section */}
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-serif font-semibold text-foreground">Currently</h3>
                  <div className="space-y-4 text-lg md:text-xl font-serif leading-relaxed text-muted-foreground">
                    <p>I'm a biologist using machine learning to design better RNA therapeutics.</p>
                    <p>I earned my PhD at Stanford in the Quake lab, where I studied the generation and maintenance of diversity in the human immune system.</p>
                  </div>
                </div>

                {/* Interests Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-semibold text-foreground">Some other interests</h3>
                  <div className="space-y-2 text-base md:text-lg font-serif text-muted-foreground">
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <span>sequencing everything and everyone</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <span>sculpting biomes using gene drives</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-foreground">•</span>
                      <span>producing music</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Navigation className="mt-8" />
        </div>
      </div>

      <div className="hidden md:flex flex-col space-y-4">
        <SocialLinks />
        <span className="text-sm text-neutral-600">Spring 2025</span>
      </div>

      {/* Mobile scroll indicator */}
      <div className="md:hidden text-center mt-6">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          className="bg-transparent border-none cursor-pointer"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </div>
  )
}

