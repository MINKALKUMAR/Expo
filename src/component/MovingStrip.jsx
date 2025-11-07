import React from 'react'

const PlaneIcon = ({ className }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M21.44 2.56L10.7 13.3M21.44 2.56L14.83 21.44L10.7 13.3M21.44 2.56L2.56 9.17L10.7 13.3" stroke="#f5b301" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const words = [
  'REVISIT',
  'VISIT',
  'CONNECT',
  'EXHIBIT',
  'NETWORK',
  'EXPLORE'
]

export default function MovingStrip({ id }) {
  return (
    <section id={id} className="moving-strip">
      <div className="moving-track">
        <div className="moving-track-inner">
          {words.map((w, i) => (
            <div key={`a-${i}`} className="moving-item">
              <PlaneIcon className="plane" />
              <span>{w}</span>
            </div>
          ))}
          {words.map((w, i) => (
            <div key={`b-${i}`} className="moving-item">
              <PlaneIcon className="plane" />
              <span>{w}</span>
            </div>
          ))}
          {words.map((w, i) => (
            <div key={`c-${i}`} className="moving-item">
              <PlaneIcon className="plane" />
              <span>{w}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
