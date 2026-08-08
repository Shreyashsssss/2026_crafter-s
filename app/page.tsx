import Link from 'next/link';
import { ArrowRight, BookOpen, Clock3, FileText, ShieldCheck, Sparkles, UserCheck, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'Document Review Agent',
    description: 'Extract facts, parties, dates, claims, and legal sections from case documents.',
    icon: FileText,
  },
  {
    title: 'Evidence Analysis Agent',
    description: 'Compare evidence, identify contradictions, and surface missing proof.',
    icon: ShieldCheck,
  },
  {
    title: 'Timeline Agent',
    description: 'Convert events into a clear chronological case timeline.',
    icon: Clock3,
  },
  {
    title: 'Legal Research Agent',
    description: 'Retrieve relevant judgments, provisions, and precedent citations.',
    icon: BookOpen,
  },
  {
    title: 'Argument Analysis Agent',
    description: 'Analyze both sides independently with balanced strengths and weaknesses.',
    icon: Users,
  },
  {
    title: 'Recommendation Agent',
    description: 'Generate an explainable advisory case assessment with traceable reasoning.',
    icon: UserCheck,
  },
];

const stats = [
  { label: 'AI Agents', value: '6' },
  { label: 'Evidence Types', value: '7+' },
  { label: 'Compliance Checks', value: '100%' },
  { label: 'Human Review Steps', value: 'Every case' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-nyaya-dark text-white">
      <div className="relative overflow-hidden bg-nyaya-deep px-6 py-8 sm:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-1/2 aspect-[1155/678] w-[68.5625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-r from-[#5f87ff]/40 via-[#a96bff]/30 to-[#3ed8c1]/10 opacity-70" />
        </div>
        <div className="mx-auto max-w-7xl space-y-12">
          {/* Top Navbar */}
          <nav className="flex items-center justify-between border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-nyaya-blue/20 text-nyaya-blue ring-1 ring-nyaya-blue/30 font-bold">
                ⚖️
              </div>
              <span className="text-xl font-bold tracking-tight text-white">NyayaAI</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-nyaya-blue to-nyaya-purple px-5 py-2.5 text-xs font-bold text-slate-950 transition hover:opacity-90 shadow-lg shadow-nyaya-blue/20"
              >
                <Shield className="h-4 w-4 text-slate-950" />
                Head of Admin Portal
              </Link>
            </div>
          </nav>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <section className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 ring-1 ring-white/10 backdrop-blur">
                  ⚖️ Legal workflow AI for Indian courts
                </span>
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  NyayaAI — Explainable Judicial Case Analysis
                </h1>
                <p className="max-w-2xl text-lg text-slate-200 sm:text-xl">
                  A professional, human-centered AI co-pilot built to analyze case documents, synthesize evidence, surface precedent, and support legal decision-making with clear auditability.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 sm:max-w-xl">
                <a href="#workflow" className="flex items-center justify-between rounded-3xl bg-white/10 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/15">
                  Explore the workflow
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#demo" className="flex items-center justify-between rounded-3xl bg-nyaya-blue px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-nyaya-blue/90">
                  View demo case analysis
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-glass">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl sm:p-10">
              <div className="space-y-6">
                <div className="inline-flex rounded-full bg-nyaya-blue/10 px-4 py-1.5 text-sm font-semibold text-nyaya-blue">
                  Trusted by courts, legal teams, and research units
                </div>
                <div className="space-y-4">
                  <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                    <p className="text-sm text-slate-400">Case Type</p>
                    <p className="mt-2 text-xl font-semibold text-white">Property dispute analysis</p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                      <p className="text-sm text-slate-400">Core Outcome</p>
                      <p className="mt-2 text-lg font-semibold text-white">Explainable case assessment</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
                      <p className="text-sm text-slate-400">Checkpoint</p>
                      <p className="mt-2 text-lg font-semibold text-white">Human review required</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-nyaya-blue/20 to-nyaya-purple/10 p-6">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Multi-agent orchestration</p>
                  <p className="mt-3 text-lg font-semibold text-white">Document review, evidence analysis, precedent search, argument comparison, and advisory synthesis all in one platform.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-nyaya-dark px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 ring-1 ring-white/10">
                <Sparkles className="h-4 w-4 text-nyaya-blue" />
                Designed for practical legal use with an interactive, user-friendly case dashboard.
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-white">Professional legal workflow, with a modern interactive interface.</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                NyayaAI combines a polished UI, unique gradient styling, and dynamic workflows so judges and lawyers can review case insights quickly and confidently.
              </p>
            </div>

            <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glass">
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-nyaya-blue/40 hover:bg-white/10">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nyaya-blue/10 text-nyaya-blue">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="workflow" className="bg-nyaya-blue/5 px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-nyaya-blue">Workflow</p>
              <h2 className="text-4xl font-semibold text-white">Coordinated agent collaboration for each phase of a case.</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                NyayaAI breaks case analysis into repeatable tasks, keeps the human in charge, and captures each agent step for transparency.
              </p>
            </div>
            <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glass">
              <div className="rounded-[1.75rem] bg-gradient-to-r from-nyaya-blue/20 via-white/10 to-nyaya-purple/20 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Case workflow</p>
                <ol className="mt-6 space-y-4 text-sm text-slate-300">
                  <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">1. Upload case documents and briefs</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">2. Document Review & fact extraction</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">3. Precedent search and evidence comparison</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">4. Two-sided analysis and contradictions</li>
                  <li className="rounded-3xl border border-white/10 bg-slate-950/70 p-4">5. Advisory assessment and human review</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="bg-nyaya-dark px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-nyaya-purple">Demo case</p>
              <h2 className="text-4xl font-semibold text-white">Synthetic property dispute analysis</h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A polished interactive preview of the AI-assisted case dashboard showing summary cards, timelines, evidence strength, and explainable recommendations.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-glass">
              <div className="grid gap-6">
                <div className="rounded-3xl bg-gradient-to-r from-nyaya-purple/30 via-nyaya-blue/10 to-nyaya-mint/20 p-6 text-white shadow-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-200">Case overview</p>
                  <h3 className="mt-4 text-2xl font-semibold">Brother A vs Brother B</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Property dispute | Inheritance claim | Ownership documents</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">Key legal issues</p>
                    <ul className="mt-3 space-y-2 text-sm text-slate-200">
                      <li>Ownership</li>
                      <li>Inheritance</li>
                      <li>Document validity</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl bg-slate-950/80 p-5">
                    <p className="text-sm text-slate-400">AI assessment</p>
                    <p className="mt-3 text-lg font-semibold text-white">Advisory only</p>
                    <p className="mt-2 text-sm text-slate-300">Human review required before any action.</p>
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Evidence strength</span>
                    <span>Party A 72% / Party B 48%</span>
                  </div>
                  <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-nyaya-blue to-nyaya-purple" style={{ width: '72%' }} />
                  </div>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Explainable recommendation</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">The AI suggests prioritizing ownership documents and cross-checking tax receipts against transfer records while preserving the final decision for the judge.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-nyaya-deep px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm text-slate-400">NyayaAI is a prototype legal workflow platform for demonstration purposes. AI outputs are advisory and require human verification.</p>
          <p className="mt-4 text-sm text-slate-500">Built for judges, legal teams, and research units. © 2026 NyayaAI.</p>
        </div>
      </footer>
    </main>
  );
}
