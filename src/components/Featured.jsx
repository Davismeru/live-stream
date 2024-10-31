import React from "react";
import "../css/Featured.css";
import AdsterraAd from "./AdsterraAd";
import { top_games } from "../../public/fixtures";
import { Link } from "react-router-dom";

function Featured() {
  return (
    <div id="features" className="featured-container">
      <section>
        <h3 className="text-4xl font-bold mb-8">This week's top matches</h3>
        <div className="featured-cards">
          {top_games.map((game, i) => (
            // card

            <div className="featured-card" key={i}>
              <h4>
                {game.fixture[0].name} vs {game.fixture[1].name}
              </h4>
              <p>{game.league}</p>
              <Link to={`/stream/${game.channel}`}>
                <button>Watch now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <AdsterraAd />
    </div>
  );
}

export default Featured;
