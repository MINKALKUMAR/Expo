import React from 'react'

const items = [
  'Explore the Latest EV Manufacturing Technologies',
  'Discover New Business Opportunities',
  'Connect with Quality Suppliers',
  'Engage in Ideal Networking Opportunities',
  'Participate in Community Meet-ups',
  'Attend Interactive Sessions',
  'Meet Various EV Industry Experts'
]

export default function WhyAttend({ id }) {
  return (
    <section id={id} className="attend">
      <div className="attend-inner">
        <div className="attend-left" aria-hidden="true" />
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
