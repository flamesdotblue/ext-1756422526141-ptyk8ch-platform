import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529429612778-cflo0b1x?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60"
          alt="Modern architectural facade"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/50 to-neutral-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-20" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44">
        <div className="max-w-3xl">
          <p className="text-neutral-300 uppercase tracking-[0.2em] text-xs mb-6">Architecture + Interior</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">Modern, timeless spaces crafted with precision and purpose.</h1>
          <p className="mt-6 text-neutral-300 max-w-xl">We design refined, context-driven architecture that balances clarity, light, and material honesty—delivering spaces that feel effortless and enduring.</p>
          <div className="mt-10 flex items-center gap-4">
            <a href="#work" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition">
              Explore Work <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
