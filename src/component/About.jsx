import React from 'react'

function About({ id }) {
  return (
    <section id={id} className="section about-parallax">
      <div className="about-content">
        <div className="about-text">
          <h1>Experience The Electric Vehicles Revolution</h1>
          <p>
            India International EV Show (IIEV Show) is India's premier gathering for the Electric
            Vehicles (EVs) & Energy Storage System industry. It serves as a common platform that brings
            together engineers, mechanics, scientists, and decision-makers to address the challenges and
            explore the vast opportunities in EV development in India. Our show is dedicated to showcasing
            the latest EV trends and technologies, fostering collaborations, and exchanging groundbreaking
            ideas with experts and industry visionaries. Join us to delve into the future of the EV industry
            and discover the potential of sustainable mobility.
          </p>
          <div className="cta-row">
            <button className="btn primary">BROCHURE</button>
          </div>
        </div>
        <div className="about-visual" aria-hidden="true">
          <svg
            className="ev-illustration"
            viewBox="0 0 256 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="evg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,197,94,0.15)" />
                <stop offset="100%" stopColor="rgba(34,197,94,0.05)" />
              </linearGradient>
            </defs>
            <rect x="8" y="16" width="240" height="120" rx="16" fill="url(#evg)" />
            <path d="M32 92c10-22 28-34 52-34h46c18 0 34 10 42 26l6 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="84" cy="116" r="16" fill="#fff" stroke="currentColor" strokeWidth="3" />
            <circle cx="176" cy="116" r="16" fill="#fff" stroke="currentColor" strokeWidth="3" />
            <path d="M62 116h44M154 116h44" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            <path d="M196 60l16-10-6 14h12l-20 16 6-12h-8z" fill="currentColor"/>
            <path d="M48 76h32M120 76h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default About

