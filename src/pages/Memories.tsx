import React from 'react'
import '../App.css'

const photos = [
  { src: 'src/assets/pic1.jpeg', caption: 'Our first trip' },
  { src: 'src/assets/pic6.jpeg', caption: 'That cozy evening' },
  { src: 'src/assets/pic3.jpeg', caption: 'Sunset together' },
  { src: 'src/assets/pic4.jpeg', caption: 'Laughs and coffee' },
  { src: 'src/assets/pic5.jpeg', caption: 'That smile' },
  { src: 'src/assets/pic7.jpeg', caption: 'Dance under lights' },
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
