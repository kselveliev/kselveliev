/**
 * Personal details, navigation, and contact.
 * Edit this file to change copy, the email address, and social links.
 *
 * The email below is the address published on the public GitHub commit
 * for github.com/kselveliev/kselveliev. Replace it if you want a different inbox.
 */
export const site = {
  name: "Kristiyan Selveliev",
  shortName: "Kristiyan",
  monogram: "KS.",
  role: "Senior Software Developer",
  email: "kselveliev@gmail.com",
  url: "https://www.kselveliev.com",
  portrait: "/me.png",
  biography:
    "Senior software developer and open-source advocate. When I'm not coding or contributing to open source, you'll find me sprinting on the track as a semi-pro athlete.",
  about:
    "I spend most of my time building software, contributing to open source, and exploring ways to create better digital products. When I'm not behind a keyboard, you'll probably find me on the track chasing a faster sprint time.",
  hero: {
    badge: "Senior Software Developer",
    headlineLead: "Building digital experiences that look great and ",
    headlineEmphasis: "work even better.",
    support:
      "I'm Kristiyan, a senior software developer passionate about turning ideas into fast, modern, and thoughtfully crafted digital experiences.",
    primaryCta: "Explore My Work",
    secondaryCta: "Let's Build Something",
  },
  contact: {
    heading: "Let's build something great together.",
    support:
      "Have a project in mind or need a website for your business? I'd love to hear about it.",
  },
  footerNote: "Built with care by Kristiyan Selveliev",
} as const

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const

export const socials = [
  { label: "GitHub", href: "https://github.com/kselveliev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kristiyan-s-615b79182/" },
  { label: "X", href: "https://x.com/KristiyanS79184" },
  { label: "Instagram", href: "https://www.instagram.com/kristiyan_selveliev/?hl=en" },
] as const

export const aboutCards = [
  {
    title: "Software Engineering",
    copy: "I build software that is clear to use and straightforward to keep working on.",
  },
  {
    title: "Open Source",
    copy: "I contribute to open source and care about work other people can read, run, and extend.",
  },
  {
    title: "Athletics",
    copy: "When I leave the keyboard, I sprint. The track is a good place to practice patience.",
  },
] as const
