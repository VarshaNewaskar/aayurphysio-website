import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ExternalLink, Send, CheckCircle, MessageSquare, ThumbsUp } from 'lucide-react'
import { TESTIMONIALS, CLINIC } from '../constants/data'

function StarPicker({ value, onChange }) {
  const [hovered, setHovered] = useState(0)
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          onMouseEnter={() => setHovered(n)}
          onMouseLeave={() => setHovered(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={28}
            className={`transition-colors ${
              n <= (hovered || value) ? 'fill-gold text-gold' : 'text-border-warm fill-border-warm'
            }`}
          />
        </button>
      ))}
    </div>
  )
}

const ratingLabel = { 1: 'Poor', 2: 'Fair', 3: 'Good', 4: 'Very Good', 5: 'Excellent' }

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('reviews')
  const [rating, setRating] = useState(0)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.message.trim()) e.message = 'Please share your experience'
    if (!rating) e.rating = 'Please select a rating'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    // Build mailto link
    const subject = encodeURIComponent(`Patient Review from ${form.name} — ${rating}★`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone || 'Not provided'}\nRating: ${rating}/5 (${ratingLabel[rating]})\n\nReview:\n${form.message}`
    )
    window.open(`mailto:${CLINIC.email}?subject=${subject}&body=${body}`)
    setSubmitted(true)
    setForm({ name: '', phone: '', message: '' })
    setRating(0)
  }

  const tabs = [
    { id: 'reviews', label: 'Patient Reviews', icon: ThumbsUp },
    { id: 'write', label: 'Write a Review', icon: MessageSquare },
  ]

  return (
    <section id="testimonials" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-terracotta-light text-terracotta text-xs font-body font-medium mb-4 uppercase tracking-wider">
            Patient Stories
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-text-main font-semibold mb-4">
            What Our Patients Say
          </h2>

          {/* Google rating strip */}
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 border border-border-warm shadow-sm mt-2">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            <div className="flex items-center gap-1.5">
              <span className="font-body font-bold text-text-main text-lg">{CLINIC.rating}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15}
                    className={i < Math.round(parseFloat(CLINIC.rating)) ? 'fill-gold text-gold' : 'fill-border-warm text-border-warm'} />
                ))}
              </div>
              <span className="font-body text-sm text-text-muted">({CLINIC.reviews} reviews)</span>
            </div>
            <div className="w-px h-5 bg-border-warm" />
            <a
              href={CLINIC.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-body text-sm text-sage-dark font-medium hover:underline"
            >
              View on Google <ExternalLink size={13} />
            </a>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-warm-white rounded-2xl p-1.5 border border-border-warm shadow-sm gap-1">
            {tabs.map(tab => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSubmitted(false) }}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-body text-sm font-medium transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-sage-dark text-white shadow-md'
                      : 'text-text-muted hover:text-text-main'}`}
                >
                  <Icon size={15} />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === 'reviews' && (
            <motion.div
              key="reviews"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="bg-warm-white border border-border-warm rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow duration-200"
                  >
                    {/* Quote + stars */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="font-display text-5xl text-gold/40 leading-none select-none">"</div>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} size={13} className="fill-gold text-gold" />
                        ))}
                      </div>
                    </div>

                    <p className="font-body text-sm text-text-mid leading-relaxed italic flex-1 mb-6">
                      {t.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border-warm">
                      <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center font-body text-sm font-bold text-sage-dark flex-shrink-0">
                        {t.initials}
                      </div>
                      <div>
                        <div className="font-body text-sm font-semibold text-text-main">{t.name}</div>
                        <div className="font-body text-xs text-text-muted">{t.location}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Google CTA */}
              <div className="text-center mt-10">
                <a
                  href={CLINIC.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sage-dark text-sage-dark font-body font-semibold text-sm hover:bg-sage-light/40 transition-colors duration-200"
                >
                  <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
                  Read all reviews on Google
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          )}

          {activeTab === 'write' && (
            <motion.div
              key="write"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl mx-auto"
            >
              <div className="bg-warm-white rounded-3xl border border-border-warm shadow-md p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-light mb-5">
                      <CheckCircle size={32} className="text-sage-dark" />
                    </div>
                    <h3 className="font-display text-2xl text-text-main font-semibold mb-2">Thank You!</h3>
                    <p className="font-body text-text-mid text-sm mb-6">
                      Your review has been sent to us. We truly appreciate your feedback!
                    </p>
                    <p className="font-body text-xs text-text-muted mb-6">
                      Would you also like to share it on Google so others can find us?
                    </p>
                    <a
                      href={CLINIC.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-sage-dark text-white font-body text-sm font-medium hover:bg-sage transition-colors"
                    >
                      <img src="https://www.google.com/favicon.ico" alt="" className="w-4 h-4" />
                      Post on Google too
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="block mx-auto mt-4 font-body text-xs text-text-muted hover:text-text-main underline"
                    >
                      Submit another review
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl text-text-main font-semibold mb-1">Share Your Experience</h3>
                    <p className="font-body text-sm text-text-muted mb-6">Your feedback helps us improve and helps other patients choose the right care.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Star rating */}
                      <div>
                        <label className="font-body text-sm font-medium text-text-main block mb-2">Your Rating *</label>
                        <div className="flex items-center gap-3">
                          <StarPicker value={rating} onChange={setRating} />
                          {rating > 0 && (
                            <span className="font-body text-sm font-semibold text-sage-dark">{ratingLabel[rating]}</span>
                          )}
                        </div>
                        {errors.rating && <p className="mt-1 text-xs text-red-500">{errors.rating}</p>}
                      </div>

                      {/* Name */}
                      <div>
                        <label className="font-body text-sm font-medium text-text-main block mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Rahul K."
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          className={`w-full px-4 py-3 rounded-xl border bg-cream font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors
                            ${errors.name ? 'border-red-400' : 'border-border-warm'}`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                      </div>

                      {/* Phone optional */}
                      <div>
                        <label className="font-body text-sm font-medium text-text-main block mb-1.5">
                          Phone <span className="text-text-muted font-normal">(optional)</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          className="w-full px-4 py-3 rounded-xl border border-border-warm bg-cream font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors"
                        />
                      </div>

                      {/* Review */}
                      <div>
                        <label className="font-body text-sm font-medium text-text-main block mb-1.5">Your Experience *</label>
                        <textarea
                          placeholder="Tell us about your treatment, the team, and how you feel now..."
                          value={form.message}
                          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-xl border bg-cream font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors resize-none
                            ${errors.message ? 'border-red-400' : 'border-border-warm'}`}
                        />
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </div>

                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-sage-dark hover:bg-bark text-white font-body font-semibold text-sm transition-colors duration-200 shadow-md"
                      >
                        <Send size={15} />
                        Submit Review
                      </button>

                      <p className="font-body text-xs text-text-muted text-center">
                        Your review will be sent to our team at {CLINIC.email}
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
