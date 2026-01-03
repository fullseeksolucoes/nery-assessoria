"use client"

import { motion } from "framer-motion"
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid"

export function GrowthCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.6,
        ease: "easeOut",
      }}
      className="w-full rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6"
    >
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white">
          <ArrowTrendingUpIcon className="h-6 w-6" />
        </div>

        <div>
          <p className="text-white font-heading font-bold">
            Crescimento acelerado
          </p>
          <p className="text-white/70 text-sm">
            <span className="text-gradient-green text-lg">+127%</span> no último trimestre
          </p>
        </div>
      </div>
    </motion.div>
  )
}
