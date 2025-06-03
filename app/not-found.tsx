import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-serif mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Not Found</h2>
      <p className="mb-8 text-center">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="px-6 py-3 border border-neutral-200 hover:bg-primary/10 transition-colors">
        Return Home
      </Link>
    </div>
  )
}

