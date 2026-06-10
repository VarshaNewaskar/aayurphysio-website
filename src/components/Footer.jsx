import { Phone, Mail, MapPin, Instagram } from 'lucide-react'
import { CLINIC } from '../constants/data'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-section-navy text-white">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            {/* Logo + name */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0">
                <img src="/logo.png" alt="Aayurphysio" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-body font-black text-white text-base uppercase tracking-widest leading-tight">
                  Aayurphysio
                </div>
                <div className="font-body text-xs text-bark-light/70 tracking-wide">
                  Wellness Centre
                </div>
              </div>
            </div>

            <p className="font-body text-sm text-bark-light/60 italic mb-5">
              "{CLINIC.tagline}"
            </p>

            <p className="font-body text-xs text-bark-light/50 leading-relaxed mb-6">
              PCMC's first multi-specialty wellness hub — Physiotherapy, Ayurveda, Nutrition, Yoga & more. Near BHEL Chowk, Nigdi, Pune.
            </p>

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/aayurphysiowellness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-white/70
                font-body text-xs font-medium hover:bg-white/10 hover:text-white transition-colors"
            >
              <Instagram size={13} />
              @aayurphysiowellness
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body font-black text-xs uppercase tracking-widest text-bark-light/50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-bark-light/70 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-olive group-hover:bg-white transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-body font-black text-xs uppercase tracking-widest text-bark-light/50 mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-bark-light" />
                </div>
                <span className="font-body text-sm text-bark-light/70 leading-relaxed">{CLINIC.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-bark-light" />
                </div>
                <a href={`tel:${CLINIC.phone}`} className="font-body text-sm text-bark-light/70 hover:text-white transition-colors">
                  {CLINIC.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-bark-light" />
                </div>
                <a href={`mailto:${CLINIC.email}`} className="font-body text-sm text-bark-light/70 hover:text-white transition-colors">
                  {CLINIC.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-5 bg-white/8 rounded-xl px-4 py-3 border border-white/10">
              <p className="font-body text-[10px] text-bark-light/50 uppercase tracking-widest mb-1">Clinic Hours</p>
              <p className="font-body text-xs text-bark-light/70 leading-relaxed">{CLINIC.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-bark-light/40">
            © 2025 Aayurphysio Wellness Centre, Nigdi, Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-olive" />
            <p className="font-body text-xs text-bark-light/40">
              Built with care for the Aayurphysio team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
