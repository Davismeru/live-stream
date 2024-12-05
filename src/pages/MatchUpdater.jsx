import React, { useEffect, useState } from "react";
import axios from "axios";
import { base_api_uri } from "../assets/constants";
import "../css/MatchUpdater.css";
import {
  epl_teams,
  la_liga_teams,
  serie_a_teams,
  champions_league_teams,
  europa_league_teams,
  bundesliga_teams,
  other_teams,
} from "../../public/fixtures";

function MatchUpdater() {
  const [allFixtures, setAllFixtures] = useState(null);

  // input states
  const [fixture, setFixture] = useState("");
  const [time, setTime] = useState("");
  const [channel, setChannel] = useState("");
  const [status, setStatus] = useState("");

  // loading state
  const [loading, setLoading] = useState(false);

  // error state
  const [error, setError] = useState("");

  const handleUpdateMatch = async (e, league, gameIndex) => {
    e.preventDefault();
    console.log(gameIndex);

    setLoading(true);
    if (!fixture || !time || !channel || !status) {
      setError("fill all the fields");
    } else {
      await axios.patch(`${base_api_uri}/admin/update_fixtures`, {
        league,
        index: gameIndex,
        fixture,
        time,
        channel,
        status,
      });
      setLoading(false);
    }
  };

  // delete match
  const handleDeleteMatch = async (e, league, gameIndex) => {
    e.preventDefault();

    setLoading(true);

    await axios.patch(`${base_api_uri}/admin/delete_fixture`, {
      league,
      index: gameIndex,
    });
    setLoading(false);
  };

  const handleAddField = async (e, league) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * 100000);

    setLoading(true);
    const res = await axios.patch(`${base_api_uri}/admin/update_fixtures`, {
      league,
      index: randomIndex,
      fixture: "[epl_teams[0], epl_teams[1]]",
      time: "00:00",
      channel: "channel",
      status: "upcoming",
    });

    setLoading(false);
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
            axios.get(`${base_api_uri}/admin/get_fixtures`).then((res) => {
              setAllFixtures(res.data);
              setError("");
            });
          } else {
            setError(response.data.error);
          }
        });
    }
  }, []);
  return (
    <div className="match-updater-container">
      {error && <p className="text-red-500">{error}</p>}
      {!error &&
        allFixtures?.map((item, i) => {
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
                        onClick={(e) =>
                          handleUpdateMatch(e, item.league, match.index)
                        }
                      >
                        {loading ? "just a sec..." : "update"}
                      </button>

                      <button
                        className="fixture-update-btn"
                        onClick={(e) =>
                          handleDeleteMatch(e, item.league, match.index)
                        }
                      >
                        {console.log(item)}

                        {loading ? "just a sec..." : "delete"}
                      </button>
                      <br />
                      {index == item.matches.length - 1 && (
                        <button
                          className="p-2 rounded-md bg-orange-500 text-white mb-5 w-1/2 mt-4"
                          onClick={(e) => handleAddField(e, item.league)}
                        >
                          {loading ? "just a sec..." : "Add field"}
                        </button>
                      )}
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
