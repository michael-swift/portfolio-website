import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { getContentItems } from '@/lib/content'

export default async function TangentsPage() {
  const tangents = await getContentItems('tangents')

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back button */}
        <Link 
          href="/#posts" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">
            Tangents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
           Experiments and diversions from the main path.
          </p>
        </header>

        {/* Tangents grid */}
        <div className="space-y-8">
          {tangents.map((tangent) => (
            <Card key={tangent.slug} className="border border-neutral-200 hover:shadow-md transition-shadow">
              <Link href={`/tangents/${tangent.slug}`} className="block">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <CardTitle className="text-2xl font-serif hover:text-primary transition-colors">
                      {tangent.title}
                    </CardTitle>
                    
                    {tangent.excerpt && (
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {tangent.excerpt}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>
        </footer>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Tangents | Michael Swift',
  description: 'Creative projects, experiments, and diversions from the main path.',
}