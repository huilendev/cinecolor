"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { films } from "@/lib/films"
import { Search } from "lucide-react"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      film.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-6 text-balance">Cinecolor</h1>
          <p className="text-xl text-foreground/70 max-w-3xl text-pretty leading-relaxed">
            A deep dive into color as a narrative force in cinema. Exploring the palettes, techniques, and emotions that
            shaped how we see film. From Technicolor's birth to cyberpunk neon, color tells stories all its own.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-4 w-5 h-5 text-foreground/50" />
            <input
              type="text"
              placeholder="Search films, directors, techniques..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
        </div>

        {/* Film Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredFilms.map((film) => (
            <Link key={film.slug} href={`/posts/${film.slug}`} className="group">
              <div className="overflow-hidden rounded-lg border border-border hover:border-accent/50 transition-all hover:shadow-xl">
                {/* Hero Image */}
                <div className="h-64 bg-secondary overflow-hidden">
                  <img
                    src={film.heroImage || "/placeholder.svg"}
                    alt={film.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-card">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {Object.values(film.palette).map((color, idx) => (
                      <div
                        key={idx}
                        className="w-5 h-5 rounded-full border border-border/50 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                        title={Object.keys(film.palette)[idx]}
                      />
                    ))}
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                    {film.title}
                  </h2>
                  <p className="text-sm text-foreground/70 mb-3">
                    {film.director} • {film.year}
                  </p>
                  <p className="text-sm text-foreground/60 line-clamp-2">{film.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredFilms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/50">No films found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
