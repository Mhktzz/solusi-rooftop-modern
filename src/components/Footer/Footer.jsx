import React from "react";
import "./Footer.css";
import logoFooter from "../../assets/logo-black.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column-about">
            <img
              src={logoFooter}
              alt="Solusi Rooftop Modern"
              className="footer-logo"
              style={{ maxWidth: 180, marginBottom: "1rem" }}
            />
            <p>
              Mengubah ruang tak terpakai menjadi spot idaman Anda. Tumbuh ke
              atas bersama kami.
            </p>
          </div>
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li>
                <a href="https://www.instagram.com/ciptaruangsuasana?igsh=MXVhMnJidHkzb3c2Zw==">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@ciptaruangsuasana?si=Floc41yr7sJmTlbl">
                  YouTube
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@ciptaruang.suasana?_t=ZS-8xsX9G785Ki&_r=1">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Kontak</h4>
            <ul>
              <li>
                <a href="mailto:ciptaruangsuasana@gmail.com">
                  ciptaruangsuasana@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+08112725572">+62 811 272 5572</a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/bJra1o8ERko9E2XU6?g_st=iw">
                  Jl. 10 Nopember No.163, Ledug Lor, Ledug, Kec. Kembaran,
                  Kabupaten Banyumas, Jawa Tengah 53112
                </a>
              </li>
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
