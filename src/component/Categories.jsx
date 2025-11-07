import React from 'react'

const items = [
  'Accessories & Auto Parts Manufacturer',
  'Assembly Solutions & Applications',
  'Batteries & Components',
  'Chargers, Connectors & Harnesses',
  'Drive System',
  'Electric Vehicle Accessories',
  'E-bicycles & Tri cycles',
  'Energy Storage Technology',
  'Hybrid & Solar Vehicle',
  'Motor Technologies',
  '2 Wheelers & 3 Wheelers Manufacturers',
  'Wind Energy, Bio Fuel, Eco Energy',
]

function Icon() {
  return (
    <svg
      className="icon"
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M7 13h4v8H7v-8Zm6-10h4v10h-4V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 21h18M5 17h6M13 7h6M9 9l2-2M15 15l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function Categories({ id }) {
  return (
    <section id={id} className="section categories">
      <div className="categories-inner">
        <h2 className="categories-title">Exhibitor Categories</h2>
        <div className="categories-grid">
          {items.map((label) => (
            <div key={label} className="cat-card">
              <Icon />
              <h3>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
