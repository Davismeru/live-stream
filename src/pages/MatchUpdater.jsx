import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_api_uri } from "../assets/constants";
import "../css/MatchUpdater.css";
import { epl_teams } from "../../public/fixtures";

function MatchUpdater() {
  const [allFixtures, setAllFixtures] = useState(null);

  // input states
  const [league, setLeague] = useState("");
  const [fixture, setFixture] = useState("");
  const [time, setTime] = useState("");
  const [channel, setChannel] = useState("");
  const [status, setStatus] = useState("");
  console.log(allFixtures);

  const handleUpdateMatch = async (e, league, gameIndex) => {
    e.preventDefault();

    const res = await axios.patch(`${base_api_uri}/admin/update_fixtures`, {
      league,
      index: gameIndex,
      fixture,
      time,
      channel,
      status,
    });

    console.log(league, gameIndex, fixture, time, channel, status);
  };
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
                const league = item.league;

                return (
                  <section key={index} className="match-section">
                    {/* fixture details */}
                    <p>
                      {index}. {fixture[0].name} vs {fixture[1].name}
                    </p>
                    {/* inputs */}
                    <div className="match-inputs">
                      <input
                        type="text"
                        placeholder="fixture"
                        onChange={(e) => setFixture(e.target.value)}
                        className="w-full"
                      />
                      <input
                        type="text"
                        placeholder="channel"
                        onChange={(e) => setChannel(e.target.value)}
                      />
                      <input
                        type="text"
                        placeholder="time"
                        onChange={(e) => setTime(e.target.value)}
                      />{" "}
                      {/* status */}
                      <div>
                        <p>Status</p>
                        <input
                          type="radio"
                          name="status"
                          value="upcoming"
                          onChange={(e) => setStatus(e.target.value)}
                        />{" "}
                        upcoming
                        <input
                          type="radio"
                          name="status"
                          value="started"
                          onChange={(e) => setStatus(e.target.value)}
                        />{" "}
                        started
                      </div>
                      <br />
                    </div>
                    <button
                      className="fixture-update-btn"
                      onClick={(e) => handleUpdateMatch(e, item.league, index)}
                    >
                      update
                    </button>
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
