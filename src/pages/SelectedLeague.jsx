import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fixtures } from "../../public/fixtures";
import EmailSubscription from "../components/EmailSubscription";
import MatchCard from "../components/MatchCard";
import "../css/SelectedLeague.css";
import AdsterraAd from "../components/AdsterraAd";

function SelectedLeague() {
  const { selected_league } = useParams();
  const [displayFixtures, setDisplayFixtures] = useState([]);

  useEffect(() => {
    fixtures.map((item) => {
      if (item.league == selected_league) {
        setDisplayFixtures(item.matches);
      }
    });
  }, []);

  return (
    <div>
      <h1 className="league-title">{selected_league.split("_").join(" ")}</h1>
      <AdsterraAd />
      <div className="fixtures">
        {displayFixtures.map((fixture, i) => {
          return <MatchCard key={i} fixture={fixture} />;
        })}
      </div>
      <AdsterraAd />
      <EmailSubscription />
    </div>
  );
}

export default SelectedLeague;
