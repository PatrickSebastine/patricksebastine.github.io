import React from "react"
import { motion } from "framer-motion"

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-6 bg-cyber-black border-t border-cyan-400/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-white mb-6">Ready to Level Up?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join traders and creators building wealth and influence. Get real strategies, trading signals, and content systems that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="px-8 py-4 bg-cyan-400 text-black font-bold rounded hover:shadow-lg hover:shadow-cyan-400/50 transition"
              whileHover={{ scale: 1.05 }}
            >
              Join Community
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded hover:bg-cyan-400/10 transition"
              whileHover={{ scale: 1.05 }}
            >
              Get Trading Signals
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
