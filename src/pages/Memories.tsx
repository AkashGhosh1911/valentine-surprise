import React from "react";
import "../App.css";
import Footer from "../components/Footer";
import pic1 from "../assets/pic1.jpeg";
import pic7 from "../assets/pic7.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";
import pic5 from "../assets/pic5.jpeg";
import pic6 from "../assets/pic6.jpeg";

const photos = [
  { src: pic1, caption: "Our First Photo" },
  { src: pic6, caption: "My left and right Hearts" },
  { src: pic3, caption: "Date time!" },
  { src: pic4, caption: "Pujo Vibes" },
  { src: pic5, caption: "Moments caught naturally" },
  { src: pic7, caption: "Whole Night Hubbas..." },
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
