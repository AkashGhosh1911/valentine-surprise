import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../App.css'

const NavBar: React.FC = () => {
  const loc = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="brand">💘 Valentine</div>
      <button
        className="menu-btn"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>
      <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <Link className={loc.pathname === '/valentine-surprise/' ? 'active' : ''} to="/valentine-surprise/">Home</Link>
        <Link className={loc.pathname === '/memories' ? 'active' : ''} to="/memories">Memories</Link>
        <Link className={loc.pathname === '/love-letter' ? 'active' : ''} to="/love-letter">Love Letter</Link>
        <Link className={loc.pathname === '/love-questions' ? 'active' : ''} to="/love-questions">Love Questions</Link>
        <Link className={loc.pathname === '/coupon' ? 'active' : ''} to="/coupon">Surprise</Link>
      </nav>
    </header>
  )
}

export default NavBar
