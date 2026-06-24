import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import BookAppointment from './components/BookAppointment'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/Instagram'
import Branches from './components/Branches'
import Footer from './components/Footer'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <BookAppointment />
      <Testimonials />
      <InstagramFeed />
      <Branches />
      <Footer />

      {/* Scroll to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-sage-dark text-white flex items-center justify-center shadow-lg hover:bg-sage transition-colors duration-200"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}
