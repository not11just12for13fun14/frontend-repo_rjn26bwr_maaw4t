import { motion } from 'framer-motion'
import { Star, CheckCircle2 } from 'lucide-react'

const items = [
  { month: 'Jan', title: 'Kicked off a new goal', desc: 'Set intentions and mapped the plan.' },
  { month: 'Mar', title: 'First big milestone', desc: 'Hit 10k users and grew momentum.' },
  { month: 'Jun', title: 'Community love', desc: 'Hosted a meetup with great feedback.' },
  { month: 'Sep', title: 'Level up', desc: 'Launched version 2.0 with major upgrades.' },
  { month: 'Dec', title: 'Wrapped with wins', desc: 'Closed the year strong and grateful.' },
]

export default function Timeline() {
  return (
    <section id="timeline" className="py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-400" /> Your Year Timeline
        </h2>
        <div className="relative border-l border-blue-500/20 ml-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pl-8 pb-8"
            >
              <div className="absolute -left-3 top-1.5 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center border border-blue-300/30">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <div className="text-sm text-blue-300/80">{it.month}</div>
              <div className="text-white font-semibold">{it.title}</div>
              <p className="text-blue-200/70 text-sm mt-1">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
