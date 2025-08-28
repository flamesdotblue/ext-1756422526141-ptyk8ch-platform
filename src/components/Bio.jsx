export default function Bio() {
  return (
    <section id="bio" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-semibold">About the Studio</h2>
          <p className="mt-6 text-neutral-300">Founded by architect Jordan Ainsley, Atelier Modern is a design-led practice focused on residential, cultural, and boutique commercial projects. Our work pairs rigorous attention to detail with a restrained, material-forward aesthetic.</p>
          <p className="mt-4 text-neutral-300">We approach each commission with curiosity and care—listening deeply, responding to site and context, and crafting solutions that feel inevitable. From early studies to on-site execution, we steward projects with clarity and collaboration.</p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-semibold">12+</div>
              <div className="text-sm text-neutral-400">Years Practice</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">40+</div>
              <div className="text-sm text-neutral-400">Built Projects</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">7</div>
              <div className="text-sm text-neutral-400">Awards</div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=60"
              alt="Portrait of architect in studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden md:block">
            <div className="p-4 rounded-lg border border-white/10 bg-neutral-900/60 backdrop-blur">
              <p className="text-sm text-neutral-300">Registered Architect, AIA</p>
              <p className="text-xs text-neutral-400">Based in New York — working globally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
