import React from 'react'

const partners = [
  { name: '99 Media Group', url: '#' },
  { name: 'Machine Maker', url: '#' },
  { name: 'Evolution Auto India', url: '#' },
  { name: 'EV Mechanica', url: '#' },
  { name: 'SmartEnergy', url: '#' },
  { name: 'EV Unplugged', url: '#' },
  { name: 'ER City Newspaper', url: '#' },
  { name: 'Auto Gorilla', url: '#' },
]

function Logo({ i }) {
  const idx = i % 6
  switch (idx) {
    case 0:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="8" width="70" height="44" rx="8" fill="#22c55e" opacity="0.15" />
          <text x="20" y="38" fontFamily="Segoe UI, Arial" fontSize="24" fontWeight="700" fill="#22c55e">EV</text>
          <circle cx="120" cy="30" r="20" fill="#22c55e" opacity="0.12" />
          <path d="M112 30h16M120 22v16" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          <text x="146" y="36" fontFamily="Segoe UI, Arial" fontSize="14" fill="#0f172a">MAG</text>
        </svg>
      )
    case 1:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 40 L40 20 L60 40 Z" fill="#22c55e" opacity="0.9" />
          <text x="76" y="38" fontFamily="Segoe UI, Arial" fontSize="20" fontWeight="700" fill="#0f172a">Machine</text>
          <text x="76" y="52" fontFamily="Segoe UI, Arial" fontSize="12" fill="#22c55e">Maker</text>
        </svg>
      )
    case 2:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="18" width="36" height="24" rx="4" fill="#22c55e" />
          <path d="M30 25h12M30 31h10" stroke="#fff" strokeWidth="2" />
          <text x="70" y="38" fontFamily="Segoe UI, Arial" fontSize="18" fontWeight="700" fill="#0f172a">Evolution</text>
        </svg>
      )
    case 3:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <g fill="#22c55e">
            <circle cx="34" cy="30" r="14" opacity="0.12" />
            <path d="M26 30h16M34 22v16" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" />
          </g>
          <text x="60" y="36" fontFamily="Segoe UI, Arial" fontSize="18" fontWeight="700" fill="#0f172a">EV Mechanica</text>
        </svg>
      )
    case 4:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <text x="18" y="36" fontFamily="Segoe UI, Arial" fontSize="22" fontWeight="800" fill="#22c55e">Smart</text>
          <text x="90" y="36" fontFamily="Segoe UI, Arial" fontSize="22" fontWeight="600" fill="#0f172a">Energy</text>
        </svg>
      )
    default:
      return (
        <svg className="logo-svg" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 36c4-10 12-16 22-16h24c9 0 16 5 20 12" stroke="#22c55e" strokeWidth="3" fill="none" strokeLinecap="round" />
          <text x="110" y="38" fontFamily="Segoe UI, Arial" fontSize="16" fontWeight="700" fill="#0f172a">Auto</text>
          <text x="150" y="38" fontFamily="Segoe UI, Arial" fontSize="16" fontWeight="800" fill="#22c55e">Gorilla</text>
        </svg>
      )
  }
}

function MediaPartners({ id }) {
  return (
    <section id={id} className="section partners">
      <div className="partners-inner">
        <h2 className="partners-title">Media Partners</h2>
        <div className="partners-grid">
          {partners.map((p, idx) => (
            <a key={p.name} className="partner-card" href={p.url} target="_blank" rel="noreferrer">
              <div className="logo-box" aria-hidden="true">
                <Logo i={idx} />
              </div>
              <div className="partner-name">{p.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MediaPartners
