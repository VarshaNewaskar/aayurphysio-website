import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Phone, CheckCircle } from 'lucide-react'
import { CLINIC, SERVICES } from '../constants/data'

export default function BookAppointment() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const waUrl = `https://wa.me/${CLINIC.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(CLINIC.whatsappMessage)}`

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setErrors({})
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', phone: '', service: '', message: '' })
  }

  return (
    <section id="book" className="bg-warm-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-sage-light/50 text-sage-dark text-xs font-body font-medium mb-4 uppercase tracking-wider">
            Book Now
          </span>
          <h2 className="font-display text-5xl sm:text-6xl text-text-main font-semibold">Start Your Recovery Today</h2>
          <p className="mt-4 font-body text-text-muted max-w-md mx-auto text-base">
            Reach us on WhatsApp for a quick response, or fill the form and we'll call you back.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-cream rounded-3xl border border-border-warm p-8 flex flex-col"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 mb-5">
              <MessageCircle size={22} className="text-green-600" />
            </div>
            <h3 className="font-display text-2xl text-text-main font-semibold mb-2">WhatsApp Us</h3>
            <p className="font-body text-sm text-text-muted mb-6 leading-relaxed">
              Send us a message and our team will confirm your appointment within minutes.
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-body font-medium text-sm transition-colors duration-200 mb-4"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <p className="font-body text-xs text-text-muted text-center mt-auto">
              Available Mon–Sat, 9am to 7pm
            </p>
          </motion.div>

          {/* Callback form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-cream rounded-3xl border border-border-warm p-8"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-sage-light/60 mb-5">
              <Phone size={22} className="text-sage-dark" />
            </div>
            <h3 className="font-display text-2xl text-text-main font-semibold mb-5">Request a Callback</h3>

            {submitted && (
              <div className="flex items-center gap-2 bg-sage-light/40 border border-sage text-sage-dark rounded-xl px-4 py-3 mb-4 text-sm font-body">
                <CheckCircle size={16} />
                We'll call you to confirm your appointment!
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl border bg-white font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors
                    ${errors.name ? 'border-red-400' : 'border-border-warm'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl border bg-white font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors
                    ${errors.phone ? 'border-red-400' : 'border-border-warm'}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
              </div>
              <select
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-border-warm bg-white font-body text-sm text-text-main focus:outline-none focus:border-sage transition-colors"
              >
                <option value="">Select Service (optional)</option>
                {SERVICES.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
              </select>
              <textarea
                placeholder="Any message or concern... (optional)"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-border-warm bg-white font-body text-sm text-text-main placeholder-text-muted focus:outline-none focus:border-sage transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-sage-dark hover:bg-sage text-white font-body font-medium text-sm transition-colors duration-200"
              >
                Request Callback
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
