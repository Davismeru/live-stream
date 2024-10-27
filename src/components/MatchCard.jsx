import React from "react";
import "../css/MatchCard.css";

function MatchCard({ fixture }) {
  const teamsPlaying = fixture.fixture;
  const matchStatus = fixture.status;
  const matchUrl = fixture.link;
  return (
    <div className="matchcard-container">
      {/* team names and logos */}
      <div className="teams">
        {console.log(matchUrl)}
        {/* team one */}
        <section>
          <p>{teamsPlaying[0].name}</p>
        </section>

        {/* team two */}
        <section>
          <p>{teamsPlaying[1].name}</p>
        </section>
      </div>

      {/* match status */}
      <div>
        <p>{matchStatus}</p>
      </div>
    </div>
  );
}

export default MatchCard;
