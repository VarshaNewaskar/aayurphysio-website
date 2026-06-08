import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'
import { CLINIC } from '../constants/data'

const contactItems = [
  { icon: MapPin, label: 'Address', value: CLINIC.address, color: 'sage' },
  { icon: Phone, label: 'Phone', value: CLINIC.phone, color: 'terracotta' },
  { icon: Mail, label: 'Email', value: CLINIC.email, color: 'bark' },
  { icon: Clock, label: 'Hours', value: CLINIC.hours, color: 'sage' },
]

const iconBg = {
  sage: 'bg-sage-light/50 text-sage-dark',
  terracotta: 'bg-terracotta-light text-terracotta',
  bark: 'bg-bark-light/20 text-bark',
}

export default function Contact() {
  return (
    <section id="contact" className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sage-light/50 text-sage-dark text-xs font-body font-medium mb-4 uppercase tracking-wider">
            Find Us
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-text-main">Visit the Clinic</h2>
          <p className="mt-4 font-body text-text-muted max-w-sm mx-auto text-base">
            We're conveniently located near BHEL Chowk, Nigdi, Pune.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {contactItems.map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-start gap-4 bg-cream rounded-2xl p-5 border border-border-warm">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg[color]}`}>
                  <Icon size={18} />
                </div>
                <div>
                  <div className="font-body text-xs text-text-muted uppercase tracking-wide mb-0.5">{label}</div>
                  <div className="font-body text-sm text-text-main leading-relaxed">{value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden border border-border-warm shadow-sm h-full min-h-[340px]"
          >
            {CLINIC.mapsEmbed ? (
              <iframe
                src={CLINIC.mapsEmbed.match(/src="([^"]+)"/)?.[1] || CLINIC.mapsEmbed}
                width="100%"
                height="100%"
                style={{ minHeight: '340px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aayurphysio location"
              />
            ) : (
              <div className="bg-gradient-to-br from-sage-light/30 to-terracotta-light/30 h-full min-h-[340px] flex flex-col items-center justify-center gap-4 p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center shadow-sm">
                  <MapPin size={24} className="text-sage-dark" />
                </div>
                <div>
                  <p className="font-display text-lg text-text-main font-semibold mb-1">Aayurphysio Wellness Centre</p>
                  <p className="font-body text-sm text-text-muted">{CLINIC.address}</p>
                </div>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-dark text-white font-body text-sm font-medium hover:bg-sage transition-colors"
                >
                  <ExternalLink size={14} />
                  Open in Google Maps
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
