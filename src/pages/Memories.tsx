import React from "react";
import "../App.css";
import Footer from "../components/Footer";

const photos = [
  { src: "src/assets/pic1.jpeg", caption: "Our First Photo" },
  { src: "src/assets/pic6.jpeg", caption: "My left and right Hearts" },
  { src: "src/assets/pic3.jpeg", caption: "Date time!" },
  { src: "src/assets/pic4.jpeg", caption: "Pujo Vibes" },
  { src: "src/assets/pic5.jpeg", caption: "Moments caught naturally" },
  { src: "src/assets/pic7.jpeg", caption: "Whole Night Hubbas..." },
];

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
      <Footer link="/love-letter" text="Our Love Letter" />
    </section>
  );
};

export default Memories;
