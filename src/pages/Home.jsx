import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Leagues from "../components/Leagues";
import EmailSubscription from "../components/EmailSubscription";
import axios from "axios";
import { base_api_uri } from "../assets/constants";

function Home() {
  // get featured games
  const [displayFixtures, setDisplayFixtures] = useState([]);
  useEffect(() => {
    axios.get(`${base_api_uri}/admin/get_fixtures`).then((res) => {
      const fixtures = res.data;
      fixtures.map((item) => {
        if (item.league == "top_games") {
          setDisplayFixtures(item.matches);
        }
      });
    });
  }, []);
  return (
    <div className="">
      <Hero featured_game={displayFixtures[0]} />
      <Featured top_games={displayFixtures} />
      <Leagues />

      <EmailSubscription />
      <p>
        This domain has been temporarily suspended due to copyright
        allegations!!
      </p>
    </div>
  );
}

export default Home;
