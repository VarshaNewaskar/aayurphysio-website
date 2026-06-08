import { CLINIC } from '../constants/data'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Book', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-bark text-bark-light/80 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src="/logo.png" alt="Aayurphysio" className="h-8 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="font-body text-sm italic text-bark-light/60">{CLINIC.tagline}</p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-body text-xs text-bark-light/50">
              © 2025 Aayurphysio Wellness Centre, Nigdi, Pune.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex justify-start sm:justify-end gap-5 flex-wrap">
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                className="font-body text-sm text-bark-light/70 hover:text-warm-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
