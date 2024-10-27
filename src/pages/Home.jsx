import React from "react";
import Hero from "../components/Hero";
import Featured from "../components/Featured";
import Leagues from "../components/Leagues";
import Footer from "../components/Footer";
import EmailSubscription from "../components/EmailSubscription";

function Home() {
  return (
    <div>
      <Hero />
      <Featured />
      <Leagues />
      <EmailSubscription />
      <Footer />
    </div>
  );
}

export default Home;
