import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-serif font-bold text-foreground">Cinecolor</div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/films" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Films
          </Link>
          <Link href="/search" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            Search
          </Link>
          <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
            About
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
