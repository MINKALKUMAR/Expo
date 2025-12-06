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
import Gallery from './component/Gallery'
import AboutOrganizer from './component/AboutOrganizer'
import ExhibitionStall from './component/ExhibitionStall'
import WhyMuzaffarnagar from './component/WhyMuzaffarnagar'
import PartnersSection from './component/PartnersSection'
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
        <Gallery id="gallery" />
        <Stats id="stats" />
        <ExhibitionStall id="exhibition" />
        <WhyMuzaffarnagar id="why-muzaffarnagar" />
        <PartnersSection id="partners-section" />
        {/*<Speakers id="speakers" /> */}
        <Categories id="categories" />
        {/* <MediaPartners id="partners" /> */}
        <EventLocation id="location" />
        <AboutOrganizer id="organizer" />
        <FAQ id="faq" />
      </main>
      <Footer />
    </>
  )
}

export default App
