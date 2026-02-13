import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero">
        <h1 className="hero-title">Happy Valentine’s Day <br /> Piu❤️</h1>
        <p className="hero-sub">To my favorite person — today and always.</p>
        <div className="hero-actions">
          <Link to="/memories" className="btn">Our Memories</Link>
        </div>
      </div>
      <div className="floating-hearts" aria-hidden>
        <span>💖</span><span>💗</span><span>💕</span>
      </div>
    </section>
  )
}

export default Home
