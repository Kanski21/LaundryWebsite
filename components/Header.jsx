import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 bg-gradient-to-br from-primary to-secondary rounded flex items-center justify-center text-white font-bold text-xl">CS</div>
            <div>
              <h1 className="text-xl font-bold text-primary">Clear&Shine</h1>
              <p className="text-xs text-gray-600">Professional Laundry</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
            <a href="#pricing" className="text-gray-700 hover:text-primary transition">Pricing</a>
            <a href="#calculator" className="text-gray-700 hover:text-primary transition">Calculator</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition">Testimonials</a>
          </nav>
          <div className="hidden md:block">
            <a href="tel:+359888004606" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-accent transition">Call Now</a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 space-y-4">
            <a href="#services" className="block text-gray-700 hover:text-primary">Services</a>
            <a href="#pricing" className="block text-gray-700 hover:text-primary">Pricing</a>
            <a href="#calculator" className="block text-gray-700 hover:text-primary">Calculator</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-primary">Testimonials</a>
            <a href="tel:+359888004606" className="block bg-primary text-white px-6 py-2 rounded-lg text-center">Call Now</a>
          </nav>
        )}
      </div>
    </header>
  )
}