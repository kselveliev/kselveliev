import type { ReactNode } from "react"

export function SectionHeading({
  eyebrow,
  title,
  children,
  id,
}: {
  eyebrow: string
  title: string
  children?: ReactNode
  id?: string
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-[0.72rem] font-medium tracking-[0.22em] text-signal uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="display text-[clamp(2.05rem,4.2vw,3.5rem)] text-balance">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  )
}
