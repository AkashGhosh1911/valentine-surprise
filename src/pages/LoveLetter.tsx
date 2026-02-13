import React from "react";
import "../App.css";
import Footer from "../components/Footer";

const LoveLetter: React.FC = () => {
  return (
    <section className="love-letter">
      <div className="letter-card">
        <h2 className="section-title">Why I Love You</h2>
        <p className="letter-text">
          My love, From the day you entered my life, everything started feeling
          brighter and softer, like the warm glow of evening lights during Durga
          Puja in Kolkata. When you smile, my whole world feels at peace. Truly,
          tumi amar shobkichu. In this chaotic life, you are my shanti, my
          comfort, my safest place. Being with you feels like sitting by the
          Hooghly at sunset, sharing cha and quiet dreams about our future. You
          make ordinary days feel special without even trying. Your kindness,
          your strength, and the way you care so deeply for the people you love
          make me admire you more every single day. Bhalobasha, to me, means
          standing beside you through every season—whether it’s stormy or filled
          with sunshine. I don’t need grand celebrations or dramatic promises. I
          just want your hand in mine, walking together, building a life filled
          with respect, laughter, and endless understanding. No matter how busy
          life becomes, amar mon will always belong to you. You are my today, my
          tomorrow, and every beautiful moment in between. With you, I have
          found not just love, but home. ❤️
        </p>
      </div>
      <br />
      <Footer link="/love-questions" text="Surprise QNA" />
    </section>
  );
};

export default LoveLetter;
