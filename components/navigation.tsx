"use client"

import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const sections = ["science", "posts", "tangents", "contact"]
  const activeSection = useScrollSpy(sections)

  return (
    <nav className={cn("hidden md:block", className)}>
      <ul className="flex flex-col space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <Link
              href={section === "tangents" ? "/tangents" : `#${section}`}
              className={cn(
                "text-sm transition-colors hover:text-primary",
                activeSection === section ? "font-medium" : "text-muted-foreground",
              )}
              onClick={(e) => {
                if (section === "tangents") {
                  return // Let the normal navigation happen
                }
                e.preventDefault()
                document.getElementById(section)?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

