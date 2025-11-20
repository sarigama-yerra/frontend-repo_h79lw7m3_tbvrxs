import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl pt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            We build modern, playful web experiences
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Spare labs — a web development agency for ambitious brands
          </h1>

          <p className="mt-4 text-white/80 text-lg">
            From landing pages to full-stack platforms, we craft fast, interactive sites with a clean, modern vibe. Let’s turn your idea into a product people love.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-medium hover:bg-white/90 transition-colors">Start a project</a>
            <a href="#work" className="rounded-xl bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition-colors">See our work</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-950/80" />
    </section>
  )
}

export default Hero
