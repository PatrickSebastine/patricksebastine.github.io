import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Star, GitBranch } from "lucide-react"

// Canonical project list — curated from real GitHub repos.
const PROJECTS = [
  {
    repo: "PatrickSebastine/polymarket-flash-crash-bot",
    title: "Polymarket Flash-Crash Bot",
    blurb:
      "Event-driven trading bot for Polymarket — detects flash crashes in prediction-market odds and fires contrarian entries with risk-bounded sizing.",
    tags: ["Python", "Polymarket", "Event-driven"],
    year: "2026",
    featured: true,
  },
  {
    repo: "PatrickSebastine/mean-reversion-trading-bot",
    title: "Mean-Reversion Trading Bot",
    blurb:
      "Statistical mean-reversion engine for crypto pairs — z-score entries, adaptive stops, full backtesting harness across 5-min to 1-hour frames.",
    tags: ["Python", "Stats", "Backtesting"],
    year: "2025",
  },
  {
    repo: "PatrickSebastine/ema-momentum-bot",
    title: "EMA Momentum Bot",
    blurb:
      "Multi-timeframe EMA crossover bot on Binance — confirmation filters, volatility-scaled positions, Telegram alerts for every trigger.",
    tags: ["Python", "Binance API", "Momentum"],
    year: "2025",
  },
]

function useRepoStats(repos) {
  const [stats, setStats] = useState({})

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const entries = await Promise.all(
        repos.map(async (r) => {
          try {
            const res = await fetch(`https://api.github.com/repos/${r}`)
            if (!res.ok) return [r, null]
            const data = await res.json()
            return [
              r,
              {
                stars: data.stargazers_count ?? 0,
                forks: data.forks_count ?? 0,
                language: data.language,
                description: data.description,
                html_url: data.html_url,
              },
            ]
          } catch {
            return [r, null]
          }
        }),
      )
      if (!cancelled) {
        setStats(Object.fromEntries(entries))
      }
    })()
    return () => {
      cancelled = true
    }
  }, [repos.join("|")]) // eslint-disable-line

  return stats
}

function ProjectCard({ p, stats, i }) {
  const data = p.repo ? stats[p.repo] : null
  const href = data?.html_url ?? p.href ?? "#"
  const stars = data?.stars ?? null
  const forks = data?.forks ?? null

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className={`card group relative p-7 flex flex-col gap-5 ${
        p.featured ? "md:col-span-2" : ""
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
            {p.year}
          </span>
          {p.featured && (
            <span className="mono text-[10px] tracking-[0.22em] uppercase px-2 py-0.5 rounded-full bg-amber-accent/12 text-amber-accent border border-amber-accent/30">
              Featured
            </span>
          )}
          {p.repo && (
            <span className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
              github
            </span>
          )}
        </div>
        <ArrowUpRight
          size={18}
          className="text-bone-3 group-hover:text-amber-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
        />
      </div>

      <div>
        <h3 className="display text-3xl sm:text-4xl text-bone-0 leading-tight">
          {p.title}
        </h3>
        <p className="mt-3 text-bone-1 leading-relaxed max-w-prose">{p.blurb}</p>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-md border border-line text-bone-2"
            >
              {t}
            </span>
          ))}
        </div>
        {p.repo && (
          <div className="flex items-center gap-4 text-bone-3">
            <span className="mono text-xs flex items-center gap-1.5">
              <Star size={12} /> {stars ?? "—"}
            </span>
            <span className="mono text-xs flex items-center gap-1.5">
              <GitBranch size={12} /> {forks ?? "—"}
            </span>
          </div>
        )}
      </div>
    </motion.a>
  )
}

export default function Projects() {
  const realRepos = PROJECTS.filter((p) => p.repo).map((p) => p.repo)
  const stats = useRepoStats(realRepos)

  return (
    <section id="projects" className="relative w-full px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-6 mb-14 border-b border-line pb-6"
        >
          <div>
            <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-4">
              § 02 — Selected work
            </p>
            <h2 className="display text-5xl sm:text-6xl text-bone-0">
              Things I've <span className="display-italic text-amber-accent">shipped</span>.
            </h2>
          </div>
          <a
            href="https://github.com/PatrickSebastine"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-sm text-bone-1 hover:text-bone-0 transition mono"
          >
            View all on GitHub <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} stats={stats} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
