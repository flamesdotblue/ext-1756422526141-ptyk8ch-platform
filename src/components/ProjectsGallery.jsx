const PROJECTS = [
  {
    title: 'Hillcrest Residence',
    tag: 'Residential',
    img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
  {
    title: 'Seaboard Pavilion',
    tag: 'Cultural',
    img: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
  {
    title: 'Glass Courtyard House',
    tag: 'Residential',
    img: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
  {
    title: 'Atrium Office',
    tag: 'Workplace',
    img: 'https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
  {
    title: 'Timber Gallery',
    tag: 'Cultural',
    img: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
  {
    title: 'Courtyard Studio',
    tag: 'Commercial',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=60',
  },
];

export default function ProjectsGallery() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Selected Works</h2>
            <p className="mt-3 text-neutral-300">A concise selection spanning residential, cultural, and workplace commissions.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/10 transition">Discuss Your Project</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-xs text-neutral-400 mt-1">{p.tag}</p>
                </div>
                <div className="text-xs px-2 py-1 rounded-full bg-white/10 text-neutral-200">View</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
