import { Blocks, LayoutTemplate, RefreshCw, Store } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { services } from "@/content/services"

const icons = [Store, LayoutTemplate, Blocks, RefreshCw] as const

export function Services() {
  return (
    <section id="services" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Services" title="Have an idea? Let's bring it to life." id="services-heading">
          I help individuals, startups, and businesses turn ideas into modern, professional
          digital experiences.
        </SectionHeading>
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Blocks
          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-colors hover:border-foreground/25">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="font-serif text-sm text-muted-foreground">{service.number}</span>
                </div>
                <h3 className="mt-8 font-serif text-2xl tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {service.description}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
