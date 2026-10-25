import { Menu } from "lucide-react"
import { useEffect, useState } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { navLinks, site } from "@/content/site"
import { cn } from "cn"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md"
          : "border-transparent bg-background/50 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#top" className="font-serif text-xl tracking-tight text-foreground">
          {site.monogram}
          <span className="sr-only">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden h-10 rounded-full px-4 md:inline-flex">
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-11 md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            <Menu />
          </Button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="top-0 left-0 flex h-dvh max-h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col rounded-none p-6 sm:max-w-none">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{site.monogram}</DialogTitle>
            <DialogDescription>Jump to a section of the page.</DialogDescription>
          </DialogHeader>
          <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 font-serif text-3xl tracking-tight"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button asChild className="mt-auto h-12 rounded-full">
            <a href="#contact" onClick={() => setOpen(false)}>
              Let&apos;s Talk
            </a>
          </Button>
        </DialogContent>
      </Dialog>
    </header>
  )
}
