import React from "react";
import { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.scss";

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState;
  const vidRef = React.useRef(); //will refer to the video object

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        control={false}
        muted
      />
      <div className="app__overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
