import React from 'react'

const SPEAKERS = [
  { name: 'Mr. Abhijeet Sinha', role: 'Project Director NHEV', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Balraj Bahnot', role: 'Former ARAI & MHI Advisor', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Deepak Wadhwa', role: 'Founder & Director DNA Technologies', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Divesh Garg', role: 'CEO - Spell Mind Technologies', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Lav Kush', role: 'COO - Rally Our Bus India Ltd', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Harinder Mohan Singh', role: 'Director - Effluent BR Resources LLP', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Dr. KalyanKumar', role: 'EV Industry Expert', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Dr. Narendra Jha', role: 'EV Research Lead', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Praveen Sood', role: 'EV Policy Specialist', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Preetesh Singh', role: 'EV Market Analyst', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Dr. Rajeev Mishra', role: 'Battery Tech Expert', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' },
  { name: 'Mr. Ravindra Joshi', role: 'EV Supply Chain Lead', img: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' }
]

export default function Speakers({ id }) {
  return (
    <section id={id} className="speakers">
      <div className="speakers-inner">
        <h2 className="speakers-title">Event <span>Speakers</span></h2>
        <div className="speakers-grid">
          {SPEAKERS.map((s, i) => (
            <div key={i} className="sp-card">
              <div className="sp-badge">
                <img src={s.img} alt={s.name} loading="lazy" decoding="async" />
              </div>
              <div className="sp-name">{s.name.toUpperCase()}</div>
              <div className="sp-rule" />
              <div className="sp-role">{s.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
