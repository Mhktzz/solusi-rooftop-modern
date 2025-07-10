import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero-image-2.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Bingung Lahan Terbatas? Mending Manfaatin Rooftop Rumahmu! Kita bisa{" "}
            <span className="highlight">Tumbuh ke Atas</span> dan Bikin Rooftop
            Modern buat Nongkrong!
          </h1>
          <a href="#cta" className="cta-button">
            Lihat Solusi Kami
          </a>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Rooftop modern yang indah" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
