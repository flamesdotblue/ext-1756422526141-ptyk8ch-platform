import { useEffect } from 'react';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ProjectsGallery from './components/ProjectsGallery';
import ContactForm from './components/ContactForm';

export default function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0 bg-neutral-950/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-gradient-to-tr from-neutral-200 to-neutral-400" />
            <span className="font-semibold tracking-wide">Atelier Modern</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#bio" className="hover:text-white transition">Studio</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
          <a href="#contact" className="md:inline-flex hidden px-4 py-2 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-neutral-200 transition">Start a Project</a>
        </div>
      </header>

      <main id="top" className="pt-20">
        <Hero />
        <Bio />
        <ProjectsGallery />
        <ContactForm />
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} Atelier Modern Architecture. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white transition" href="#bio">About</a>
            <a className="hover:text-white transition" href="#work">Portfolio</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
