import { About } from "@/components/about"
import { BackToTop } from "@/components/back-to-top"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Process } from "@/components/process"
import { Services } from "@/components/services"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Skills } from "@/components/skills"
import { ThemeProvider } from "@/components/theme-provider"
import { Work } from "@/components/work"

export default function App() {
  return (
    <ThemeProvider>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="content">
        <div id="top">
          <Hero />
        </div>
        <About />
        <Work />
        <Services />
        <Process />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
      <BackToTop />
    </ThemeProvider>
  )
}
