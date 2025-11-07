import React from 'react'

function Contact({ title, name, email, phone }) {
  return (
    <div className="foot-card">
      <div className="foot-title">{title}</div>
      <div className="foot-name">{name}</div>
      <a className="foot-link" href={`mailto:${email}`}>{email}</a>
      <a className="foot-link" href={`tel:${phone.replace(/\s+/g,'')}`}>{phone}</a>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="foot-grid">
          <Contact
            title="Sponsorship & Exhibition"
            name="Priyansh Saharawat"
            email="priyansh@fintrexmedia.com"
            phone="7011499056"
          />
          <Contact
            title="Speaking & Award Nomination"
            name="Priyanshi Choudhary"
            email="priyanshi@fintrexmedia.com"
            phone="8755676010"
          />
          <Contact
            title="Delegate Opportunity"
            name="Basant Sharma"
            email="basant@fintrexmedia.com"
            phone="75050 24107"
          />
        </div>
        <div className="foot-bottom">
          <div className="brand">
            <span className="logo-mark">⚡</span>
            <span className="brand-text">EV Expo</span>
          </div>
          <div className="copy">© {new Date().getFullYear()} All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
