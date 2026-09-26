import React from "react"
import { ArrowUpRight, Play } from "lucide-react"

export default function Hero() {
  return (
    <section id="hero" className="relative w-full px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div className="relative max-w-[1240px] mx-auto">
        <div className="card p-8 sm:p-10">
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-4">
            Trader | Builder | Creator
          </p>
          <h2 className="display text-4xl sm:text-6xl text-bone-0">
            Patrick <span className="display-italic text-amber-accent">Sebastine.</span>
          </h2>
          <p className="mt-4 max-w-xl text-bone-1 text-lg leading-relaxed">
            Free crypto risk rules + AI tools I actually use. Portfolio, skills, and dashboards below.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/watch?v=aYyUrvp7qTo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-accent text-ink-0 font-medium hover:bg-amber-soft transition"
            >
              <Play size={16} fill="currentColor" />
              Free Lesson 1
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#free"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line-bright text-bone-0 hover:bg-ink-2 transition"
            >
              Risk rules
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line text-bone-1 hover:bg-ink-2 transition"
            >
              See the work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
