import { useEffect, useState, useRef } from 'react'
import { Disclosure } from '@headlessui/react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services', section: 'services' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Our Team', href: '#team', section: 'team' },
  { label: 'Testimonials', href: '#testimonials', section: 'testimonials' },
  { label: 'Find Us', href: '#contact', section: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const observerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.section)
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    elements.forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <Disclosure as="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b border-border-warm
        ${scrolled ? 'bg-warm-white/95 shadow-md' : 'bg-warm-white/80'}`}
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <a href="#hero" className="flex items-center gap-3">
                <img src="/logo.png" alt="Aayurphysio Wellness Centre" className="h-20 w-auto object-contain" />
                <div className="leading-tight">
                  <div className="font-body font-bold text-[#1A3A6C] text-lg tracking-widest uppercase">Aayurphysio</div>
                  <div className="font-body font-semibold text-[#1A3A6C] text-sm tracking-wide">Wellness Centre</div>
                </div>
              </a>

              {/* Desktop nav links */}
              <div className="hidden md:flex items-center gap-7">
                {navLinks.map(link => {
                  const isActive = activeSection === link.section
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className={`relative font-body text-base font-medium transition-colors duration-200
                        ${isActive ? 'text-sage-dark' : 'text-text-mid hover:text-sage-dark'}`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-sage to-cyan" />
                      )}
                    </a>
                  )
                })}
              </div>

              {/* CTA + Mobile toggle */}
              <div className="flex items-center gap-3">
                <a href="#book"
                  className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-sage-dark text-white text-sm font-body font-medium hover:bg-sage transition-colors duration-200 shadow-sm">
                  Book Appointment
                </a>
                <Disclosure.Button className="md:hidden p-2 rounded-lg text-text-mid hover:bg-cream transition-colors">
                  {open ? <X size={20} /> : <Menu size={20} />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden bg-warm-white border-t border-border-warm">
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(link => {
                const isActive = activeSection === link.section
                return (
                  <Disclosure.Button
                    as="a"
                    key={link.label}
                    href={link.href}
                    className={`font-body text-sm py-2.5 px-3 rounded-lg transition-colors
                      ${isActive
                        ? 'text-sage-dark bg-sage-light/30 font-semibold'
                        : 'text-text-mid hover:text-sage-dark hover:bg-cream'}`}
                  >
                    {link.label}
                  </Disclosure.Button>
                )
              })}
              <a href="#book"
                className="mt-2 text-center px-4 py-2.5 rounded-full bg-sage-dark text-white text-sm font-medium hover:bg-sage transition-colors">
                Book Appointment
              </a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
