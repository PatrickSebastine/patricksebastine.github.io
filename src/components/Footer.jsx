import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const SOCIALS = [
  { label: "Free Lesson 1", href: "https://www.youtube.com/watch?v=aYyUrvp7qTo" },
  { label: "GitHub", href: "https://github.com/PatrickSebastine" },
  { label: "X", href: "https://x.com/iamreddsebasti" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/patrickugheokesebastine/" },
  { label: "LynxCryptoScope", href: "https://www.youtube.com/@LynxCryptoScope" },
  { label: "iamreddsebastine", href: "https://www.youtube.com/@iamreddsebastine" },
  { label: "Kaggle", href: "https://www.kaggle.com/patricksebastine" },
  { label: "Tableau Public", href: "https://public.tableau.com/app/profile/patrick.ugheoke.sebastine/vizzes" },
  { label: "NovyPro", href: "https://www.novypro.com/profile_projects/patricksebastine" },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full px-4 sm:px-6 lg:px-8 pt-28 pb-10 border-t border-line"
    >
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-6">
            § 04 — Contact
          </p>
          <h2 className="display text-6xl sm:text-7xl lg:text-[104px] text-bone-0 leading-[0.95]">
            Free lessons.
            <br />
            <span className="display-italic text-amber-accent">
              Real risk rules.
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:patrick.sebastine@lynxnetgroup.com"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-accent text-ink-0 font-medium hover:bg-amber-soft transition"
            >
              patrick.sebastine@lynxnetgroup.com
              <ArrowUpRight
                size={16}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
              />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-12 border-b border-line">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between px-4 py-3 rounded-xl border border-line hover:border-line-bright hover:bg-ink-2 transition"
            >
              <span className="text-sm text-bone-0 truncate pr-2">{s.label}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 text-bone-3 group-hover:text-amber-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
              />
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-3 mono text-[11px] tracking-[0.18em] uppercase text-bone-3">
          <p>© 2026 Patrick Sebastine</p>
          <p>Pretoria · ZA · Available worldwide</p>
        </div>
      </div>
    </footer>
  )
}
