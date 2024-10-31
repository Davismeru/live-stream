import React from "react";
import { useParams } from "react-router-dom";
import AdsterraAd from "../components/AdsterraAd";

function StreamingPage() {
  const params = useParams();
  const matchChannel = params.channel;
  return (
    <div className="relative">
      <AdsterraAd />
      <iframe
        src={`https://koora.vip/share.php?ch=${matchChannel}`}
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

export default StreamingPage;
