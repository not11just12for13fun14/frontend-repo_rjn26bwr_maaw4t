import { motion } from 'framer-motion'

export default function CTA() {
  const year = new Date().getFullYear()
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-slate-800/70 to-slate-900/70 p-8 sm:p-10 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready for an even better {year + 1}?
          </h3>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">
            Save this recap, share it with friends, and set goals for the year ahead.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">Download PDF</button>
            <a href="/test" className="px-5 py-3 rounded-lg bg-slate-800/70 hover:bg-slate-700/70 text-blue-100 border border-blue-500/20 transition-colors">Backend Test</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
