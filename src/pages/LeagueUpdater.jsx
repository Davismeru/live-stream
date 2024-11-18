import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_api_uri } from "../assets/constants";
import "../css/LeagueUpdater.css";

function LeagueUpdater() {
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [matchday, setMatchday] = useState("");
  const [order, setOrder] = useState(0);

  const [leagues, setLeagues] = useState([]);
  const sortedLeagues = leagues.sort((a, b) => a.order - b.order);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAddLeague = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await axios.post(`${base_api_uri}/admin/add_league`, {
      name,
      logo,
      matchday,
      order,
    });

    setLoading(false);

    console.log(res.data);
  };
  const token = sessionStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      setError("you are not signed in");
    } else {
      axios
        .post(`${base_api_uri}/admin/verify_token`, {
          token,
        })
        .then((response) => {
          if (!response.data.error) {
            axios.get(`${base_api_uri}/admin/get_leagues`).then((res) => {
              setLeagues(res.data);
              setError("");
            });
          } else {
            setError(response.data.error);
          }
        });
    }
  }, []);
  return (
    <div className="league-updater-container">
      {error && <p className="text-red-500">{error}</p>}
      {/* add league section */}
      {!error && (
        <div className="add-league-section">
          <h1>Add New league</h1>
          <form>
            <input
              type="text"
              placeholder="league name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="logo path"
              onChange={(e) => setLogo(e.target.value)}
            />
            <input
              type="text"
              placeholder="matchday"
              onChange={(e) => setMatchday(e.target.value)}
            />
            <input
              type="number"
              placeholder="order"
              onChange={(e) => setOrder(e.target.value)}
            />
            <button onClick={(e) => handleAddLeague(e)}>
              {loading ? "just a sec..." : "add"}
            </button>
          </form>
        </div>
      )}

      {/* display existing leagues */}
      {!error && (
        <div className="display-leagues">
          <h1>Added Leagues</h1>
          {sortedLeagues.map((league) => (
            <section key={league.name}>
              <p>{league.order}</p>
              <h4>{league.name}</h4>
              <p>{league.matchday}</p>
              <p>{league.logo}</p>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

export default LeagueUpdater;
