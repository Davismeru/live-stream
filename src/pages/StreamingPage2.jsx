import React from "react";
import { Link, useParams } from "react-router-dom";
import AdsterraAd from "../components/AdsterraAd";
import "../css/StreamingPage.css";

function StreamingPage2() {
  const params = useParams();
  const subChannel = params.sub_channel;
  const channel2 = params.channel_2;
  const channels = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative">
      {/* channel buttons */}
      <div className="channel_btns">
        {channels.map((channel) => (
          <Link to={`/stream_2/${subChannel}/${channel}`}>
            <button>channel {channel}</button>
          </Link>
        ))}
      </div>
      <iframe
        src={`https://a.naba24.net/albaplayer/${subChannel}/?serv=${channel2}`}
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
