import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { CLINIC, TEAM } from '../constants/data'

const avatarColor = {
  sage: 'bg-sage-light text-sage-dark',
  terracotta: 'bg-terracotta-light text-terracotta',
  bark: 'bg-bark-light/30 text-bark',
}

const highlights = [
  'Evidence-based protocols for every condition',
  `Rated ${CLINIC.rating}★ by ${CLINIC.reviews}+ satisfied patients`,
  'Holistic approach: body, movement & nutrition',
  'First-of-its-kind wellness hub in PCMC, Nigdi',
]

export default function About() {
  return (
    <section id="about" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top — two column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Stats panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-3xl bg-gradient-to-br from-sage-light/60 to-terracotta-light/50 p-8 border border-border-warm">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/70 rounded-2xl p-5 text-center border border-border-warm">
                  <div className="font-display text-4xl font-semibold text-sage-dark">{CLINIC.experience}</div>
                  <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wide">Years of Care</div>
                </div>
                <div className="bg-white/70 rounded-2xl p-5 text-center border border-border-warm">
                  <div className="font-display text-4xl font-semibold text-terracotta">9</div>
                  <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wide">Specialists</div>
                </div>
              </div>
              <div className="bg-white/60 rounded-2xl p-5 text-center border border-border-warm">
                <div className="font-display text-4xl font-semibold text-sage-dark">{CLINIC.reviews}+</div>
                <div className="font-body text-xs text-text-muted mt-1 uppercase tracking-wide">Happy Patients</div>
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
            <span className="inline-block px-3 py-1 rounded-full bg-terracotta-light text-terracotta text-xs font-body font-medium mb-5 uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-5xl sm:text-6xl text-text-main font-semibold mb-6 leading-tight">
              Where Science Meets the Wisdom of Healing
            </h2>
            <p className="font-body text-lg text-text-mid leading-relaxed mb-4">
              Aayurphysio Wellness Centre was founded with one mission — to bring truly holistic, evidence-based physiotherapy to PCMC. Located near BHEL Chowk, Nigdi, we are a team of passionate therapists who believe that recovery goes beyond the treatment table.
            </p>
            <p className="font-body text-text-mid leading-relaxed mb-8">
              From complex neurological rehab to pregnancy wellness and elite sports recovery, our multi-disciplinary approach ensures that every patient leaves with a plan — not just a prescription.
            </p>
            <ul className="space-y-3">
              {highlights.map(h => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-sage-dark mt-0.5 flex-shrink-0" />
                  <span className="font-body text-sm text-text-mid">{h}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Team grid — all 9 members */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-sage-light/50 text-sage-dark text-xs font-body font-medium mb-4 uppercase tracking-wider">
              Our Team
            </span>
            <h3 className="font-display text-4xl sm:text-5xl text-text-main font-semibold">Meet Our Specialists</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-4 bg-warm-white rounded-2xl border border-border-warm px-5 py-4 hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-body font-bold text-sm flex-shrink-0 ${avatarColor[member.color]}`}>
                  {member.initials.replace('2', '')}
                </div>
                <div>
                  <div className="font-body text-sm font-bold text-text-main leading-snug">{member.name}</div>
                  {member.qualifications && (
                    <div className="font-body text-xs text-text-muted mt-0.5">{member.qualifications}</div>
                  )}
                  <div className="font-body text-xs text-sage-dark font-medium mt-1">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
