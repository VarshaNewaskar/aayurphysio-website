import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, CalendarCheck, Clock, MapPinned } from 'lucide-react'
import { BRANCHES } from '../constants/data'
import SectionLabel from './SectionLabel'

const colorMap = {
  sage: {
    header: 'bg-gradient-to-br from-sage-dark to-olive',
    badge: 'bg-white/20 text-white',
    icon: 'text-sage-dark',
    iconBg: 'bg-sage-light/60',
    border: 'border-sage/20 hover:border-sage/50',
    dot: 'bg-sage',
    timingBg: 'bg-sage-light/40',
    callBtn: 'bg-sage-dark hover:bg-olive text-white',
    dirBtn: 'border-sage/40 text-sage-dark hover:bg-sage-light/50 hover:border-sage',
  },
  terracotta: {
    header: 'bg-gradient-to-br from-terracotta to-cyan',
    badge: 'bg-white/20 text-white',
    icon: 'text-terracotta',
    iconBg: 'bg-terracotta-light/60',
    border: 'border-terracotta/20 hover:border-terracotta/50',
    dot: 'bg-terracotta',
    timingBg: 'bg-terracotta-light/40',
    callBtn: 'bg-terracotta hover:bg-cyan text-white',
    dirBtn: 'border-terracotta/40 text-terracotta hover:bg-terracotta-light/50 hover:border-terracotta',
  },
  bark: {
    header: 'bg-gradient-to-br from-bark to-bark-light',
    badge: 'bg-white/20 text-white',
    icon: 'text-bark',
    iconBg: 'bg-bark-light/30',
    border: 'border-bark/20 hover:border-bark/50',
    dot: 'bg-bark',
    timingBg: 'bg-bark-light/20',
    callBtn: 'bg-bark hover:bg-bark-light text-white hover:text-bark',
    dirBtn: 'border-bark/40 text-bark hover:bg-bark-light/20 hover:border-bark',
  },
}

function cleanPhone(raw) {
  return raw.replace(/\s+/g, '')
}

function whatsappUrl(phone, branch) {
  const num = cleanPhone(phone).replace(/^\+/, '')
  const msg = encodeURIComponent(
    `Hi, I would like to book an appointment at Aayurphysio Wellness Centre – ${branch} branch.`
  )
  return `https://wa.me/${num}?text=${msg}`
}

export default function Branches() {
  return (
    <section id="contact" className="relative bg-section-blue overflow-hidden py-28">
      <SectionLabel text="FIND US" color="text-sage-dark/[0.06]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sage-dark/10 text-sage-dark text-xs font-body font-bold mb-5 uppercase tracking-widest">
            Our Locations
          </span>
          <div className="section-divider" />
          <h2 className="gradient-heading font-display text-5xl sm:text-6xl font-semibold leading-tight">
            Find a Clinic Near You
          </h2>
          <p className="mt-4 font-body text-base text-text-mid max-w-xl">
            We are present across 4 locations in Pune — expert care, always close to home.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BRANCHES.map((branch, i) => {
            const c = colorMap[branch.color] || colorMap.sage
            const primaryPhone = branch.phones[0]

            return (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                className={`flex flex-col rounded-3xl bg-white border shadow-sm overflow-hidden
                  ${c.border} hover:shadow-xl transition-all duration-300 group`}
              >
                {/* Coloured header band */}
                <div className={`${c.header} px-6 py-5 flex items-start justify-between`}>
                  <div>
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest mb-1.5 ${c.badge}`}>
                      {branch.tag}
                    </span>
                    <h3 className="font-display text-2xl font-semibold text-white leading-snug">
                      {branch.name}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPinned size={18} className="text-white" />
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col gap-4 flex-1">

                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className={`mt-0.5 flex-shrink-0 ${c.icon}`} />
                    <p className="font-body text-sm text-text-mid leading-relaxed">{branch.address}</p>
                  </div>

                  {/* Timings — pill chips */}
                  <div className="flex items-start gap-2.5">
                    <Clock size={14} className={`mt-0.5 flex-shrink-0 ${c.icon}`} />
                    <div className="flex flex-wrap gap-2">
                      {branch.timings.map(t => (
                        <span key={t.label} className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-medium text-text-mid ${c.timingBg}`}>
                          <span className="font-semibold text-text-main">{t.label}</span>
                          {t.time}
                        </span>
                      ))}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body text-text-muted bg-cream">
                        {branch.days}
                      </span>
                    </div>
                  </div>

                  {/* Phone number(s) */}
                  <div className="flex items-center gap-2.5">
                    <Phone size={14} className={`flex-shrink-0 ${c.icon}`} />
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                      {branch.phones.map(ph => (
                        <a key={ph} href={`tel:${cleanPhone(ph)}`}
                          className="font-body text-sm font-semibold text-text-main hover:underline underline-offset-2">
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2.5 mt-auto pt-2 border-t border-border-warm">
                    <a
                      href={`tel:${cleanPhone(primaryPhone)}`}
                      className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        font-body font-semibold text-sm transition-colors duration-200 ${c.callBtn}`}
                    >
                      <Phone size={14} /> Call
                    </a>

                    <a
                      href={whatsappUrl(primaryPhone, branch.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        bg-[#25D366] text-white font-body font-semibold text-sm
                        hover:bg-[#1ebe5c] transition-colors duration-200"
                    >
                      <MessageCircle size={14} /> WhatsApp
                    </a>

                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        border-2 font-body font-semibold text-sm transition-colors duration-200 ${c.dirBtn}`}
                    >
                      <MapPin size={14} /> Directions
                    </a>

                    <a
                      href="#book"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        border-2 border-sage-dark/30 text-sage-dark font-body font-semibold text-sm
                        hover:bg-sage-light/40 hover:border-sage-dark transition-colors duration-200"
                    >
                      <CalendarCheck size={14} /> Book
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center font-body text-sm text-text-muted mt-10"
        >
          All branches open Mon – Sat. Sunday appointments available on request — call or WhatsApp your nearest branch.
        </motion.p>
      </div>
    </section>
  )
}
