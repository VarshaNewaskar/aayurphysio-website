import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    border: 'hover:border-sage group-hover:border-sage',
    badge: 'bg-sage-light text-sage-dark',
  },
  terracotta: {
    bg: 'bg-terracotta-light/60',
    icon: 'text-terracotta',
    border: 'hover:border-terracotta',
    badge: 'bg-terracotta-light text-terracotta',
  },
  bark: {
    bg: 'bg-bark-light/20',
    icon: 'text-bark',
    border: 'hover:border-bark',
    badge: 'bg-bark-light/30 text-bark',
  },
}

const tabs = [
  {
    id: 'physiotherapy',
    label: 'Physiotherapy',
    emoji: '🦴',
    description: 'Evidence-based rehab for pain, injury and movement disorders',
  },
  {
    id: 'wellness',
    label: 'Wellness & Lifestyle',
    emoji: '🌿',
    description: 'Holistic programs for long-term health and vitality',
  },
  {
    id: 'specialised',
    label: 'Specialised Care',
    emoji: '✨',
    description: 'Advanced assessments and targeted treatment programs',
  },
]

function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Activity
  const c = colorMap[service.color] || colorMap.sage

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`group bg-warm-white rounded-2xl border border-border-warm p-6
        transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${c.border} cursor-default`}
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.bg} mb-4 transition-transform duration-200 group-hover:scale-110`}>
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
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('physiotherapy')

  const allServices = [
    ...SERVICES.physiotherapy,
    ...SERVICES.wellness,
    ...SERVICES.specialised,
  ]
  const totalCount = allServices.length

  return (
    <section id="services" className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sage-light/50 text-sage-dark text-xs font-body font-medium mb-4 uppercase tracking-wider">
            What We Treat
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-text-main font-semibold mb-4">
            Specialized Care for Every Body
          </h2>
          <p className="font-body text-lg text-text-mid max-w-xl mx-auto mb-6">
            {totalCount} evidence-based therapies tailored to your condition — because no two patients are alike.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center gap-3 mb-10"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center sm:items-start px-6 py-4 rounded-2xl border-2 transition-all duration-200 text-left min-w-[180px]
                ${activeTab === tab.id
                  ? 'bg-sage-dark border-sage-dark text-white shadow-lg scale-[1.02]'
                  : 'bg-cream border-border-warm text-text-mid hover:border-sage hover:bg-sage-light/20'}`}
            >
              <span className="text-xl mb-1">{tab.emoji}</span>
              <span className={`font-body font-semibold text-sm ${activeTab === tab.id ? 'text-white' : 'text-text-main'}`}>
                {tab.label}
              </span>
              <span className={`font-body text-xs mt-0.5 leading-tight ${activeTab === tab.id ? 'text-sage-light' : 'text-text-muted'}`}>
                {tab.description}
              </span>
              <span className={`mt-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-sage-light/50 text-sage-dark'
              }`}>
                {SERVICES[tab.id].length} services
              </span>
            </button>
          ))}
        </motion.div>

        {/* Service cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {SERVICES[activeTab].map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
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
