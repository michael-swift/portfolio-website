import { Github, GraduationCap, Mail } from "lucide-react"
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <Link
        href="mailto:swiftmichael26@gmail.com"
        className="text-neutral-700 hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail size={20} />
      </Link>
      <Link
        href="https://scholar.google.com/citations?hl=en&user=7Ywb2akAAAAJ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-700 hover:text-primary transition-colors"
        aria-label="Google Scholar"
      >
        <GraduationCap size={20} />
      </Link>
      <Link
        href="https://github.com/michael-swift"
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

