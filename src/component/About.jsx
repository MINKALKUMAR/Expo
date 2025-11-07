import React from 'react'
import aboutImg from '../assets/EV.jpg'  // 🖼️ use your image path here

function About({ id }) {
  return (
    <section id={id} className="section about-parallax">
      <div className="about-content">
        <div className="about-text">
          <h1>Empowering North India’s Growth Through Innovation, Industry & Collaboration</h1>
          <p>
            The Uttar Bharat Udyog Expo 2026 is North India’s largest business, education, and industrial exhibition, dedicated to advancing innovation, entrepreneurship, and sustainable industrial growth.
            This flagship initiative will bring together industry pioneers, policymakers, global education leaders, investors, and entrepreneurs under one roof to explore transformative solutions shaping the future of India’s industrial and economic landscape.
            The Expo serves as a strategic platform to showcase emerging technologies, foster collaborations, and unlock new opportunities across diverse sectors — from renewable energy and electric mobility to manufacturing, education tech, and rural development.
          </p>
          <div className="cta-row">
            <button className="btn primary">BROCHURE</button>
          </div>
        </div>

        {/* Image instead of SVG */}
        <div className="about-visual" aria-hidden="true">
          <img src={aboutImg} alt="About Uttar Bharat Udyog Expo" className="about-image" />
        </div>
      </div>
    </section>
  )
}

export default About
