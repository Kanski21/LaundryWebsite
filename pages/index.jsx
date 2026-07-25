import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Calculator from '../components/Calculator'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clear&Shine - Professional Laundry Service</title>
      </Head>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Calculator />
      <Testimonials />
      <Footer />
    </>
  )
}