import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  MapPin,
  Clock,
  Sparkles,
  TrendingUp,
  TrendingDown,
  Play,
} from "lucide-react"

const BrandIcon = ({ d, size = 16, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    className={className}
    aria-hidden
  >
    <path d={d} />
  </svg>
)
const ICON = {
  github:
    "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.19.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.79.11 3.08.74.81 1.19 1.85 1.19 3.11 0 4.44-2.7 5.41-5.27 5.7.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z",
  x: "M18.244 2H21.5l-7.5 8.57L22.5 22h-6.82l-4.81-6.49L5.4 22H2.15l8.02-9.17L1.5 2h6.98l4.34 5.93L18.244 2Zm-1.19 18h1.82L7.05 4H5.14l11.914 16Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-.96 1.83-1.98 3.77-1.98 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.37c0-1.28-.02-2.92-1.78-2.92-1.78 0-2.05 1.38-2.05 2.83V21h-4V9Z",
  youtube:
    "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.6 12 3.6 12 3.6s-7.4 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.2 0 12 0 12s0 3.8.5 5.8a3 3 0 0 0 2.1 2.1c2 .5 9.4.5 9.4.5s7.4 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.8 24 12 24 12s0-3.8-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z",
}

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const TAGLINE_WORDS = [
  "Crypto Trader.",
  "Data Analyst.",
  "Content Creator.",
  "AI Builder.",
]

function useTypewriter(words, typeMs = 55, holdMs = 1400, eraseMs = 30) {
  const [text, setText] = useState("")
  const [wordIdx, setWordIdx] = useState(0)
  const [phase, setPhase] = useState("type") // type | hold | erase

  useEffect(() => {
    const word = words[wordIdx]
    let t
    if (phase === "type") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typeMs)
      } else {
        t = setTimeout(() => setPhase("erase"), holdMs)
      }
    } else if (phase === "erase") {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), eraseMs)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setPhase("type")
      }
    }
    return () => clearTimeout(t)
  }, [text, phase, wordIdx, words, typeMs, holdMs, eraseMs])

  return text
}

function useLocalTime(tz = "Africa/Johannesburg") {
  const [time, setTime] = useState(() => new Date())
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return time.toLocaleTimeString("en-GB", {
    timeZone: tz,
    hour: "2-digit",
    minute: "2-digit",
  })
}

const BINANCE_SYMBOLS = [
  { symbol: "BTCUSDT", label: "BTC / USD" },
  { symbol: "ETHUSDT", label: "ETH / USD" },
  { symbol: "SOLUSDT", label: "SOL / USD" },
]

function useBinanceTicker() {
  const [rows, setRows] = useState(
    BINANCE_SYMBOLS.map((s) => ({ ...s, price: null, change: 0 })),
  )

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const symbols = BINANCE_SYMBOLS.map((s) => s.symbol)
        const url = `https://api.binance.com/api/v3/ticker/24hr?symbols=${encodeURIComponent(
          JSON.stringify(symbols),
        )}`
        const r = await fetch(url)
        const data = await r.json()
        if (cancelled) return
        const byS = Object.fromEntries(data.map((d) => [d.symbol, d]))
        setRows(
          BINANCE_SYMBOLS.map((s) => ({
            ...s,
            price: parseFloat(byS[s.symbol]?.lastPrice ?? 0),
            change: parseFloat(byS[s.symbol]?.priceChangePercent ?? 0),
          })),
        )
      } catch (e) {
        // silent; keep last known
      }
    }
    load()
    const id = setInterval(load, 15000)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return rows
}

function TickerRow({ label, price, change }) {
  const up = change >= 0
  const display =
    price == null ? "…" : price >= 100 ? price.toLocaleString(undefined, { maximumFractionDigits: 0 }) : price.toFixed(2)
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-line last:border-0">
      <span className="mono text-[11px] tracking-widest text-bone-2">{label}</span>
      <div className="flex items-center gap-3">
        <span className="mono text-sm text-bone-0">${display}</span>
        <span
          className={`mono text-xs flex items-center gap-1 ${up ? "text-signal-up" : "text-signal-down"}`}
        >
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {up ? "+" : ""}
          {price == null ? "—" : change.toFixed(2) + "%"}
        </span>
      </div>
    </div>
  )
}

