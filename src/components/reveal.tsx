import { motion, useReducedMotion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

function isInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const reduced =
    useReducedMotion() === true ||
    (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const element = ref.current
    if (!element) return

    const show = () => setShown(true)
    if (isInView(element)) show()

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) show()
      },
      { threshold: 0.12 },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [reduced])

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
