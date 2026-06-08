import { motion } from 'framer-motion'
import { Activity, Brain, Heart, Zap, Bone, Dumbbell } from 'lucide-react'
import { SERVICES } from '../constants/data'

const iconMap = {
  spine: Zap,
  heart: Heart,
  bone: Bone,
  brain: Brain,
  activity: Activity,
  needle: Dumbbell,
}

const colorMap = {
  sage: { bg: 'bg-sage-light/50', icon: 'text-sage-dark', border: 'hover:border-sage' },
  terracotta: { bg: 'bg-terracotta-light/50', icon: 'text-terracotta', border: 'hover:border-terracotta' },
  bark: { bg: 'bg-bark-light/20', icon: 'text-bark', border: 'hover:border-bark' },
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
          <h2 className="font-display text-4xl sm:text-5xl text-text-main">Specialized Care for Every Body</h2>
          <p className="mt-4 font-body text-text-muted max-w-xl mx-auto text-base">
            Evidence-based therapies tailored to your condition — because no two patients are alike.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Activity
            const c = colorMap[service.color] || colorMap.sage
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`bg-cream rounded-2xl border border-border-warm p-6 cursor-default
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.border}`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} mb-4`}>
                  <Icon size={22} className={c.icon} />
                </div>
                <h3 className="font-display text-lg text-text-main font-semibold mb-2">{service.name}</h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
