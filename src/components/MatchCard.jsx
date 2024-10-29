import React from "react";
import "../css/MatchCard.css";
import { Link } from "react-router-dom";

function MatchCard({ fixture }) {
  const teamsPlaying = fixture.fixture;
  const matchStatus = fixture.status;
  const matchChannel = fixture.channel;
  return (
    <Link to={`/stream/${matchChannel}`}>
      <div className="matchcard-container">
        {/* team names and logos */}
        <div className="teams">
          {console.log(fixture)}
          {/* team one */}
          <section>
            <p>{teamsPlaying[0].name}</p>
            <img src={teamsPlaying[0].logo} alt="logo" />
          </section>

          {/* team two */}
          <section>
            <p>{teamsPlaying[1].name}</p>
            <img src={teamsPlaying[1].logo} alt="logo" />
          </section>
        </div>

        {/* match status */}
        <div>
          <p>{matchStatus}</p>
        </div>
      </div>
    </Link>
  );
}

export default MatchCard;