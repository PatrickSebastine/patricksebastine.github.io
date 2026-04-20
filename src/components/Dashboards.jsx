import React from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, BarChart3, Gauge } from "lucide-react"

const TABLEAU = [
  {
    title: "KMS Superstore Sales Report",
    blurb:
      "Regional sales, profitability and product-category deep-dive for the KMS Superstore dataset.",
    href: "https://public.tableau.com/app/profile/patrick.ugheoke.sebastine/viz/KMSSuperstoreSalesReportbyPatrickSebastine/KMSSuperstoreSalesReportbyPatrickSebastine",
    gradient:
      "radial-gradient(120% 80% at 10% 0%, rgba(255,181,71,0.35), transparent 55%), radial-gradient(120% 80% at 90% 100%, rgba(0,214,143,0.28), transparent 55%), linear-gradient(135deg, #1B1A20 0%, #0E0E12 100%)",
  },
  {
    title: "Red Bull Aviator — On-Premises Sales",
    blurb:
      "On-premises sales performance for Red Bull Aviator across venues, channels and seasons.",
    href: "https://public.tableau.com/app/profile/patrick.ugheoke.sebastine/viz/RedBullOn-PremisesSalesReport/RedBullAviatorSalesReportbyPatrickSebastine",
    gradient:
      "radial-gradient(120% 80% at 100% 0%, rgba(255,87,100,0.32), transparent 55%), radial-gradient(120% 80% at 0% 100%, rgba(255,181,71,0.22), transparent 55%), linear-gradient(135deg, #1A1618 0%, #0E0B0D 100%)",
  },
  {
    title: "CO₂ Emission by Country",
    blurb:
      "Multi-dataset analysis of CO₂ emissions benchmarked against GDP per capita and population.",
    href: "https://public.tableau.com/app/profile/patrick.ugheoke.sebastine/viz/MultipleDatasetCO2EmissionbyCountry-GDAP/CO2EmissionbyCountry",
    gradient:
      "radial-gradient(120% 80% at 50% 0%, rgba(0,214,143,0.30), transparent 55%), radial-gradient(120% 80% at 100% 100%, rgba(90,140,255,0.22), transparent 55%), linear-gradient(135deg, #15191A 0%, #0B0E10 100%)",
  },
]

const POWERBI = [
  {
    title: "Enterprise Sales Overview",
    blurb:
      "Executive-level Power BI dashboard — pipeline health, win rates, and quarterly variance.",
    href: "https://www.novypro.com/profile_projects/patricksebastine?Popup=memberProject&Data=1682101083977x421960662337435650",
    gradient:
      "radial-gradient(120% 80% at 20% 0%, rgba(255,181,71,0.30), transparent 55%), radial-gradient(120% 80% at 100% 100%, rgba(255,87,100,0.22), transparent 55%), linear-gradient(135deg, #1A1720 0%, #0D0B12 100%)",
  },
  {
    title: "Operational KPI Monitor",
    blurb:
      "Real-time KPI monitoring workbook — SLAs, throughput and anomaly surfacing across operations.",
    href: "https://www.novypro.com/profile_projects/patricksebastine?Popup=memberProject&Data=1682101095523x309785049612931700",
    gradient:
      "radial-gradient(120% 80% at 100% 0%, rgba(0,214,143,0.30), transparent 55%), radial-gradient(120% 80% at 0% 100%, rgba(90,140,255,0.22), transparent 55%), linear-gradient(135deg, #121A1A 0%, #0A1010 100%)",
  },
  {
    title: "Financial Performance",
    blurb:
      "Financial performance dashboard — revenue, cost and margin walks with scenario toggles.",
    href: "https://www.novypro.com/profile_projects/patricksebastine?Popup=memberProject&Data=1682101081722x777903578193443600",
    gradient:
      "radial-gradient(120% 80% at 50% 0%, rgba(255,181,71,0.32), transparent 55%), radial-gradient(120% 80% at 100% 100%, rgba(0,214,143,0.20), transparent 55%), linear-gradient(135deg, #1A1A1A 0%, #0B0B0B 100%)",
  },
]

function DashboardCard({ item, i, platform }) {
  return (
    <motion.a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="card group relative overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-40 overflow-hidden">
        <div className="absolute inset-0" style={{ background: item.gradient }} />
        <div className="absolute inset-0 bento-grid-texture opacity-50" />
        <div className="relative h-full p-5 flex items-end justify-between">
          <span className="mono text-[10px] tracking-[0.22em] uppercase text-bone-2">
            {platform}
          </span>
          {platform === "Tableau" ? (
            <BarChart3 size={18} className="text-bone-2" />
          ) : (
            <Gauge size={18} className="text-bone-2" />
          )}
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="display text-2xl sm:text-[28px] text-bone-0 leading-tight">
            {item.title}
          </h3>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-bone-3 group-hover:text-amber-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition"
          />
        </div>
        <p className="mt-3 text-bone-1 leading-relaxed text-sm">{item.blurb}</p>
      </div>
    </motion.a>
  )
}

function Block({ kicker, title, href, items, platform, index }) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-end justify-between gap-6 mb-10"
      >
        <div>
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-3">
            {kicker}
          </p>
          <h3 className="display text-4xl sm:text-5xl text-bone-0">{title}</h3>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 text-sm text-bone-1 hover:text-bone-0 transition mono"
        >
          View all {platform} <ArrowUpRight size={14} />
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <DashboardCard key={item.title} item={item} i={i + index} platform={platform} />
        ))}
      </div>
    </div>
  )
}

export default function Dashboards() {
  return (
    <section id="dashboards" className="relative w-full px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-line pb-6"
        >
          <p className="mono text-[11px] tracking-[0.22em] uppercase text-bone-2 mb-4">
            § 03 — Dashboards
          </p>
          <h2 className="display text-5xl sm:text-6xl text-bone-0 max-w-3xl">
            Data, made{" "}
            <span className="display-italic text-amber-accent">legible</span>.
          </h2>
        </motion.div>

        <div className="space-y-20">
          <Block
            kicker="§ 03.a — Tableau Public"
            title="Tableau"
            platform="Tableau"
            href="https://public.tableau.com/app/profile/patrick.ugheoke.sebastine/vizzes"
            items={TABLEAU}
            index={0}
          />
          <Block
            kicker="§ 03.b — NovyPro / Power BI"
            title="Power BI"
            platform="Power BI"
            href="https://www.novypro.com/profile_projects/patricksebastine"
            items={POWERBI}
            index={3}
          />
        </div>
      </div>
    </section>
  )
}
