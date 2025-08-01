import React from "react";
import "./Benefits.css";
import BenefitsImage from "../../assets/benefits-image-2.jpg";

const Benefits = () => {
  return (
    <section id="benefits" className="benefits">
      <div className="container benefits-container">
        <div className="benefits-image-wrapper">
          <img src={BenefitsImage} alt="Kenyamanan di rooftop pribadi" />
        </div>
        <div className="benefits-content">
          <h2 className="benefits-title">
            Impian Ruang Tambahan Anda Ada di Atas!
          </h2>
          <p className="benefits-subtitle">
            Jangan biarkan lahan terbatas menghambatmu! Dengan solusi rooftop
            kami, kamu bisa:
          </p>
          <ul className="benefits-list">
            <li>
              <span className="check-icon">✓</span> Tambah nilai properti dengan
              Ruang Ekstra Fungsional.
            </li>
            <li>
              <span className="check-icon">✓</span> Ciptakan zona nyaman di
              tengah hiruk piruk kota.
            </li>
            <li>
              <span className="check-icon">✓</span> Mengoptimalkan setiap inci
              lahan yang Anda miliki.
            </li>
            <li>
              <span className="check-icon">✓</span> Memiliki gaya hidup yang
              lebih sehat dengan ruang outdoor yang nyaman.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
