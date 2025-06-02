import { Github, GraduationCap, Mail } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href="mailto:info@kernalabs.ai"
        className="text-neutral-700 hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </Link>
      <Link
        href="https://kernalabs.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 hover:text-primary transition-colors"
        aria-label="Website"
      >
        <GraduationCap size={20} />
      </Link>
      <Link
        href="https://github.com/kernalabs"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github size={20} />
      </Link>
    </div>
  )
}

