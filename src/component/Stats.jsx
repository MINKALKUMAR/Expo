import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { label: 'Exhibitors', value: 150, suffix: '+' },
  { label: 'Trade Visitors', value: 20000, suffix: '+' },
  { label: 'Products', value: 200, suffix: '+' },
  { label: 'Sq Ft Area', value: 50000, suffix: '+' },
]

function useCountUp(trigger) {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  useEffect(() => {
    if (!trigger) return
    let raf = 0
    const start = performance.now()
    const duration = 1200
    const animate = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setCounts(
        STATS.map((s) => Math.floor(eased * s.value))
      )
      if (t < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [trigger])
  return counts
}

export default function Stats({ id }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) { setVisible(true); return }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      })
    }, { root: null, threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const counts = useCountUp(visible)

  return (
    <section id={id} className="stats" ref={ref}>
      <div className="stats-inner">
        {STATS.map((s, i) => (
          <div key={s.label} className="stat-card">
            <div className="stat-number">
              {counts[i].toLocaleString()}{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
