import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'

const tabs = [
  { path: '/', label: 'Home', file: 'home.jsx' },
  { path: '/about', label: 'About', file: 'about.jsx' },
  { path: '/projects', label: 'Projects', file: 'projects.jsx' },
  { path: '/experience', label: 'Experience', file: 'experience.jsx' },
  { path: '/skills', label: 'Skills', file: 'skills.jsx' },
  { path: '/contact', label: 'contact.jsx', file: 'contact.jsx' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">
            portfolio<span className="brand-accent">.dev</span>
          </span>
        </NavLink>

        <nav className={`tabs ${open ? 'tabs-open' : ''}`} aria-label="Primary">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end={tab.path === '/'}
              className={({ isActive }) => `tab ${isActive ? 'tab-active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="tab-dot" aria-hidden="true" />
              {tab.label === 'contact.jsx' ? 'Contact' : tab.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
        </button>
      </div>
    </header>
  )
}
