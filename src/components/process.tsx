import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { processSteps } from "@/content/services"

export function Process() {
  return (
    <section id="process" className="border-y border-border">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Process" title="From idea to launch." id="process-heading" />
        </Reveal>
        <div className="relative mt-12 grid gap-4 md:grid-cols-4">
          <div
            className="pointer-events-none absolute top-8 right-8 left-8 hidden h-px bg-border md:block"
            aria-hidden
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="relative h-full rounded-3xl border border-border bg-background p-5">
                <span className="relative z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card font-serif text-sm">
                  {step.number}
                </span>
                <h3 className="mt-6 font-medium">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
