import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '../constants/data'

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-terracotta-light text-terracotta text-xs font-body font-medium mb-4 uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-text-main">What Our Patients Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-warm-white border border-border-warm rounded-2xl p-7 flex flex-col"
            >
              {/* Quote mark */}
              <div className="font-display text-6xl text-gold/40 leading-none mb-2 select-none">"</div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="fill-gold text-gold" />
                ))}
              </div>

              <p className="font-body text-sm text-text-mid leading-relaxed italic flex-1 mb-6">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-sage-light flex items-center justify-center font-display text-sm font-semibold text-sage-dark flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-body text-sm font-medium text-text-main">{t.name}</div>
                  <div className="font-body text-xs text-text-muted">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
