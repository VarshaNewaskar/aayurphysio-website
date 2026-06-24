import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, CalendarCheck, Clock, Star } from 'lucide-react'
import { BRANCHES } from '../constants/data'
import SectionLabel from './SectionLabel'

const colorMap = {
  sage: {
    badge: 'bg-sage-light text-olive',
    icon: 'text-olive',
    border: 'hover:border-sage/50',
    dot: 'bg-sage',
  },
  terracotta: {
    badge: 'bg-terracotta-light text-terracotta',
    icon: 'text-terracotta',
    border: 'hover:border-terracotta/50',
    dot: 'bg-terracotta',
  },
  bark: {
    badge: 'bg-bark-light/30 text-bark',
    icon: 'text-bark',
    border: 'hover:border-bark/50',
    dot: 'bg-bark',
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
      <SectionLabel text="FIND US" color="text-sage-dark/6" />

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
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col rounded-3xl bg-white border border-border-warm shadow-sm
                  ${c.border} hover:shadow-lg transition-all duration-300`}
              >
                {/* Card top accent bar */}
                <div className={`absolute top-0 left-6 right-6 h-[3px] rounded-b-full ${c.dot} opacity-60`} />

                <div className="p-7 flex flex-col gap-5 flex-1">

                  {/* Branch name + tag */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-body font-bold uppercase tracking-widest mb-2 ${c.badge}`}>
                        {branch.tag}
                      </span>
                      <h3 className="font-display text-2xl font-semibold text-text-main leading-snug">
                        {branch.name}
                      </h3>
                    </div>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-cream ${c.icon}`}>
                      <MapPin size={18} />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2.5">
                    <MapPin size={14} className={`mt-0.5 flex-shrink-0 ${c.icon}`} />
                    <p className="font-body text-sm text-text-mid leading-relaxed">{branch.address}</p>
                  </div>

                  {/* Timings */}
                  <div className="flex items-start gap-2.5">
                    <Clock size={14} className={`mt-0.5 flex-shrink-0 ${c.icon}`} />
                    <div className="flex flex-col gap-0.5">
                      {branch.timings.map(t => (
                        <p key={t.label} className="font-body text-sm text-text-mid">
                          <span className="font-semibold text-text-main">{t.label}:</span>{' '}{t.time}
                        </p>
                      ))}
                      <p className="font-body text-xs text-text-muted mt-0.5">{branch.days}</p>
                    </div>
                  </div>

                  {/* Phone number(s) */}
                  <div className="flex items-start gap-2.5">
                    <Phone size={14} className={`mt-0.5 flex-shrink-0 ${c.icon}`} />
                    <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                      {branch.phones.map(ph => (
                        <a key={ph} href={`tel:${cleanPhone(ph)}`}
                          className="font-body text-sm font-semibold text-text-main hover:underline">
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="grid grid-cols-2 gap-2.5 mt-auto pt-2">
                    <a
                      href={`tel:${cleanPhone(primaryPhone)}`}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        bg-sage-dark text-white font-body font-semibold text-sm
                        hover:bg-sage transition-colors duration-200"
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
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        border-2 border-bark/30 text-bark font-body font-semibold text-sm
                        hover:bg-bark/10 hover:border-bark/60 transition-colors duration-200"
                    >
                      <MapPin size={14} /> Directions
                    </a>

                    <a
                      href="#book"
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl
                        border-2 border-sage/40 text-sage-dark font-body font-semibold text-sm
                        hover:bg-sage/10 hover:border-sage transition-colors duration-200"
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
