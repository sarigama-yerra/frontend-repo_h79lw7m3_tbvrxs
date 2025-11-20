function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-tr from-blue-600/20 via-cyan-500/10 to-violet-600/20 p-1">
          <div className="rounded-[22px] bg-slate-950/60 p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-white/80">
                Tell us about your goals and timeline. We’ll reply within 24 hours with next steps.
              </p>
              <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <input type="text" placeholder="Company" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:col-span-2" />
                <textarea rows="4" placeholder="Tell us about the project" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 sm:col-span-2" />
                <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-white/90 sm:col-span-2">Send message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
