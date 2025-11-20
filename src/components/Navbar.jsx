import { Menu, Rocket, Phone } from "lucide-react"

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 shadow-lg shadow-blue-500/30 grid place-items-center">
                <Rocket className="h-5 w-5 text-white" />
              </div>
              <span className="text-white text-lg font-semibold tracking-tight">Spare labs</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm">
              <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
              <a href="#work" className="text-white/80 hover:text-white transition-colors">Work</a>
              <a href="#process" className="text-white/80 hover:text-white transition-colors">Process</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Start a project</span>
              </a>
            </div>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
