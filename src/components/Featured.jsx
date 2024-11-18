import React from "react";
import "../css/Featured.css";
import AdsterraAd from "./AdsterraAd";
import { Link } from "react-router-dom";
import { epl_teams, la_liga_teams } from "../../public/fixtures";

function Featured({ top_games }) {
  return (
    <div id="features" className="featured-container">
      <section>
        <h3 className="text-4xl font-bold mb-8">This week's top matches</h3>
        <div className="featured-cards">
          {top_games.map((game, i) => {
            const fixture = eval(game.fixture);
            // card
            return (
              <div className="featured-card" key={i}>
                <h4>
                  {fixture[0].name} vs {fixture[1].name}
                </h4>
                <p>{game.status}</p>

                {game.status == "upcoming" && <p>{game.time}</p>}
                <Link
                  to={
                    game?.status == "started"
                      ? `/stream/${game?.channel}`
                      : `/fixture/not_started`
                  }
                >
                  <button>Watch now</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <AdsterraAd />
    </div>
  );
}

export default Featured;
