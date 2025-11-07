import React, { useState } from 'react'

function Navbar({ current, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleNav = (page) => {
    if (onNavigate) onNavigate(page)
    setOpen(false)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="nav-left" href="#home" onClick={() => handleNav('home')}>
          <div className="logo-mark">⚡</div>
          <span className="logo-text">EV Expo</span>
        </a>

        <nav className="nav-right">
          <button
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`menu ${open ? 'open' : ''}`}>
            <li>
              <a
                className={`link ${current === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={() => handleNav('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={() => handleNav('about')}
              >
                About
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'attend' ? 'active' : ''}`}
                href="#attend"
                onClick={() => handleNav('attend')}
              >
                Why Attend
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'stats' ? 'active' : ''}`}
                href="#stats"
                onClick={() => handleNav('stats')}
              >
                Stats
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'categories' ? 'active' : ''}`}
                href="#categories"
                onClick={() => handleNav('categories')}
              >
                Categories
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'location' ? 'active' : ''}`}
                href="#location"
                onClick={() => handleNav('location')}
              >
                Location
              </a>
            </li>
            <li>
              <a
                className={`link ${current === 'partners' ? 'active' : ''}`}
                href="#partners"
                onClick={() => handleNav('partners')}
              >
                Media Partners
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
