import React from "react";
import { useParams } from "react-router-dom";
import AdsterraAd from "../components/AdsterraAd";

function StreamingPage2() {
  const params = useParams();
  const subChannel = params.sub_channel;
  const channel2 = params.channel_2;
  return (
    <div className="relative">
      <AdsterraAd />
      <iframe
        src={`https://a.naba24.net/albaplayer/${subChannel}/?${channel2}`}
        allowfullscreen="true"
        frameborder="0"
        height="500px"
        width="100%"
        className="mt-5"
      ></iframe>

      {/* loading */}
      <section className="absolute top-1/2 left-1/2 -z-30 -translate-x-1/2">
        <p>loading...</p>
      </section>

      <AdsterraAd />
    </div>
  );
}

export default StreamingPage2;
