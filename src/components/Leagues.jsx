import React from "react";
import "../css/Leagues.css";
import { leagues } from "../../public/leagues";
import { Link } from "react-router-dom";

function Leagues() {
  return (
    <div id="pricing" className="leagues-container">
      <section>
        <h3 className="text-4xl font-bold mb-8">Leagues</h3>
        <div className="league-cards">
          {leagues.map((league) => (
            <Link
              to={`/league/${league.name
                .toLocaleLowerCase()
                .split(" ")
                .join("_")}`}
              className="league-card"
              key={league.name}
            >
              <h4>{league.name}</h4>
              <img src={league.logo} alt="logo" className="league-logo" />
              <p>{league.stage}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Leagues;
