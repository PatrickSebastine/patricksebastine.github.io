import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative w-full px-4 sm:px-6 lg:px-8 py-20 border-t border-line"
    >
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          className="card p-8 sm:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-4">
            Free next step
          </p>
          <h2 className="display text-4xl sm:text-5xl lg:text-6xl text-bone-0 leading-[0.95]">
            Start with Lesson 1.
            <br />
            <span className="display-italic text-amber-accent">Stay for the risk rules.</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-bone-1 text-lg leading-relaxed">
            Free crypto education and AI tools I actually use. No paid signals.
            Educational content only — not financial advice.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a
              href="https://www.youtube.com/watch?v=aYyUrvp7qTo"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-amber-accent text-ink-0 font-medium hover:bg-amber-soft transition"
            >
              Watch Lesson 1 free
              <ArrowUpRight
                size={16}
                className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
              />
            </a>
            <a
              href="https://www.youtube.com/@LynxCryptoScope"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-line-bright text-bone-0 hover:bg-ink-2 transition"
            >
              Subscribe on Lynx
            </a>
            <a
              href="#free"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-line text-bone-1 hover:text-bone-0 hover:bg-ink-2 transition"
            >
              Back to free hub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
