import React from "react";
import "./Solution.css";
import BeforeAfterImage from "../../assets/before-after-1.jpg";

const Solution = () => {
  return (
    <section className="solution">
      <div className="container solution-container">
        <div className="problem-statement">
          <h2>
            Lahan Terbatas bikin Pusing Cari Ruang Lebih? Jangan Khawatir!
          </h2>
          <p>
            Lahan makin sempit bikin impian taman, ruang santai, atau area kerja
            tambahan menjadi tidak mungkin? Sebenarnya kita punya "lahan"
            tersembunyi yang siap dimanfaatkan, lho!
          </p>
        </div>

        <div className="solution-intro">
          <h3>Perkenalkan, Solusi Rooftop Revolusioner!</h3>
          <p>
            Lupakan batasan lahan, kami bantu anda "tumbuh ke atas" dan ciptakan
            area multifungsi impian di rooftop!
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
