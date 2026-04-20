import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const stats = [
    { icon: "📈", value: "68%", label: "Win Rate" },
    { icon: "🎥", value: "500+", label: "Content Posts" },
    { icon: "👥", value: "2.5K", label: "Community" }
  ]

  return (
    <section ref={ref} className="w-full py-24 px-4 sm:px-6 bg-black border-t border-cyan-400/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="py-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl font-black text-cyan-400 mb-2">{stat.value}</div>
              <p className="text-gray-300 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
