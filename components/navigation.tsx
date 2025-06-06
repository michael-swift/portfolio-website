"use client"

import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface NavigationProps {
  className?: string
}

export function Navigation({ className }: NavigationProps) {
  const sections = ["science", "posts", "tangents"]
  const activeSection = useScrollSpy(sections)

  return (
    <nav className={cn("", className)}>
      <ul className="flex flex-col space-y-2">
        {sections.map((section) => (
          <li key={section}>
            <Link
              href={section === "tangents" ? "/tangents" : `#${section}`}
              className={cn(
                "text-sm transition-colors hover:text-primary flex items-center gap-1 group",
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
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="group-hover:underline underline-offset-2">{section}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

