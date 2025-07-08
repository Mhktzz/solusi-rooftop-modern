import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column-about">
            <h3 className="footer-logo">Solusi Rooftop Modern</h3>
            <p>
              Mengubah ruang tak terpakai menjadi oase impian Anda. Tumbuh ke
              atas bersama kami.
            </p>
          </div>
          <div className="footer-column">
            <h4>Navigasi</h4>
            <ul>
              <li>
                <a href="#features">Fitur</a>
              </li>
              <li>
                <a href="#benefits">Manfaat</a>
              </li>
              <li>
                <a href="#cta">Konsultasi</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="mailto:info@rooftop.id">info@rooftop.id</a>
              </li>
              <li>
                <a href="tel:+6281234567890">+62 812 3456 7890</a>
              </li>
              <li>Jakarta, Indonesia</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Cipta Ruang Suasana. Semua Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
