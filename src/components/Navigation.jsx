import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const LINKS = [
  { href: "#free", label: "Free" },
  { href: "#hero", label: "Home" },
  { href: "#skills", label: "Disciplines" },
  { href: "#projects", label: "Work" },
  { href: "#dashboards", label: "Dashboards" },
  { href: "#contact", label: "Contact" },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <div
        className={`flex items-center gap-1 rounded-full border backdrop-blur-xl transition-all ${
          scrolled
            ? "bg-ink-1/80 border-line-bright"
            : "bg-ink-1/50 border-line"
        }`}
      >
        <a
          href="#free"
          className="pl-5 pr-2 py-2 flex items-center gap-2 group"
          aria-label="Patrick Sebastine"
        >
          <span className="h-2 w-2 rounded-full bg-amber-accent" />
          <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-0">
            P.S.
          </span>
        </a>
        <div className="hidden sm:flex items-center">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-2 text-sm text-bone-1 hover:text-bone-0 transition"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://www.youtube.com/watch?v=aYyUrvp7qTo"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 mr-1 px-4 py-1.5 rounded-full bg-amber-accent text-ink-0 text-sm font-medium hover:bg-amber-soft transition"
        >
          Lesson 1
        </a>
      </div>
    </motion.nav>
  )
}
