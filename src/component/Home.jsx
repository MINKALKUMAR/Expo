
// export default Home
import React from 'react'
import logo from '../assets/logo/logo.png'
function Home({ id }) {
  return (
    <section id={id} className="hero">
      <div className="hero-content">
        <div className="hero-card">
          <div className="logo-container">
            <img src={logo} alt="Uttar Bharat Udyog Expo Logo" className="hero-logo" />
          </div>
          <h1>THE GRAND LAUNCH OF LARGEST</h1>
          <div className="edition">sTARTUPS, rENEWABLE ENERGY,eLECTRIC VEHICLE AND MANUFACUTRING INDUSTRIES EXHIBITION</div>
          <h2>UTTAR BHARAT UDYOG EXPO 2026</h2>
          <p className="meta">21st - 22nd January , 2026 | Hotel Plasa , Muzaffarnagar, U.P. , India</p>
          <div className="cta-row">
            <button className="btn primary">Visitor Registration</button>
            <button className="btn outline">Exhibitor Registration</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
