import { Button } from "@/components/ui/button"
import { site } from "@/content/site"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="orb pointer-events-none absolute -top-24 right-[-10%] h-80 w-80 rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--signal)_32%,transparent),transparent_70%)] blur-2xl"
        aria-hidden
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pt-12 pb-16 md:px-8 md:pt-16 md:pb-24 lg:grid-cols-[1.15fr_0.85fr] lg:pt-20">
        <div>
          <p className="inline-flex items-center rounded-full border border-border bg-card/80 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            {site.hero.badge}
          </p>
          <h1 className="display mt-6 max-w-3xl text-[clamp(2.45rem,6.2vw,5.15rem)] text-balance">
            {site.hero.headlineLead}
            <em className="text-primary not-italic md:italic">{site.hero.headlineEmphasis}</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {site.hero.support}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full px-6 text-base">
              <a href="#work">{site.hero.primaryCta}</a>
            </Button>
            <Button asChild variant="outline" className="h-12 rounded-full px-6 text-base">
              <a href="#contact">{site.hero.secondaryCta}</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="pointer-events-none absolute inset-4 translate-x-3 translate-y-3 rounded-[1.7rem] border border-foreground/15"
            aria-hidden
          />
          <figure className="relative overflow-hidden rounded-[1.7rem] border border-border bg-card shadow-[0_28px_70px_-36px_color-mix(in_oklch,var(--foreground)_60%,transparent)]">
            <img
              src={site.portrait}
              alt="Portrait of Kristiyan Selveliev"
              width={414}
              height={311}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="flex items-center justify-between gap-3 border-t border-border px-4 py-3 text-xs tracking-wide text-muted-foreground">
              <span>{site.name}</span>
              <span className="font-serif text-sm text-foreground italic">{site.monogram}</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
