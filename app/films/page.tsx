import { Header } from "@/components/header";
import { films } from "@/lib/films";
import Link from "next/link";

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 text-balance">
          All Films
        </h1>
        <p className="text-lg text-foreground/70 mb-12 max-w-3xl">
          A comprehensive collection of cinematic masterpieces analyzed through
          the lens of color. Each film represents a pivotal moment in how color
          shaped cinema.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {films.map((film) => (
            <Link
              key={film.slug}
              href={`/posts/${film.slug}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl">
                <div className="h-64 bg-secondary overflow-hidden">
                  <img
                    src={film.heroImage || "/placeholder.svg"}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 bg-card">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {Object.values(film.palette).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-5 h-5 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {film.title}
                  </h2>
                  <p className="text-sm text-foreground/70 mb-3">
                    {film.director} • {film.year}
                  </p>
                  <p className="text-sm text-foreground/60 line-clamp-2">
                    {film.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}