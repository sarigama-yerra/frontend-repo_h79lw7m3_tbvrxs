import { Code, Rocket, Palette, LineChart } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Apps',
    desc: 'Robust, scalable applications built with modern frameworks and best practices.',
  },
  {
    icon: Palette,
    title: 'Design Systems',
    desc: 'A cohesive visual language and component library tailored to your brand.',
  },
  {
    icon: Rocket,
    title: 'Marketing Sites',
    desc: 'Fast, SEO-friendly landing pages that convert and look great on every device.',
  },
  {
    icon: LineChart,
    title: 'Optimization',
    desc: 'Performance, accessibility, and analytics to keep your product sharp and effective.',
  },
]

function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/60">What we do</p>
            <h2 className="mt-2 text-3xl font-bold text-white">Services</h2>
          </div>
          <div className="hidden md:block text-white/70 max-w-md text-sm">
            Practical, modern builds with a playful edge. We deliver quickly without sacrificing quality.
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/30">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