export default function Hero() {
  const time = useLocalTime()
  const tagline = useTypewriter(TAGLINE_WORDS)
  const ticker = useBinanceTicker()

  return (
    <section
      id="hero"
      className="relative w-full px-4 sm:px-6 lg:px-8 pt-28 pb-16 overflow-hidden"
    >
      <div className="aurora" aria-hidden />

      <div className="relative max-w-[1240px] mx-auto">
        {/* Tiny status chip */}
        <motion.div
          className="flex items-center gap-2 mb-8"
          variants={fade}
          initial="hidden"
          animate="show"
          custom={0}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-signal-up opacity-60 live-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-up" />
          </span>
          <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
            Available for collaborations · Apr 2026
          </span>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 auto-rows-[minmax(120px,auto)] gap-4 sm:gap-5">
          {/* BIG HERO CARD */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="card col-span-12 lg:col-span-8 row-span-2 p-8 sm:p-10 lg:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bento-grid-texture opacity-40 pointer-events-none" />
            <div className="relative">
              <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-6">
                Portfolio · v4 · 2026
              </p>

              <h1 className="display text-[13vw] sm:text-7xl lg:text-[104px] text-bone-0">
                Patrick
                <br />
                <span className="display-italic text-amber-accent">Sebastine.</span>
              </h1>

              {/* Typewriter tagline */}
              <p className="mono text-sm sm:text-base tracking-wider text-bone-1 mt-6 min-h-[1.5em]">
                <span className="text-amber-accent">&gt;</span> {tagline}
                <span className="ml-0.5 inline-block w-[0.55ch] bg-amber-accent align-baseline translate-y-[2px] live-dot" style={{ height: "1em" }} />
              </p>

              <p className="mt-8 max-w-xl text-bone-1 text-lg leading-relaxed">
                I trade crypto, turn market data into decisions, and build
                content systems that compound. Based in Pretoria, shipping
                globally.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-5 py-3 rounded-full bg-amber-accent text-ink-0 font-medium hover:bg-amber-soft transition"
                >
                  See the work
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line-bright text-bone-0 hover:bg-ink-2 transition"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>

          {/* NOW CARD */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="card col-span-12 sm:col-span-6 lg:col-span-4 row-span-1 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
                Now
              </span>
              <Sparkles size={14} className="text-amber-accent" />
            </div>
            <p className="text-bone-0 leading-snug">
              <span className="text-bone-2">Running</span> a BTC momentum strategy,
              <span className="text-bone-2"> editing</span> a YouTube breakdown on
              on-chain flows, <span className="text-bone-2">learning</span>{" "}
              React 19.
            </p>
          </motion.div>

          {/* LOCATION / TIME */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="card col-span-6 sm:col-span-3 lg:col-span-2 p-5 flex flex-col justify-between"
          >
            <MapPin size={16} className="text-bone-2" />
            <div>
              <p className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
                Location
              </p>
              <p className="text-bone-0 text-sm mt-1">Pretoria, ZA</p>
            </div>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="card col-span-6 sm:col-span-3 lg:col-span-2 p-5 flex flex-col justify-between"
          >
            <Clock size={16} className="text-bone-2" />
            <div>
              <p className="mono text-[10px] tracking-[0.22em] uppercase text-bone-3">
                Local time
              </p>
              <p className="mono text-bone-0 text-lg mt-1">{time}</p>
            </div>
          </motion.div>

          {/* MARKET TICKER — LIVE BINANCE */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
            className="card col-span-12 sm:col-span-6 lg:col-span-4 row-span-1 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 pt-5 pb-3">
              <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
                Market · live
              </span>
              <div className="flex items-center gap-2">
                <span className="mono text-[9px] tracking-[0.22em] uppercase text-bone-3">
                  Binance
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-amber-accent opacity-50 live-dot" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-accent" />
                </span>
              </div>
            </div>
            <div>
              {ticker.map((r) => (
                <TickerRow
                  key={r.symbol}
                  label={r.label}
                  price={r.price}
                  change={r.change}
                />
              ))}
            </div>
          </motion.div>

          {/* LATEST VIDEO CARD — LynxCryptoScope */}
          <motion.a
            variants={fade}
            initial="hidden"
            animate="show"
            custom={6}
            href="https://www.youtube.com/@LynxCryptoScope"
            target="_blank"
            rel="noopener noreferrer"
            className="card group col-span-12 sm:col-span-6 lg:col-span-4 p-0 overflow-hidden flex flex-col"
          >
            <div className="relative h-32 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 80% at 10% 0%, rgba(255,181,71,0.22), transparent 60%), radial-gradient(120% 80% at 90% 100%, rgba(0,214,143,0.18), transparent 60%), linear-gradient(180deg, #17171C 0%, #0F0F12 100%)",
                }}
              />
              <div className="absolute inset-0 bento-grid-texture opacity-40" />
              <div className="relative h-full flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-amber-accent text-ink-0 flex items-center justify-center group-hover:scale-105 transition">
                  <Play size={18} fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
                  Latest · LynxCryptoScope
                </span>
                <ArrowUpRight size={14} className="text-bone-3 group-hover:text-amber-accent transition" />
              </div>
              <p className="text-bone-0 leading-snug text-sm">
                On-chain flow review — whale accumulation zones &amp; where smart
                money is parking this cycle.
              </p>
              <p className="mono text-[10px] tracking-[0.18em] uppercase text-bone-3 mt-auto pt-3">
                Watch on YouTube →
              </p>
            </div>
          </motion.a>

          {/* SOCIAL RAIL */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={7}
            className="card col-span-12 sm:col-span-6 lg:col-span-4 p-6"
          >
            <span className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2">
              Find me
            </span>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                {
                  d: ICON.github,
                  label: "GitHub",
                  handle: "@PatrickSebastine",
                  href: "https://github.com/PatrickSebastine",
                },
                {
                  d: ICON.x,
                  label: "X",
                  handle: "@iamreddsebasti",
                  href: "https://x.com/iamreddsebasti",
                },
                {
                  d: ICON.linkedin,
                  label: "LinkedIn",
                  handle: "/in/patrickugheokesebastine",
                  href: "https://www.linkedin.com/in/patrickugheokesebastine/",
                },
                {
                  d: ICON.youtube,
                  label: "YouTube",
                  handle: "@LynxCryptoScope",
                  href: "https://www.youtube.com/@LynxCryptoScope",
                },
              ].map(({ d, label, handle, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-3 py-2.5 rounded-xl border border-line hover:border-line-bright hover:bg-ink-2 transition"
                >
                  <BrandIcon
                    d={d}
                    size={16}
                    className="text-bone-2 group-hover:text-amber-accent transition"
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-bone-0 truncate">{label}</p>
                    <p className="mono text-[10px] text-bone-3 truncate">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
