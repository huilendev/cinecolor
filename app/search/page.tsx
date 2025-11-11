"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { films } from "@/lib/films"
import Link from "next/link"
import { Search } from "lucide-react"

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.content.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">Search Films</h1>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 w-5 h-5 text-foreground/50" />
            <input
              type="text"
              placeholder="Search by title, director, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
              className="w-full pl-12 pr-4 py-4 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all text-lg"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredFilms.length > 0 ? (
            <>
              <p className="text-foreground/70">
                Found <span className="font-semibold text-foreground">{filteredFilms.length}</span> film
                {filteredFilms.length !== 1 ? "s" : ""}
              </p>

              {filteredFilms.map((film) => (
                <Link
                  key={film.slug}
                  href={`/posts/${film.slug}`}
                  className="block group p-6 rounded-lg border border-border hover:border-accent/50 hover:bg-secondary transition-all"
                >
                  <h2 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {film.title}
                  </h2>
                  <p className="text-sm text-foreground/70 mb-3">
                    {film.director} • {film.year}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">{film.description}</p>

                  <div className="flex gap-2 mt-4 flex-wrap">
                    {Object.values(film.palette).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-border/50"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </Link>
              ))}
            </>
          ) : searchTerm ? (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/50">
                No films found matching "{searchTerm}". Try a different search.
              </p>
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/50">Enter a search term to find films.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
