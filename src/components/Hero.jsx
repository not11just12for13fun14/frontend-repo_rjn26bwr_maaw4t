import { motion } from 'framer-motion'
import { Sparkles, Calendar } from 'lucide-react'

export default function Hero() {
  const year = new Date().getFullYear()
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/70 border border-blue-500/20 text-blue-200 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            Your personal recap
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Year in Review
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto">
            A beautiful snapshot of moments, milestones, and metrics from {year}.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#stats" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">
              <Sparkles className="w-5 h-5" />
              Explore Highlights
            </a>
            <a href="#timeline" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 text-blue-100 border border-blue-500/20 transition-colors">
              Jump to Timeline
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
