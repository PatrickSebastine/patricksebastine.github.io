import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Play, Shield } from "lucide-react"

const LINKS = [
  {
    label: "Watch Lesson 1",
    href: "https://www.youtube.com/watch?v=aYyUrvp7qTo",
    primary: true,
  },
  {
    label: "Lynx YouTube",
    href: "https://www.youtube.com/@LynxCryptoScope",
  },
  {
    label: "X",
    href: "https://x.com/iamreddsebasti",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/patrickugheokesebastine",
  },
  {
    label: "Kids Learning",
    href: "https://www.youtube.com/@iamreddsebastine",
  },
]

const RISK_RULES = [
  "Never risk more than you can lose without changing your life — size every trade before you enter.",
  "Write the invalidation level first; if price hits it, exit — no averaging into hope.",
  "Separate learning capital from living money; treat practice like tuition, not income.",
  "One thesis per trade: entry, stop, target, and why — if you can’t say it in one sentence, skip.",
  "Track outcomes weekly (wins, losses, rule breaks). Improve the process, not the prediction.",
]

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.05 + i * 0.05, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function FreeHub() {
  return (
    <section
      id="free"
      className="relative w-full px-4 sm:px-6 lg:px-8 pt-28 pb-6 overflow-hidden"
      aria-labelledby="free-hub-heading"
    >
      <div className="aurora" aria-hidden />

      <div className="relative max-w-[1240px] mx-auto">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
          className="card p-6 sm:p-8 lg:p-10 border-amber-accent/30"
        >
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-amber-accent">
              Free hub
            </span>
            <span className="text-bone-3">·</span>
            <span className="mono text-[11px] tracking-[0.18em] uppercase text-bone-2">
              Educational · not financial advice
            </span>
          </div>

          <h1
            id="free-hub-heading"
            className="display text-4xl sm:text-5xl lg:text-6xl text-bone-0 leading-[0.95]"
          >
            Patrick{" "}
            <span className="display-italic text-amber-accent">| Crypto + AI</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-bone-1 leading-relaxed">
            Free crypto risk rules + AI tools I actually use — clear lessons, no hype.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  l.primary
                    ? "group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-accent text-ink-0 font-medium hover:bg-amber-soft transition"
                    : "inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-line-bright text-bone-0 hover:bg-ink-2 transition text-sm"
                }
              >
                {l.primary ? <Play size={16} fill="currentColor" /> : null}
                {l.label}
                <ArrowUpRight
                  size={14}
                  className="opacity-70 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
                />
              </a>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <Shield size={16} className="text-amber-accent" />
                <h2 className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
                  Risk rules (practical)
                </h2>
              </div>
              <ol className="space-y-3">
                {RISK_RULES.map((rule, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-bone-1 text-sm sm:text-base leading-relaxed"
                  >
                    <span className="mono text-amber-accent shrink-0 w-6">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-5 mono text-[10px] tracking-[0.16em] uppercase text-bone-3">
                For education only. Not financial, investment, or trading advice.
                Do your own research.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                href="https://www.youtube.com/watch?v=aYyUrvp7qTo"
                target="_blank"
                rel="noopener noreferrer"
                className="card group p-5 flex-1 hover:border-amber-accent/40"
              >
                <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-2">
                  Start here
                </p>
                <p className="text-bone-0 font-medium leading-snug">
                  Lynx Lesson 1 — Intro to Cryptocurrency
                </p>
                <p className="mt-3 mono text-[10px] tracking-[0.18em] uppercase text-amber-accent group-hover:underline">
                  Watch free on YouTube →
                </p>
              </a>
              <div className="card p-5">
                <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-2">
                  Also building
                </p>
                <p className="text-bone-1 text-sm leading-relaxed">
                  Portfolio, dashboards, and projects below — same dark editorial
                  system. Scroll for Skills, Work, and Dashboards.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
