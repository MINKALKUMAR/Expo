import React from 'react'
import attendBg from '../assets/BGparallex.jpg'  
import attendBg2 from '../assets/BGparallex2.png'  

const items = [
  'DISCOVER NEW-AGE TECHNOLOGIES',
  'BUILD HIGH-VALUE BUSINESS CONNECTIONS',
  'GENERATE QUALIFIED LEADS & BUSINESS DEALS ',
  'STAY AHEAD OF INDUSTRY TRENDS',
  'COLLABORATE WITH INDUSTRY & ACADEMIA',
  'GAIN VISIBILITY & BRAND RECOGNITION',
  'EXPLORE INVESTMENT & EXPANSION OPPORTUNITIES',
  'EXPERIENCE A 360° INDUSTRIAL ECOSYSTEM',
]

export default function WhyAttend({ id }) {
  return (
    <section
      id={id}
      className="attend"
      style={{ backgroundImage: `url(${attendBg})` }}  // 👈 use imported image
    >
      <div className="attend-inner">
        <div className="attend-left"  style={{ backgroundImage: `url(${attendBg2})` }}  aria-hidden="true" />
        <div className="attend-right">
          <h2 className="attend-title">Why To Attend IIEV Show ?</h2>
          <div className="attend-rule" />
          <ul className="attend-list">
            {items.map((t, i) => (
              <li key={i}>
                <span className="attend-bullet" aria-hidden>▸</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
