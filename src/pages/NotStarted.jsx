import React from "react";
import EmailSubscription from "../components/EmailSubscription";
import AdsterraAd from "../components/AdsterraAd";

function NotStarted() {
  return (
    <div>
      <h1 className="text-center mt-5 text-xl font-semibold text-red-500">
        This game has not started yet!
      </h1>
      <EmailSubscription />

      <AdsterraAd />
    </div>
  );
}

export default NotStarted;
