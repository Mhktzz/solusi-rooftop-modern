import React from "react";
import "./Solution.css";
import BeforeAfterImage from "../../assets/before-after.jpg"; // Pastikan ada gambar ini

const Solution = () => {
  return (
    <section className="solution">
      <div className="container solution-container">
        <div className="problem-statement">
          <h2>Sulit Mencari Ruang Lebih di Lahan Terbatas Anda?</h2>
          <p>
            Di lahan semakin terbatas, Anda mungkin merasa terhimpit, impian
            memiliki taman, ruang santai, atau area kerja tambahan pupus begitu
            saja. Tapi bagaimana jika kami katakan Anda punya "lahan"
            tersembunyi yang siap dimanfaatkan?
          </p>
        </div>

        <div className="solution-intro">
          <h3>Perkenalkan, Solusi Rooftop Revolusioner!</h3>
          <p>
            Kami hadir dengan Solusi Rooftop Modern yang mengubah carport dan
            ruang belakang Anda menjadi area multifungsi yang menakjubkan.
            Lupakan batasan lahan, mari tumbuh ke atas dan ciptakan ruang impian
            Anda!
          </p>
          <div className="solution-image">
            <img
              src={BeforeAfterImage}
              alt="Before and after rooftop installation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
