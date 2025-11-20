import { CaseSensitive, MoveRight } from 'lucide-react'

const projects = [
  {
    name: 'Playful Portfolio',
    tag: 'Design + Build',
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'SaaS Dashboard',
    tag: 'Product UI',
    img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Commerce Launch',
    tag: 'Marketing Site',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
]

function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/60">Selected</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Work</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/20">
            <CaseSensitive className="h-4 w-4" />
            View capabilities
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/60">{p.tag}</p>
                  <h3 className="text-white font-semibold">{p.name}</h3>
                </div>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white group-hover:bg-white/20 transition">
                  <MoveRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
