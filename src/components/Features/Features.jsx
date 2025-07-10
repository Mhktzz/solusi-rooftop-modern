import React from "react";
import "./Features.css";

const featuresData = [
  {
    title: "Desain Minimalis & Estetis",
    description:
      "Naikkan nilai dan keindahan arsitektur rumahmu dengan material modern yang tahan lama dan mudah dirawat.",
  },
  {
    title: "Ruang Tambahan Serbaguna",
    description:
      "Ubah atap carport atau ruang belakang menjadi taman, deck, gym, studio, atau area hiburan.",
  },
  {
    title: "Pemasangan Cepat & Efisien",
    description:
      "Tim profesional kami memastikan instalasi yang rapi, aman, dan meminimalisir gangguan.",
  },
  {
    title: "Tahan Cuaca & Perawatan Mudah",
    description:
      "Dirancang untuk iklim Indonesia, tahan terhadap panas terik dan hujan deras.",
  },
  {
    title: "Ramah Lingkungan",
    description:
      "Integrasi sistem pengumpul air hujan, panel surya, atau area penghijauan untuk gaya hidup berkelanjutan.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Fitur Unggulan Rooftop Kami</h2>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
