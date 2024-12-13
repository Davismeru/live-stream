import React, { useEffect, useState } from "react";
import "../css/Leagues.css";
import { Link } from "react-router-dom";
import AdsterraAd from "./AdsterraAd";
import { base_api_uri } from "../assets/constants";
import axios from "axios";

function Leagues() {
  const [leagues, setLeagues] = useState([]);
  const sortedLeagues = leagues.sort((a, b) => a.order - b.order);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`${base_api_uri}/admin/get_leagues`).then((res) => {
      setLeagues(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div id="pricing" className="leagues-container">
      <h3 className="text-4xl font-bold mb-8">Leagues</h3>
      {!loading && (
        <section>
          <div className="league-cards">
            {sortedLeagues.map((league) => (
              <Link
                to={`/league/${league.name
                  .toLocaleLowerCase()
                  .split(" ")
                  .join("_")}`}
                className={
                  league.name == "top_games" ? "hidden" : "league-card"
                }
                key={league.name}
              >
                <h4>{league.name}</h4>
                <img src={league.logo} alt="logo" className="league-logo" />
                <p>{league.stage}</p>
              </Link>
            ))}
          </div>
          <br />
          <h6 className="text-center font-semibold text-white text-2xl">
            More Leagues Coming Soon!!
          </h6>
        </section>
      )}

      {loading && (
        <img src="/loader.gif" alt="loading..." className="loader-gif" />
      )}
      <AdsterraAd />
    </div>
  );
}

export default Leagues;
