import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
import SectionLabel from './SectionLabel'

// ─── SETUP INSTRUCTIONS ───────────────────────────────────────────────────────
// 1. Go to elfsight.com → Sign up free
// 2. Search "Instagram Feed" → Create widget
// 3. Connect @aayurphysiowellness
// 4. Publish → copy the App ID (looks like: eae12345-xxxx-xxxx-xxxx-xxxxxxxxxxxx)
// 5. Paste it below replacing YOUR_ELFSIGHT_APP_ID
// ─────────────────────────────────────────────────────────────────────────────
const ELFSIGHT_APP_ID = 'aaf636ea-1566-42da-be20-8db4528eff0a'   // ← paste your Elfsight App ID here

const INSTAGRAM_HANDLE = '@aayurphysiowellness'
const INSTAGRAM_URL    = 'https://www.instagram.com/aayurphysiowellness/'

export default function InstagramFeed() {
  useEffect(() => {
    if (!ELFSIGHT_APP_ID) return
    // Load Elfsight platform script once
    if (document.querySelector('script[src*="elfsight"]')) return
    const script = document.createElement('script')
    script.src  = 'https://static.elfsight.com/platform/platform.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

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
            <div className="section-divider-light" />
            <h2 className="gradient-heading-light font-display text-5xl sm:text-6xl font-semibold leading-tight">
              Life at Aayurphysio
            </h2>
            <p className="mt-3 font-body text-base text-bark-light/70">
              Real stories, tips and moments — follow us on Instagram.
            </p>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white
              font-body font-bold text-sm hover:bg-white/15 transition-colors duration-200 flex-shrink-0"
          >
            <Instagram size={16} />
            {INSTAGRAM_HANDLE}
            <ExternalLink size={13} />
          </a>
        </motion.div>

        {/* Feed or setup guide */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {ELFSIGHT_APP_ID ? (
            /* ── Live Elfsight feed ── */
            <div className="w-full rounded-3xl overflow-hidden bg-white/5 p-4">
              <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} />
            </div>
          ) : (
            /* ── Setup guide (shown until Elfsight is connected) ── */
            <div className="rounded-3xl border-2 border-dashed border-white/20 p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6">
                <Instagram size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl text-white font-semibold mb-3">
                Connect Your Instagram Feed
              </h3>
              <p className="font-body text-sm text-bark-light/70 max-w-md mx-auto mb-8">
                Your latest posts from{' '}
                <strong className="text-white">@aayurphysiowellness</strong>{' '}
                will appear here automatically once connected.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
                {[
                  { step: '01', text: 'Go to elfsight.com → Sign up free (no credit card needed)' },
                  { step: '02', text: 'Create an "Instagram Feed" widget and connect @aayurphysiowellness' },
                  { step: '03', text: 'Copy your App ID and paste it into Instagram.jsx → ELFSIGHT_APP_ID' },
                ].map(s => (
                  <div key={s.step} className="bg-white/[0.08] rounded-2xl p-5 border border-white/15 text-left">
                    <div className="font-body font-black text-3xl text-white/20 mb-2">{s.step}</div>
                    <div className="font-body text-xs text-bark-light/70 leading-relaxed">{s.text}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://elfsight.com/instagram-feed-widget/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-sage-dark
                  font-body font-bold text-sm hover:bg-bark-light transition-colors shadow-md"
              >
                Set up on Elfsight (free) <ExternalLink size={14} />
              </a>
            </div>
          )}
        </motion.div>

        {/* Bottom follow CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-bark-light/60 hover:text-white transition-colors"
          >
            <Instagram size={15} />
            Follow us for daily health tips, patient stories and clinic updates
          </a>
        </motion.div>
      </div>
    </section>
  )
}
