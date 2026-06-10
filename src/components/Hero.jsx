import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { CLINIC } from '../constants/data'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-warm-white flex items-center overflow-hidden pt-24">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-sage-light/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 rounded-full bg-terracotta-light/60 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-light/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Tag pill */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-terracotta-light text-terracotta text-sm font-body font-bold mb-7 shadow-sm uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-terracotta inline-block animate-pulse" />
              Holistic Wellness · PCMC, Nigdi
            </span>

            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[1.05] mb-7 font-semibold">
              <span className="gradient-heading">Pain to</span>{' '}
              <em className="text-olive" style={{ fontStyle: 'italic' }}>Power.</em>
            </h1>

            <p className="font-body text-lg sm:text-xl text-text-mid leading-relaxed mb-10 max-w-lg">
              {CLINIC.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#book"
                className="px-8 py-4 rounded-full bg-sage-dark text-white font-body font-semibold text-base hover:bg-bark transition-colors duration-200 shadow-md hover:shadow-lg">
                Book a Session
              </a>
              <a href="#services"
                className="px-8 py-4 rounded-full border-2 border-sage-dark text-sage-dark font-body font-semibold text-base hover:bg-sage-light/50 transition-colors duration-200">
                Our Services
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-border-warm">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <span className="font-body text-base text-text-mid font-semibold">{CLINIC.rating} · {CLINIC.reviews}+ reviews</span>
              </div>
              <div className="w-px h-5 bg-border-warm hidden sm:block" />
              <span className="font-body text-base text-text-mid font-medium">{CLINIC.experience} years of expert care</span>

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
              <div className="bg-gradient-to-br from-sage-light/70 to-terracotta-light/60 rounded-3xl p-8 border border-border-warm shadow-2xl">
                {/* Logo — rounded square to match logo shape */}
                <div className="flex justify-center mb-5">
                  <div className="w-36 h-36 rounded-2xl bg-white shadow-xl p-3 flex items-center justify-center">
                    <img src="/logo.png" alt="Aayurphysio" className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="font-display text-2xl text-text-main font-semibold text-center mb-1">Aayurphysio</h3>
                <p className="font-body text-sm text-text-muted text-center mb-5">Wellness Centre, Nigdi</p>

                <div className="space-y-2.5">
                  {["Women's Wellness", 'Sports Physiotherapy', 'Neuro Physiotherapy', 'Ayurveda & Panchakarma'].map(s => (
                    <div key={s} className="flex items-center gap-3 bg-white/70 rounded-xl px-4 py-2.5">
                      <span className="w-2 h-2 rounded-full bg-sage-dark flex-shrink-0" />
                      <span className="font-body text-sm font-medium text-text-mid">{s}</span>
                    </div>
                  ))}
                </div>

                {/* Badges inside card bottom row — no overflow */}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-warm/60">
                  <div className="flex items-center gap-1.5">
                    <Star size={15} className="fill-gold text-gold" />
                    <span className="font-body font-bold text-sm text-text-main">{CLINIC.rating}</span>
                    <span className="font-body text-xs text-text-muted">rating</span>
                  </div>
                  <div className="h-4 w-px bg-border-warm" />
                  <div className="text-right">
                    <span className="font-display font-bold text-xl text-sage-dark">{CLINIC.experience}</span>
                    <span className="font-body text-xs text-text-muted ml-1">yrs exp</span>
                  </div>
                </div>
              </div>

              {/* Single floating badge — top right only */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-3 py-2.5 border border-border-warm">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-gold text-gold" />
                  <span className="font-body font-bold text-sm text-text-main">Top Rated</span>
                </div>
                <p className="font-body text-[10px] text-text-muted">Nigdi, PCMC</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
