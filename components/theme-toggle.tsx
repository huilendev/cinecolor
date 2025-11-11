"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check initial theme preference
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light")
  }

  if (!mounted) {
    return <div className="w-10 h-10" />
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
