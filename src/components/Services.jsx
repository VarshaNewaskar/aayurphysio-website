import { motion } from 'framer-motion'
import {
  Activity, Brain, Heart, Zap, Bone, Dumbbell,
  Leaf, Apple, Sun, RotateCcw, Footprints
} from 'lucide-react'
import { SERVICES } from '../constants/data'
import SectionLabel from './SectionLabel'

const iconMap = {
  spine: Zap, heart: Heart, bone: Bone, brain: Brain,
  activity: Activity, needle: Dumbbell, leaf: Leaf,
  apple: Apple, sun: Sun, rotate: RotateCcw,
  dumbbell: Dumbbell, footprints: Footprints,
}

const colorMap = {
  sage:       { bg: 'bg-sage-light/70',        icon: 'text-olive',      border: 'hover:border-olive'      },
  terracotta: { bg: 'bg-terracotta-light/70',  icon: 'text-terracotta', border: 'hover:border-terracotta' },
  bark:       { bg: 'bg-bark-light/25',        icon: 'text-bark',       border: 'hover:border-bark'       },
}

export default function Services() {
  return (
    <section id="services" className="relative bg-section-olive overflow-hidden py-28">
      <SectionLabel text="TREATMENTS" color="text-olive/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-olive/15 text-olive text-xs font-body font-bold mb-5 uppercase tracking-widest">
            What We Treat
          </span>
          <div className="section-divider" />
          <h2 className="gradient-heading font-display text-5xl sm:text-6xl font-semibold leading-tight max-w-2xl">
            Specialized Care<br />for Every Body
          </h2>
          <p className="mt-5 font-body text-lg text-text-mid max-w-xl">
            {SERVICES.length} evidence-based therapies — because no two patients are alike.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Activity
            const c = colorMap[service.color] || colorMap.sage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className={`group bg-white rounded-2xl border-2 border-transparent ${c.border}
                  p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-default`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} mb-4
                  transition-transform duration-200 group-hover:scale-110`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="font-display text-xl text-text-main font-semibold mb-2 leading-snug">
                  {service.name}
                </h3>
                <p className="font-body text-sm text-text-mid leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="font-body text-text-muted text-sm mb-4">Not sure which treatment is right for you?</p>
          <a href="#book"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-sage-dark text-white font-body font-bold text-sm
              hover:bg-bark transition-colors duration-200 shadow-lg hover:shadow-xl">
            Talk to Our Specialists →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
