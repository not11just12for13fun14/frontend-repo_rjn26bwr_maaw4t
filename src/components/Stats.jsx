import { motion } from 'framer-motion'
import { Trophy, Flame, Clock, Heart } from 'lucide-react'

const StatCard = ({ icon: Icon, label, value, accent }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-2xl p-6 bg-slate-800/60 border border-blue-500/20 backdrop-blur-sm"
  >
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${accent}`}>
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div className="text-3xl font-bold text-white">{value}</div>
    <div className="text-sm text-blue-200/70 mt-1">{label}</div>
  </motion.div>
)

export default function Stats() {
  // Static demo data; can later be wired to backend
  const data = [
    { icon: Trophy, label: 'Milestones reached', value: 12, accent: 'bg-gradient-to-br from-fuchsia-500 to-violet-600' },
    { icon: Flame, label: 'Days streak', value: 47, accent: 'bg-gradient-to-br from-orange-500 to-rose-600' },
    { icon: Clock, label: 'Hours invested', value: 183, accent: 'bg-gradient-to-br from-sky-500 to-blue-600' },
    { icon: Heart, label: 'Highlights saved', value: 26, accent: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  ]
  
  return (
    <section id="stats" className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <StatCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
