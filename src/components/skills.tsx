import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skillGroups } from "@/content/skills"

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Stack" title="Tools of the trade." id="skills-heading" />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.06}>
            <div className="h-full rounded-3xl border border-border bg-card p-6">
              <h3 className="font-serif text-2xl tracking-tight">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-signal" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
