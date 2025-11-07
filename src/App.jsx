import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Categories from './component/Categories'
import MediaPartners from './component/MediaPartners'
import MovingStrip from './component/MovingStrip'
import EventLocation from './component/EventLocation'
import WhyAttend from './component/WhyAttend'
import Stats from './component/Stats'
import Footer from './component/Footer'
import Speakers from './component/Speakers'
import FAQ from './component/FAQ'
function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    const el = document.getElementById(page)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [page])

  return (
    <>
      <Navbar current={page} onNavigate={setPage} />
      <main className="page">
        <Home id="home" />
        <About id="about" />
        <WhyAttend id="attend" />
        <MovingStrip id="strip" />
        <Stats id="stats" />
        {/*<Speakers id="speakers" /> */}
        <Categories id="categories" />
        <MediaPartners id="partners" />
        <EventLocation id="location" />
        <FAQ id="faq" />
      </main>
      <Footer />
    </>
  )
}

export default App
