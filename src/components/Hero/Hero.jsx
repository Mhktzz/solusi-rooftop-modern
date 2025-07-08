import React from "react";
import "./Hero.css";
import HeroImage from "../../assets/hero-image.jpg"; // Pastikan Anda punya gambar ini

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            Tumbuh <span className="highlight">ke Atas</span> di Lahan Terbatas:
            Maksimalkan Lahan Anda dengan Rooftop Modern!
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
