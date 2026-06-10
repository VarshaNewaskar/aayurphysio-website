import { motion } from 'framer-motion'
import {
  Activity, Brain, Heart, Zap, Bone, Dumbbell,
  Leaf, Apple, Sun, RotateCcw, Footprints
} from 'lucide-react'
import { SERVICES } from '../constants/data'

const iconMap = {
  spine: Zap,
  heart: Heart,
  bone: Bone,
  brain: Brain,
  activity: Activity,
  needle: Dumbbell,
  leaf: Leaf,
  apple: Apple,
  sun: Sun,
  rotate: RotateCcw,
  dumbbell: Dumbbell,
  footprints: Footprints,
}

const colorMap = {
  sage: {
    bg: 'bg-sage-light/60',
    icon: 'text-sage-dark',
    hover: 'hover:border-sage',
  },
  terracotta: {
    bg: 'bg-terracotta-light/60',
    icon: 'text-terracotta',
    hover: 'hover:border-terracotta',
  },
  bark: {
    bg: 'bg-bark-light/20',
    icon: 'text-bark',
    hover: 'hover:border-bark',
  },
}

export default function Services() {
  return (
    <section id="services" className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sage-light/50 text-sage-dark text-xs font-body font-medium mb-4 uppercase tracking-wider">
            What We Treat
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-text-main font-semibold mb-4">
            Specialized Care for Every Body
          </h2>
          <p className="font-body text-lg text-text-mid max-w-xl mx-auto">
            {SERVICES.length} evidence-based therapies tailored to your condition — because no two patients are alike.
          </p>
        </motion.div>

        {/* Flat grid — all services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Activity
            const c = colorMap[service.color] || colorMap.sage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
                className={`group bg-cream rounded-2xl border border-border-warm p-6
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.hover} cursor-default`}
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-14"
        >
          <p className="font-body text-text-muted text-sm mb-4">Not sure which treatment is right for you?</p>
          <a href="#book"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-sage-dark text-white font-body font-semibold text-sm hover:bg-bark transition-colors duration-200 shadow-md">
            Talk to Our Specialists
          </a>
        </motion.div>

      </div>
    </section>
  )
}
