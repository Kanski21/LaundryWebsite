import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Audiences from '../components/Audiences'
import Process from '../components/Process'
import Textiles from '../components/Textiles'
import Inquiry from '../components/Inquiry'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Clear &amp; Shine – професионално пране и химическо чистене</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <a href="#glavno" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3">Към съдържанието</a>
      <Header />
      <main id="glavno">
        <Hero />
        <Audiences />
        <Process />
        <Textiles />
        <Inquiry />
      </main>
      <Footer />
    </>
  )
}
