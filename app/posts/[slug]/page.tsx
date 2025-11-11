import { Header } from "@/components/header"
import { ColorPalette } from "@/components/color-palette"
import { films } from "@/lib/films"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const film = films.find((f) => f.slug === slug)

  if (!film) {
    notFound()
  }

  const currentIndex = films.findIndex((f) => f.slug === slug)
  const prevFilm = currentIndex > 0 ? films[currentIndex - 1] : null
  const nextFilm = currentIndex < films.length - 1 ? films[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Image */}
        <div className="mb-8 rounded-lg overflow-hidden border border-border">
          <img src={film.heroImage || "/placeholder.svg"} alt={film.title} className="w-full h-96 object-cover" />
        </div>

        {/* Header Info */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 text-balance">{film.title}</h1>
          <p className="text-lg text-foreground/70 mb-4">
            {film.director} • {film.year}
          </p>
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">{film.description}</p>
        </div>

        {/* Color Palette */}
        <div className="mb-12 pb-8 border-b border-border">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Color Palette</h2>
          <ColorPalette palette={film.palette} />
        </div>

        <div className="prose max-w-none mb-12 text-foreground/90">
          {film.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx} className="mb-6 leading-relaxed text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {prevFilm && (
            <Link
              href={`/posts/${prevFilm.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Link>
          )}
          <Link
            href="/"
            className="flex-1 md:flex-none px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground text-center"
          >
            Back to all films
          </Link>
          {nextFilm && (
            <Link
              href={`/posts/${nextFilm.slug}`}
              className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground/70 hover:text-foreground"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </main>
    </div>
  )
}
