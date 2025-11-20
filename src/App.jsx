import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Timeline from './components/Timeline'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_top,rgba(59,130,246,0.08),transparent),radial-gradient(800px_400px_at_bottom,rgba(14,165,233,0.08),transparent)] pointer-events-none" />

      <header className="relative z-10">
        <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <img src="/flame-icon.svg" alt="logo" className="h-7 w-7" />
            Year in Review
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#stats" className="text-blue-200/80 hover:text-white">Highlights</a>
            <a href="#timeline" className="text-blue-200/80 hover:text-white">Timeline</a>
            <a href="/test" className="text-blue-200/80 hover:text-white">Backend</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Stats />
        <Timeline />
        <CTA />
      </main>

      <footer className="relative z-10 py-10 text-center text-blue-300/60 text-sm">
        Built with Flames Blue
      </footer>
    </div>
  )
}

export default App
