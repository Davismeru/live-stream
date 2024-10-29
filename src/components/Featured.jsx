import React from "react";
import "../css/Featured.css";
import AdsterraAd from "./AdsterraAd";

function Featured() {
  return (
    <div id="features" className="featured-container">
      <section>
        <h3 className="text-4xl font-bold mb-8">This week's top matches</h3>
        <div className="featured-cards">
          {/* card */}
          <div className="featured-card">
            <h4>Liverpool vs Manchester United</h4>
            <p>English Premier League</p>
            <button>Watch now</button>
          </div>

          {/* card */}
          <div className="featured-card">
            <h4>Chelsea vs Arsenal</h4>
            <p>English Premier League</p>
            <button>Watch now</button>
          </div>
          <div className="featured-card">
            <h4>Bayern Munich vs Barcelona</h4>
            <p>Serie A</p>
            <button>Watch now</button>
          </div>
        </div>
      </section>
      <AdsterraAd />
    </div>
  );
}

export default Featured;
