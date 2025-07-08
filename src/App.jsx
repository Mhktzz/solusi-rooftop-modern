import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Solution from "./components/Solution/Solution.jsx";
import Features from "./components/Features/Features.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
      {/* Tambahkan komponen lain di sini jika diperlukan */}
    </>
  );
}

export default App;
