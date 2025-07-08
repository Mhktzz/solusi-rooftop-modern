import React, { useState } from "react"; // 1. Import useState
import "./Navbar.css";

const Navbar = () => {
  // 2. Buat state untuk mengontrol menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#" className="nav-logo">
          Solusi Rooftop Modern
        </a>

        {/* 3. Tambahkan kelas 'active' secara dinamis berdasarkan state */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>
              Fitur
            </a>
          </li>
          <li>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)}>
              Manfaat
            </a>
          </li>
          <li>
            <a
              href="#cta"
              className="nav-contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </li>
        </ul>

        {/* 4. Buat tombol hamburger */}
        <div
          className={isMenuOpen ? "hamburger-menu active" : "hamburger-menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle state saat diklik
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
