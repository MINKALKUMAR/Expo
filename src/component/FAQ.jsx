import React, { useState } from 'react'

const QA = [
  {
    q: 'What is the focus of the EV Expo?',
    a: 'A showcase of cutting-edge EVs, charging, batteries, components and mobility tech with business networking.'
  },
  {
    q: 'Who can attend?',
    a: 'Manufacturers, suppliers, fleet owners, startups, investors, policymakers, students and EV enthusiasts.'
  },
  {
    q: 'How do I register as a delegate or exhibitor?',
    a: 'Use the navigation to reach relevant sections. Delegate opportunities and sponsorship contacts are available in the footer.'
  },
  {
    q: 'Is there on-site registration?',
    a: 'Yes, subject to capacity. Online registration is recommended for quick access.'
  }
]

export default function FAQ({ id }) {
  const [open, setOpen] = useState(0)
  const toggle = (i) => setOpen((v) => (v === i ? -1 : i))
  return (
    <section id={id} className="faq">
      <div className="faq-inner">
        <h2 className="faq-title">Frequently Asked <span>Questions</span></h2>
        <div className="faq-list">
          {QA.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)} aria-expanded={open === i}>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon" aria-hidden>{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-a" style={{ maxHeight: open === i ? '200px' : 0 }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
