import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_api_uri } from "../assets/constants";
import "../css/MatchUpdater.css";
import { epl_teams } from "../../public/fixtures";

function MatchUpdater() {
  const [allFixtures, setAllFixtures] = useState(null);
  useEffect(() => {
    axios.get(`${base_api_uri}/admin/get_fixtures`).then((res) => {
      setAllFixtures(res.data);
    });
  }, []);
  return (
    <div className="match-updater-container">
      {allFixtures?.map((item, i) => {
        return (
          <div key={i} className="league-section">
            <h1 className="uppercase">{item.league.split("_").join(" ")}</h1>

            {/* updating games form */}
            <form>
              {item.matches.map((match, index) => {
                const fixture = eval(match.fixture);
                console.log(fixture);

                return (
                  <section key={index} className="match-section">
                    {/* fixture details */}
                    <p>
                      {fixture[0].name} vs {fixture[1].name}
                    </p>
                    {/* inputs */}
                    <div className="match-inputs">
                      <input type="text" placeholder="fixture" />
                      <input type="text" placeholder="channel" />
                      <input type="text" placeholder="status" />
                      <input type="text" placeholder="time" /> <br />
                    </div>
                    <button className="fixture-update-btn">update</button>
                  </section>
                );
              })}
            </form>
          </div>
        );
      })}
    </div>
  );
}

export default MatchUpdater;
