// src/components/LandingPage.js
import React from "react";
import "../css/Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-2xl">
          <h2>Watch Football Live Anywhere</h2>
          <p>
            Stream your favorite football matches live and never miss a moment.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-semibold">
            Start Watching
          </button>
        </div>
      </section>
    </div>
  );
}

export default Hero;
