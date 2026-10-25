import { site, socials } from "@/content/site"

const year = new Date().getFullYear()

export function SiteFooter() {

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-serif text-2xl tracking-tight">{site.monogram}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            © {year} {site.name}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">{site.footerNote}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
      </div>
    </footer>
  )
}
