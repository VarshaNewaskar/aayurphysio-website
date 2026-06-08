import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { CLINIC } from '../constants/data'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-warm-white flex items-center overflow-hidden pt-16">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-sage-light/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-terracotta-light/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag pill */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-light text-terracotta text-xs font-body font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
              Holistic Wellness · PCMC, Nigdi
            </span>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-text-main leading-tight mb-6">
              Heal.{' '}
              <em className="italic text-sage-dark not-italic" style={{ fontStyle: 'italic' }}>Move.</em>{' '}
              Thrive.
            </h1>

            <p className="font-body text-base sm:text-lg text-text-mid leading-relaxed mb-8 max-w-lg">
              {CLINIC.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#book"
                className="px-6 py-3 rounded-full bg-sage-dark text-white font-body font-medium text-sm hover:bg-sage transition-colors duration-200 shadow-sm">
                Book a Session
              </a>
              <a href="#services"
                className="px-6 py-3 rounded-full border-2 border-sage-dark text-sage-dark font-body font-medium text-sm hover:bg-sage-light/30 transition-colors duration-200">
                Our Services
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6 mt-10">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-body text-sm text-text-mid font-medium">{CLINIC.rating} · {CLINIC.reviews}+ reviews</span>
              </div>
              <div className="w-px h-4 bg-border-warm hidden sm:block" />
              <span className="font-body text-sm text-text-mid">{CLINIC.experience} years of care</span>
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Main card */}
              <div className="bg-gradient-to-br from-sage-light/60 to-terracotta-light/50 rounded-3xl p-8 border border-border-warm shadow-xl">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md mb-4 p-2">
                    <img src="/logo.png" alt="Aayurphysio" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="font-display text-xl text-text-main font-semibold">Aayurphysio</h3>
                  <p className="font-body text-sm text-text-muted mt-1">Wellness Centre, Nigdi</p>
                </div>

                <div className="space-y-3">
                  {['PIVD & Spine Care', "Women's Wellness", 'Sports Rehab', 'Neuro Physiotherapy'].map(s => (
                    <div key={s} className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-sage-dark flex-shrink-0" />
                      <span className="font-body text-sm text-text-mid">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badge — rating */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-border-warm">
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-gold text-gold" />
                  <span className="font-display font-semibold text-lg text-text-main">{CLINIC.rating}</span>
                </div>
                <p className="font-body text-[10px] text-text-muted">Patient Rating</p>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -bottom-4 -left-4 bg-sage-dark rounded-2xl shadow-lg px-4 py-3">
                <span className="font-display font-semibold text-2xl text-white">{CLINIC.experience}</span>
                <p className="font-body text-[10px] text-sage-light">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
