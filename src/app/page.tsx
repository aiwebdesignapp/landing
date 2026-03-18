export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />

      {/* Nav */}
      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
            <span className="text-sm font-bold">AI</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            AI Web Design
          </span>
        </div>
        <a
          href="#contact"
          className="rounded-full border border-white/10 px-5 py-2 text-sm font-medium transition hover:border-white/30 hover:bg-white/5"
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-32 pt-24 text-center sm:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
          Powered by AI agents
        </div>

        <h1 className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent sm:text-7xl sm:leading-[1.1]">
          Your website,
          <br />
          built in minutes
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 sm:text-xl">
          Tell us about your business. Our AI team researches your brand,
          designs a custom site, writes the code, and deploys it live.
          No templates. No drag-and-drop. Just results.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3.5 text-sm font-semibold transition hover:shadow-lg hover:shadow-purple-500/25"
          >
            Build my website
            <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-gray-400 transition hover:text-white"
          >
            See how it works
          </a>
        </div>

        {/* Browser mockup */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl shadow-purple-500/5 backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
              <div className="ml-3 flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-gray-500" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                aiwebdesign.app
              </div>
            </div>
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex gap-3">
                  {["Researching brand...", "Designing layout...", "Writing code...", "Deploying..."].map((step, i) => (
                    <div
                      key={step}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-400"
                      style={{ opacity: 0.4 + i * 0.2 }}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="mt-4 h-1.5 w-64 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                </div>
                <p className="text-xs text-gray-500">4 AI agents working in parallel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="relative z-10 border-t border-white/5 bg-[#0a0a0a]">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-gray-400">
            Four specialized AI agents collaborate to build your site.
            You just describe what you need.
          </p>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Research",
                desc: "Our AI researches your brand, competitors, and industry to understand your unique position.",
                color: "from-purple-500/20 to-purple-500/0",
              },
              {
                step: "02",
                title: "Design",
                desc: "An architect agent plans the perfect layout, color scheme, and content structure for your site.",
                color: "from-blue-500/20 to-blue-500/0",
              },
              {
                step: "03",
                title: "Build",
                desc: "A coder agent writes clean, responsive code with modern technologies. No templates, all custom.",
                color: "from-cyan-500/20 to-cyan-500/0",
              },
              {
                step: "04",
                title: "Deploy",
                desc: "Your site goes live instantly. Custom domain, SSL, and global CDN included.",
                color: "from-green-500/20 to-green-500/0",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} opacity-0 transition group-hover:opacity-100`} />
                <div className="relative">
                  <span className="text-4xl font-black text-white/5">{item.step}</span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">
                Not another website builder
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-400">
                We don&apos;t give you a template and a drag-and-drop editor.
                Our AI agents write real code, tailored to your brand.
                Every site is unique.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Custom code, not templates",
                  "Mobile-first responsive design",
                  "Blazing fast performance (100/100 Lighthouse)",
                  "SEO optimized out of the box",
                  "Free hosting with custom domain",
                  "Ready in minutes, not weeks",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <svg className="h-5 w-5 flex-shrink-0 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <div className="space-y-3 font-mono text-sm">
                <div className="text-gray-500">{"// Your site, built by AI"}</div>
                <div>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">site</span>{" "}
                  <span className="text-gray-500">=</span>{" "}
                  <span className="text-yellow-300">await</span>{" "}
                  <span className="text-green-300">buildWebsite</span>
                  <span className="text-gray-400">{"({"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">client</span>
                  <span className="text-gray-400">{": "}</span>
                  <span className="text-orange-300">{'"Your Business"'}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">style</span>
                  <span className="text-gray-400">{": "}</span>
                  <span className="text-orange-300">{'"minimal & modern"'}</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-blue-300">agents</span>
                  <span className="text-gray-400">{": ["}</span>
                  <span className="text-orange-300">{'"researcher"'}</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">{'"architect"'}</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-orange-300">{'"coder"'}</span>
                  <span className="text-gray-400">{"],"}</span>
                </div>
                <div>
                  <span className="text-gray-400">{"});"}</span>
                </div>
                <div className="mt-2 text-gray-500">{"// → live at yourdomain.com ✓"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="relative z-10 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 py-32 text-center">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Tell us about your project. We&apos;ll have a custom website live
            before your coffee gets cold.
          </p>
          <a
            href="mailto:info@aiwebdesign.app"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-4 text-base font-semibold transition hover:shadow-lg hover:shadow-purple-500/25"
          >
            info@aiwebdesign.app
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 px-6 py-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} AI Web Design. All rights reserved.
      </footer>
    </main>
  );
}
