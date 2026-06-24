import { Phone, Mail, MapPin, Instagram, Clock, ArrowUpRight } from 'lucide-react'
import { CLINIC } from '../constants/data'

const quickLinks = [
  { label: 'What We Treat', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Patient Reviews', href: '#testimonials' },
  { label: 'Book Appointment', href: '#book' },
  { label: 'Find Us', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-section-navy text-white">

      {/* Top gradient divider */}
      <div className="h-1 w-full bg-gradient-to-r from-sage via-cyan to-bark-light opacity-60" />

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand column — spans 4 cols */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center flex-shrink-0 shadow-md">
                <img src="/logo.png" alt="Aayurphysio" className="w-full h-full object-contain" />
              </div>
              <div>
                <div className="font-body font-black text-white text-base uppercase tracking-widest leading-tight">
                  Aayurphysio
                </div>
                <div className="font-body text-xs text-bark-light/60 tracking-wide">
                  Wellness Centre
                </div>
              </div>
            </div>

            <p className="font-display text-lg italic text-bark-light/70 mb-3 leading-snug">
              "{CLINIC.tagline}"
            </p>

            <p className="font-body text-xs text-bark-light/50 leading-relaxed mb-6 max-w-xs">
              Pune's first holistic physiotherapy and wellness hub — Physiotherapy, Ayurveda, Nutrition, Yoga & more, across 4 locations in Pune.
            </p>

            <a
              href="https://www.instagram.com/aayurphysiowellness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/60
                font-body text-xs font-medium hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200"
            >
              <Instagram size={13} />
              @aayurphysiowellness
              <ArrowUpRight size={11} />
            </a>
          </div>

          {/* Quick links — spans 3 cols */}
          <div className="md:col-span-3 md:col-start-6">
            <h4 className="font-body font-black text-[10px] uppercase tracking-widest text-bark-light/40 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-bark-light/60 hover:text-white transition-colors duration-150 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-olive/60 group-hover:bg-cyan transition-colors duration-150" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info — spans 4 cols */}
          <div className="md:col-span-4 md:col-start-9">
            <h4 className="font-body font-black text-[10px] uppercase tracking-widest text-bark-light/40 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={13} className="text-bark-light/70" />
                </div>
                <div>
                  <p className="font-body text-[10px] uppercase tracking-wider text-bark-light/40 mb-0.5">Main Branch</p>
                  <span className="font-body text-sm text-bark-light/60 leading-relaxed">{CLINIC.address}</span>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={13} className="text-bark-light/70" />
                </div>
                <a href={`tel:${CLINIC.phone.replace(/\s/g, '')}`}
                  className="font-body text-sm text-bark-light/60 hover:text-white transition-colors">
                  {CLINIC.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={13} className="text-bark-light/70" />
                </div>
                <a href={`mailto:${CLINIC.email}`}
                  className="font-body text-sm text-bark-light/60 hover:text-white transition-colors">
                  {CLINIC.email}
                </a>
              </li>
            </ul>

            {/* Hours */}
            <div className="mt-5 bg-white/[0.06] rounded-xl px-4 py-3 border border-white/[0.08]">
              <div className="flex items-center gap-2 mb-1.5">
                <Clock size={11} className="text-bark-light/40" />
                <p className="font-body text-[10px] text-bark-light/40 uppercase tracking-widest">Clinic Hours</p>
              </div>
              <p className="font-body text-xs text-bark-light/60 leading-relaxed">{CLINIC.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-bark-light/30">
            © {new Date().getFullYear()} Aayurphysio Wellness Centre, Pune. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#contact" className="font-body text-xs text-bark-light/30 hover:text-bark-light/60 transition-colors">
              4 Locations across Pune
            </a>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <a href={CLINIC.googleReviewsUrl} target="_blank" rel="noopener noreferrer"
              className="font-body text-xs text-bark-light/30 hover:text-bark-light/60 transition-colors flex items-center gap-1">
              {CLINIC.rating}★ on Google
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
