import React from "react";
import squareVideo from "../images/Square.mp4";

const Video = () => {
  return (
    <figure className="videoContainer">
      <video autoplay="autoplay" loop muted>
        <source src={squareVideo} type="video/mp4" />
      </video>
    </figure>
  );
};

export default Video;
