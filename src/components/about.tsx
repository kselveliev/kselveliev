import { Code2, GitPullRequest, Timer } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { aboutCards, site } from "@/content/site"

const icons = [Code2, GitPullRequest, Timer] as const

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <SectionHeading eyebrow="Profile" title="A little about me." id="about-heading" />
          <blockquote className="mt-8 border-l-2 border-signal pl-5 font-serif text-xl leading-snug text-foreground md:text-2xl">
            {site.biography}
          </blockquote>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.about}
          </p>
        </Reveal>

        <div className="grid gap-3">
          {aboutCards.map((card, index) => {
            const Icon = icons[index] ?? Code2
            return (
              <Reveal key={card.title} delay={index * 0.08}>
                <article className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-medium">{card.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {card.copy}
                    </span>
                  </span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
