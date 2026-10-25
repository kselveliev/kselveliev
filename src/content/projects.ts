/**
 * Portfolio entries. Replace a placeholder by editing the object in place.
 * Set `placeholder` to false, add a real description, and point `image`
 * at a file in `public/` (for example `/projects/my-site.webp`).
 * Use `null` for a link you do not have. Do not point links at fake URLs.
 */
export type Project = {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  image: string | null
  liveUrl: string | null
  githubUrl: string | null
  featured: boolean
  placeholder: boolean
  overview: string
  purpose: string
  challenge: string
  contribution: string
  implementation: string
  features: string[]
}

export const projects: Project[] = [
  {
    id: "star-athletics",
    title: "Star Athletics",
    description:
      "A private training house in a converted tram hall in Lozenets. The site introduces the floor, the programs, and how to visit.",
    category: "Business website",
    technologies: ["Next.js", "Vercel"],
    image: "/projects/star-athletics.jpg",
    liveUrl: "https://www.starathletics.xyz/en",
    githubUrl: null,
    featured: true,
    placeholder: false,
    overview:
      "The live homepage for Star Athletics, at Depot 7 on Zvezda Lane in Sofia. It opens on the training floor and states the house rules: capped classes, coached work, and a quiet room. The page marks its member quotes as written for demonstration, so they are not listed here as results.",
    purpose:
      "Give someone enough of the room, the week, and the programs to decide whether to come in for a tour.",
    challenge:
      "The page has to read as a serious training house, in both English and Bulgarian, without turning into a generic gym brochure.",
    contribution:
      "Published as a live website at starathletics.xyz. The page does not link a public code repository, so this note stays with what a visitor can see.",
    implementation:
      "A prerendered Next.js site, hosted on Vercel. English is served at /en, with a switch to Bulgarian.",
    features: [
      "Homepage with the house address, weekday hours, and this week's class count",
      "Six programs: Iron Atelier, Engine Room, Fight Floor, Long Game, Reset, and Private Hour",
      "A sample day on the floor, the coaching leads, and three memberships",
      "A visit section for a forty-minute tour at Depot 7",
      "English and Bulgarian",
    ],
  },
  {
    id: "personal-profile",
    title: "kselveliev.com",
    description:
      "A quiet personal profile: a photograph, a short introduction, and links to the places I actually show up.",
    category: "Personal site",
    technologies: ["React", "Vite", "Tailwind CSS"],
    image: null,
    liveUrl: "https://www.kselveliev.com",
    githubUrl: null,
    featured: false,
    placeholder: false,
    overview:
      "The site that is live today is a single centered profile card. It introduces me and links to GitHub, LinkedIn, X, and Instagram.",
    purpose: "Give people a simple, fast place to see who I am and where to find me.",
    challenge:
      "The page does one job well, and it does not leave room to show work or explain how someone can hire me.",
    contribution: "I designed the page, built it, and published it at kselveliev.com.",
    implementation:
      "A Vite and React single-page app styled with Tailwind CSS, hosted on Vercel, with Plausible for privacy-friendly analytics.",
    features: [
      "Profile photograph and short biography",
      "Links to GitHub, LinkedIn, X, and Instagram",
      "Published at kselveliev.com",
    ],
  },
  {
    id: "tracklog",
    title: "TrackLog",
    description:
      "A training diary for an athletics team. Athletes log sessions from the phone, and a coach is the one who gives out accounts.",
    category: "Team dashboard",
    technologies: ["Next.js", "Vercel"],
    image: "/projects/training-diary.jpg",
    liveUrl: "https://trainingdiary.dev/",
    githubUrl: null,
    featured: false,
    placeholder: false,
    overview:
      "The public page for TrackLog, at trainingdiary.dev. The page is in Bulgarian, under the line “Athlete Performance Dashboard.” It introduces a phone-first training diary: add sessions, follow form, and see how the whole team is training.",
    purpose: "Tell an athlete what the diary is for, and point them to sign in.",
    challenge:
      "The page has to be clear on a phone, in Bulgarian, and it has to say that there is no public sign-up.",
    contribution:
      "Published as a live website at trainingdiary.dev. The page does not link a public code repository, so this note stays with what a visitor can see.",
    implementation:
      "A prerendered Next.js site, hosted on Vercel. The public page is in Bulgarian, and sign-in is at /login.",
    features: [
      "Sign in from the page. Public registration is off, and an account comes from the coach",
      "Workouts for sprints, the gym, recovery, and competitions",
      "A team feed of teammates' sessions",
      "Weekly volume, intensity, and progress in one place",
      "Personal records by event, with a date and a place",
    ],
  },
]
