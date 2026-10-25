import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

type ThemeChoice = "light" | "dark" | "system"
type ResolvedTheme = "light" | "dark"

type ThemeContextValue = {
  theme: ThemeChoice
  resolved: ResolvedTheme
  setTheme: (theme: ThemeChoice) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function readStoredTheme(): ThemeChoice {
  try {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark" || stored === "system") return stored
  } catch {
    /* private mode */
  }
  return "system"
}

function systemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function applyTheme(resolved: ResolvedTheme) {
  document.documentElement.classList.toggle("dark", resolved === "dark")
  document.documentElement.style.colorScheme = resolved
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", resolved === "dark" ? "#1c1b18" : "#f4efe6")
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeChoice>(readStoredTheme)
  const [resolved, setResolved] = useState<ResolvedTheme>(() =>
    readStoredTheme() === "dark"
      ? "dark"
      : readStoredTheme() === "light"
        ? "light"
        : systemTheme(),
  )

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    const update = () => {
      const next = theme === "system" ? (media.matches ? "dark" : "light") : theme
      setResolved(next)
      applyTheme(next)
    }
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [theme])

  const setTheme = (next: ThemeChoice) => {
    setThemeState(next)
    localStorage.setItem("theme", next)
  }

  const toggle = () => setTheme(resolved === "dark" ? "light" : "dark")

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error("useTheme must be used within ThemeProvider")
  return value
}
