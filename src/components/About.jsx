import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CLINIC, TEAM } from '../constants/data'
import SectionLabel from './SectionLabel'

const avatarColor = {
  sage:       'bg-sage-light text-olive',
  terracotta: 'bg-terracotta-light text-terracotta',
  bark:       'bg-bark-light/30 text-bark',
}

const highlights = [
  'Evidence-based protocols for every condition',
  `Rated ${CLINIC.rating}★ by ${CLINIC.reviews}+ satisfied patients`,
  'Holistic approach — Physio, Ayurveda, Nutrition & Yoga',
  'First-of-its-kind multi-specialty wellness hub in Pune',
]

export default function About() {
  return (
    <>
      {/* ── About Us ───────────────────────────────────────── */}
      <section id="about" className="relative bg-section-blue overflow-hidden py-28">
        <SectionLabel text="ABOUT" color="text-sage-dark/8" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Stats panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl bg-gradient-to-br from-sage-dark to-bark p-8 border border-bark/30 shadow-2xl text-white">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[
                    { value: CLINIC.experience, label: 'Years of Care' },
                    { value: '9', label: 'Specialists' },
                    { value: `${CLINIC.reviews}+`, label: 'Happy Patients' },
                  ].map(stat => (
                    <div key={stat.label} className="bg-white/10 rounded-2xl p-4 text-center border border-white/20">
                      <div className="font-display text-4xl font-bold text-white">{stat.value}</div>
                      <div className="font-body text-[10px] text-bark-light/80 mt-1 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-4 border border-white/20">
                  <img src="/logo.png" alt="Aayurphysio" className="w-12 h-12 object-contain rounded-xl bg-white p-1" />
                  <div>
                    <div className="font-body font-bold text-white text-sm">Aayurphysio Wellness Centre</div>
                    <div className="font-body text-xs text-bark-light/70">Pune's first multi-specialty wellness hub</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-sage-dark/10 text-sage-dark text-xs font-body font-bold mb-5 uppercase tracking-widest">
                About Us
              </span>
              <div className="section-divider" />
              <h2 className="gradient-heading font-display text-5xl sm:text-6xl font-semibold mb-6 leading-tight">
                Where Science Meets the Wisdom of Healing
              </h2>
              <p className="font-body text-base text-text-mid leading-relaxed mb-4">
                Aayurphysio Wellness Centre was founded with one mission — to bring truly holistic, evidence-based care. Located in Pune, our multi-specialty team believes recovery goes far beyond the treatment table.
              </p>
              <p className="font-body text-base text-text-mid leading-relaxed mb-8">
                From neurological rehab to pregnancy wellness and elite sports recovery, we ensure every patient leaves with a plan — not just a prescription.
              </p>
              <ul className="space-y-3">
                {highlights.map(h => (
                  <li key={h} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-olive mt-0.5 flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-text-mid">{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Meet Our Team ──────────────────────────────────── */}
      <section id="team" className="relative bg-section-navy overflow-hidden py-28">
        <SectionLabel text="OUR TEAM" color="text-white/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-bark-light text-xs font-body font-bold mb-5 uppercase tracking-widest">
              The Team
            </span>
            <div className="section-divider-light" />
            <h2 className="gradient-heading-light font-display text-5xl sm:text-6xl font-semibold leading-tight">
              Meet Our Specialists
            </h2>
            <p className="mt-4 font-body text-base text-bark-light/70 max-w-xl">
              A multi-disciplinary team of doctors, therapists and coaches — all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="flex items-start gap-4 bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/15
                  px-5 py-4 hover:bg-white/15 hover:border-white/30 transition-all duration-200 group"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-body font-black text-sm flex-shrink-0 ${avatarColor[member.color]}`}>
                  {member.initials.replace('2', '')}
                </div>
                <div>
                  <div className="font-body text-sm font-bold text-white leading-snug">{member.name}</div>
                  {member.qualifications && (
                    <div className="font-body text-xs text-bark-light/60 mt-0.5">{member.qualifications}</div>
                  )}
                  <div className="font-body text-xs text-cyan font-semibold mt-1">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
