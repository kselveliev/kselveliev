import { useState } from "react"
import type { FormEvent } from "react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { site, socials } from "@/content/site"

export function Contact() {
  const [error, setError] = useState<string | null>(null)
  const [opened, setOpened] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (!name || !email || !message) {
      setOpened(false)
      setError("Add your name, email, and a short note about the project.")
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setOpened(false)
      setError("That email address does not look complete.")
      return
    }

    const subject = encodeURIComponent(`Project inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    setError(null)
    setOpened(true)
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading eyebrow="Contact" title={site.contact.heading} id="contact-heading">
            {site.contact.support}
          </SectionHeading>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex font-serif text-2xl tracking-tight text-primary underline-offset-4 hover:underline md:text-3xl"
          >
            {site.email}
          </a>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {socials.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-3xl border border-border bg-card p-5 md:p-7"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm" htmlFor="contact-name">
                Name
                <Input id="contact-name" name="name" autoComplete="name" className="h-11 px-3" required />
              </label>
              <label className="grid gap-2 text-sm" htmlFor="contact-email">
                Email
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="h-11 px-3"
                  required
                />
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm" htmlFor="contact-message">
              Project
              <Textarea
                id="contact-message"
                name="message"
                required
                className="min-h-32 px-3 py-3"
                placeholder="What should the website do, and when do you need it?"
              />
            </label>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              This does not send the message to a server. It opens your email app with a draft
              addressed to me.
            </p>
            {error ? (
              <p role="alert" className="mt-3 text-sm text-destructive">
                {error}
              </p>
            ) : null}
            {opened ? (
              <p role="status" className="mt-3 text-sm text-foreground">
                Your email app should open with the draft. If it does not, write to {site.email}{" "}
                directly.
              </p>
            ) : null}
            <Button type="submit" className="mt-5 h-12 rounded-full px-6">
              Open email draft
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
