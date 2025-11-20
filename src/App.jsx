import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Ambient gradient background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_60%_at_20%_10%,rgba(59,130,246,0.15),transparent)]" />
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(168,85,247,0.12),transparent)]" />

      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Work />
        <CTA />
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Spare labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
