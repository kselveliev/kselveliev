import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { projects, type Project } from "@/content/projects"
import { site } from "@/content/site"
import { cn } from "cn"

export function Work() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="work" className="border-y border-border bg-card/40">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Work" title="Selected Work" id="work-heading">
            A selection of projects I&apos;ve built, designed, and brought to life.
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.06}
              className={project.featured ? "lg:col-span-2" : undefined}
            >
              <article
                className={cn(
                  "h-full overflow-hidden rounded-3xl border bg-card transition-colors",
                  project.placeholder
                    ? "border-dashed border-border"
                    : "border-border hover:border-foreground/25",
                  project.featured && "lg:grid lg:grid-cols-[1.15fr_0.85fr]",
                )}
              >
                <ProjectVisual project={project} />
                <div className="flex flex-col p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border px-2.5 py-1 text-[0.7rem] tracking-wide text-muted-foreground uppercase">
                      {project.category}
                    </span>
                    {project.placeholder ? (
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] tracking-wide text-secondary-foreground uppercase">
                        Placeholder
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-4 font-serif text-3xl tracking-tight">{project.title}</h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
                    {project.description}
                  </p>
                  {project.technologies.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button
                      type="button"
                      variant={project.placeholder ? "outline" : "default"}
                      className="h-10 rounded-full px-4"
                      onClick={() => setActive(project)}
                    >
                      {project.placeholder ? "About this slot" : "View details"}
                    </Button>
                    {project.liveUrl ? (
                      <Button asChild variant="outline" className="h-10 rounded-full px-4">
                        <a href={project.liveUrl} target="_blank" rel="noreferrer">
                          Live site
                          <ArrowUpRight />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </Button>
                    ) : null}
                    {project.githubUrl ? (
                      <Button asChild variant="outline" className="h-10 rounded-full px-4">
                        <a href={project.githubUrl} target="_blank" rel="noreferrer">
                          GitHub
                          <ArrowUpRight />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[min(88dvh,760px)] overflow-y-auto sm:max-w-2xl">
          {active ? <ProjectDetail project={active} /> : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`${project.title} homepage`}
        loading="lazy"
        className={cn(
          "w-full object-cover object-top",
          project.featured
            ? "aspect-[16/10] lg:aspect-auto lg:h-full lg:object-center"
            : "aspect-[4/5]",
        )}
      />
    )
  }

  if (!project.placeholder) {
    return (
      <div className="flex min-h-64 items-center justify-center bg-[color-mix(in_oklch,var(--secondary)_70%,transparent)] p-8">
        <div className="w-full max-w-xs rounded-2xl bg-white p-6 text-center text-neutral-900 shadow-lg">
          <img
            src={site.portrait}
            alt=""
            className="mx-auto size-24 rounded-full object-cover"
          />
          <p className="mt-4 text-lg font-semibold">{site.name}</p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-600">{site.biography}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-52 items-center justify-center bg-secondary/50 p-8 text-center">
      <p className="max-w-xs text-sm text-muted-foreground">
        No screenshot yet. Add an image path on this project in the content file.
      </p>
    </div>
  )
}

function ProjectDetail({ project }: { project: Project }) {
  const blocks = [
    ["Overview", project.overview],
    ["Purpose", project.purpose],
    ["The constraint", project.challenge],
    ["What I did", project.contribution],
    ["How it is built", project.implementation],
  ] as const

  return (
    <>
      <DialogHeader>
        <DialogTitle className="font-serif text-2xl tracking-tight">{project.title}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
      </DialogHeader>
      {project.placeholder ? (
        <p className="rounded-xl bg-secondary px-3 py-2 text-sm text-secondary-foreground">
          This entry is a placeholder, not a client project. Replace it in{" "}
          <code className="font-mono text-xs">src/content/projects.ts</code>.
        </p>
      ) : null}
      {project.image ? (
        <img
          src={project.image}
          alt={`${project.title} homepage`}
          className="max-h-64 w-full rounded-xl object-cover object-top"
        />
      ) : null}
      <dl className="grid gap-4">
        {blocks.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[0.7rem] font-medium tracking-[0.16em] text-signal uppercase">
              {label}
            </dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground">{value}</dd>
          </div>
        ))}
      </dl>
      {project.features.length > 0 ? (
        <div>
          <h3 className="text-[0.7rem] font-medium tracking-[0.16em] text-signal uppercase">
            Features
          </h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {project.liveUrl ? (
          <Button asChild className="h-10 rounded-full px-4">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              Visit the live site
              <ArrowUpRight />
            </a>
          </Button>
        ) : null}
        {project.githubUrl ? (
          <Button asChild variant="outline" className="h-10 rounded-full px-4">
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              View the code
              <ArrowUpRight />
            </a>
          </Button>
        ) : (
          <p className="text-sm text-muted-foreground">No public code link is listed for this entry.</p>
        )}
      </div>
    </>
  )
}
