"use client"

import { useState, useEffect } from "react"

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return

      const scrollPosition = window.scrollY + offset

      // Find the section that is currently in view
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId)
        if (!section) continue

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Call once to set initial active section
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [sectionIds, offset])

  return activeSection
}

