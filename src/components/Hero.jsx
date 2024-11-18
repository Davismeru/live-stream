// src/components/LandingPage.js
import React from "react";
import "../css/Hero.css";
import { epl_teams, la_liga_teams } from "../../public/fixtures";
import { Link } from "react-router-dom";

function Hero({ featured_game }) {
  const fixture = eval(featured_game?.fixture);
  return (
    <div className="hero-container">
      {console.log(fixture)}
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-2xl">
          <h2>Your Ultimate Football Streaming Hub</h2>
          <p>
            Stream your favorite football matches live and never miss a moment.
          </p>

          {/* featured game section */}
          <div className="featured-game">
            <h1>Featured Game</h1>
            {fixture && (
              <div className="hero-featured-game">
                {/* team a */}
                <section>
                  <img src={fixture[0].logo} alt="logo" />
                  <p>{fixture[0].name}</p>
                </section>
                <h1>VS</h1>
                {/* team b */}
                <section>
                  <img src={fixture[1]?.logo} alt="logo" />
                  <p>{fixture[1]?.name}</p>
                </section>
              </div>
            )}

            <p>{featured_game?.time}</p>
            <Link
              to={
                featured_game?.status == "started"
                  ? `/stream/${featured_game?.channel}`
                  : `/fixture/not_started`
              }
            >
              <button className="px-6 py-3 bg-green-700 hover:bg-blue-600 rounded-lg text-lg font-semibold">
                Start Watching
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
