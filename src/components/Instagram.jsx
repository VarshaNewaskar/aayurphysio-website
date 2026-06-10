import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
import SectionLabel from './SectionLabel'

// After setup: paste your Behold.so feed URL here
const BEHOLD_FEED_URL = ''
const INSTAGRAM_HANDLE = '@aayurphysiowellness'
const INSTAGRAM_URL = 'https://www.instagram.com/aayurphysiowellness/'

export default function InstagramFeed() {
  return (
    <section id="instagram" className="relative bg-section-navy overflow-hidden py-28">
      <SectionLabel text="INSTAGRAM" color="text-white/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-bark-light text-xs font-body font-bold mb-5 uppercase tracking-widest">
              <Instagram size={13} /> Follow Us
            </span>
            <div className="section-divider" />
            <h2 className="gradient-heading-light font-display text-5xl sm:text-6xl font-semibold leading-tight">
              Life at Aayurphysio
            </h2>
            <p className="mt-3 font-body text-base text-bark-light/70">
              Real stories, tips and moments from our clinic — follow us on Instagram.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-body font-bold text-sm
              hover:bg-white/15 transition-colors duration-200 flex-shrink-0"
          >
            <Instagram size={16} />
            {INSTAGRAM_HANDLE}
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Feed embed or setup prompt */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {BEHOLD_FEED_URL ? (
            /* Live Behold.so feed */
            <div className="w-full rounded-3xl overflow-hidden" style={{ minHeight: '480px' }}>
              <div
                id="behold-widget"
                dangerouslySetInnerHTML={{
                  __html: `<script src="${BEHOLD_FEED_URL}"></script>`,
                }}
              />
            </div>
          ) : (
            /* Setup prompt — shows until Behold is connected */
            <div className="rounded-3xl border-2 border-dashed border-white/20 p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                Connect Your Instagram Feed
              </h3>
              <p className="font-body text-sm text-bark-light/70 max-w-md mx-auto mb-8">
                Your latest posts from <strong className="text-white">@aayurphysiowellness</strong> will appear here automatically once connected.
              </p>

              {/* Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  { step: '01', text: 'Go to behold.so and create a free account' },
                  { step: '02', text: 'Connect @aayurphysiowellness and get your feed URL' },
                  { step: '03', text: 'Paste the URL into Instagram.jsx → BEHOLD_FEED_URL' },
                ].map(s => (
                  <div key={s.step} className="bg-white/8 rounded-2xl p-4 border border-white/15 text-left">
                    <div className="font-body font-black text-2xl text-white/20 mb-2">{s.step}</div>
                    <div className="font-body text-xs text-bark-light/70 leading-relaxed">{s.text}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://behold.so"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sage-dark font-body font-bold text-sm hover:bg-bark-light transition-colors"
              >
                Set up Behold.so (free) <ExternalLink size={14} />
              </a>
            </div>
          )}
        </motion.div>

        {/* Bottom Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-bark-light/70 hover:text-white transition-colors"
          >
            <Instagram size={16} />
            Follow us for daily health tips, patient stories and clinic updates
          </a>
        </motion.div>
      </div>
    </section>
  )
}
