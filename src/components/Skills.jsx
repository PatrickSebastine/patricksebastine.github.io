import React from "react"
import { motion } from "framer-motion"

const STACK = [
  "Python",
  "SQL",
  "React",
  "TypeScript",
  "Tableau",
  "Power BI",
  "pandas",
  "NumPy",
  "FastAPI",
  "Node",
  "Binance API",
  "WebSockets",
  "Docker",
  "BigQuery",
  "Supabase",
  "Framer Motion",
  "FFmpeg",
  "OpenAI",
]

const DISCIPLINES = [
  {
    kicker: "Markets",
    title: "Trading & research",
    body: "Systematic crypto strategies — technical analysis, on-chain flow, risk-first position sizing, relentless backtesting.",
    items: ["Strategy design", "Backtesting", "Risk management", "On-chain analysis"],
  },
  {
    kicker: "Data",
    title: "Analytics & engineering",
    body: "Turn raw feeds and chain data into dashboards and decisions. SQL, Python, and visualisation craft.",
    items: ["Pipelines", "Dashboards", "Python / SQL", "Model validation"],
  },
  {
    kicker: "Media",
    title: "Content & distribution",
    body: "A script that becomes a YouTube breakdown, three Shorts, an X thread, and a TikTok — all on-brand.",
    items: ["Video production", "Multi-platform", "Community", "Copywriting"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative w-full px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 border-b border-line pb-6"
        >
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-4">
            § 01 — Disciplines
          </p>
          <h2 className="display text-5xl sm:text-6xl text-bone-0 max-w-3xl">
            Three crafts,{" "}
            <span className="display-italic text-amber-accent">one operator</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DISCIPLINES.map((d, i) => (
            <motion.div
              key={d.title}
              className="card p-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
                  0{i + 1} / {d.kicker}
                </span>
                <span className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
                  —
                </span>
              </div>

              <h3 className="display text-3xl text-bone-0 leading-tight">
                {d.title}
              </h3>
              <p className="text-bone-1 leading-relaxed">{d.body}</p>

              <ul className="mt-auto grid grid-cols-2 gap-y-2 gap-x-3 pt-4 border-t border-line">
                {d.items.map((x) => (
                  <li
                    key={x}
                    className="mono text-[11px] tracking-wider uppercase text-bone-2 flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-amber-accent" />
                    {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-20">
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-6 text-center">
            Tools of the trade
          </p>
          <div className="relative overflow-hidden mask-marquee">
            <div className="flex gap-3 w-max animate-marquee">
              {[...STACK, ...STACK].map((t, i) => (
                <span
                  key={i}
                  className="mono text-xs tracking-wider uppercase px-4 py-2.5 rounded-full border border-line text-bone-1 whitespace-nowrap"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-ink-0 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-ink-0 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
