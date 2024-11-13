import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmailSubscription from "../components/EmailSubscription";
import MatchCard from "../components/MatchCard";
import "../css/SelectedLeague.css";
import AdsterraAd from "../components/AdsterraAd";
import axios from "axios";
import { base_api_uri } from "../assets/constants";

function SelectedLeague() {
  const { selected_league } = useParams();
  const [displayFixtures, setDisplayFixtures] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${base_api_uri}/admin/get_fixtures`).then((res) => {
      const fixtures = res.data;
      fixtures.map((item) => {
        if (item.league == selected_league) {
          setDisplayFixtures(item.matches);
        }
      });

      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1 className="league-title">{selected_league.split("_").join(" ")}</h1>
      <AdsterraAd />
      {!loading && (
        <div className="fixtures">
          {displayFixtures.map((fixture, i) => {
            return <MatchCard key={i} fixture={fixture} />;
          })}
        </div>
      )}

      {loading && (
        <img src="/loader.gif" alt="loading..." className="loader-gif" />
      )}
      <AdsterraAd />
      <EmailSubscription />
    </div>
  );
}

export default SelectedLeague;
