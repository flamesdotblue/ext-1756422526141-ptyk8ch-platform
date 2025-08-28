import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', type: 'Residential', budget: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill in name, email, and a brief message.');
      return;
    }
    const to = 'studio@yourdomain.com';
    const subject = encodeURIComponent(`New project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\nEstimated Budget: ${form.budget}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setStatus('Opening your email client…');
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Let's build something enduring</h2>
          <p className="mt-4 text-neutral-300">Share a few details about your project. We'll respond within 2 business days to schedule an introductory call.</p>

          <div className="mt-8 space-y-4 text-neutral-300">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-neutral-400 mt-0.5" />
              <span>studio@yourdomain.com</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-neutral-400 mt-0.5" />
              <span>+1 (212) 555-0198</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-neutral-400 mt-0.5" />
              <span>New York, NY — Available for global work</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 md:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-neutral-300">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-md bg-neutral-950 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="Your full name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-md bg-neutral-950 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="type" className="text-sm text-neutral-300">Project Type</label>
              <select
                id="type"
                name="type"
                value={form.type}
                onChange={handleChange}
                className="rounded-md bg-neutral-950 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
              >
                <option>Residential</option>
                <option>Commercial</option>
                <option>Cultural</option>
                <option>Workplace</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-sm text-neutral-300">Estimated Budget</label>
              <input
                id="budget"
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="rounded-md bg-neutral-950 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
                placeholder="$250k - $1.2M"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="message" className="text-sm text-neutral-300">Tell us about your project</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              className="rounded-md bg-neutral-950 border border-white/10 px-3 py-2 outline-none focus:border-white/30"
              placeholder="Site location, timeline, scope, aspirations…"
              required
            />
          </div>
          {status && <p className="mt-3 text-sm text-neutral-300">{status}</p>}
          <div className="mt-6">
            <button type="submit" className="w-full md:w-auto px-5 py-3 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition">
              Send Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
