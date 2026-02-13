import React from 'react'
import '../App.css'

const photos = [
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop', caption: 'Our first trip' },
  { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop', caption: 'That cozy evening' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop', caption: 'Sunset together' },
  { src: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=800&auto=format&fit=crop', caption: 'Laughs and coffee' },
  { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop', caption: 'That smile' },
  { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', caption: 'Dance under lights' },
]

const Memories: React.FC = () => {
  return (
    <section className="memories">
      <h2 className="section-title">Memories</h2>
      <p className="section-sub">A few of our favorite moments.</p>
      <div className="photo-grid">
        {photos.map((p, i) => (
          <figure key={i} className="photo-card">
            <img src={p.src} alt={p.caption} />
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Memories
