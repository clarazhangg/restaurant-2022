import React from "react";
import { useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../../constants";
import "./Intro.scss";

const Intro = () => {
  //originally setting the playVideo to false (pause)
  const [playVideo, setPlayVideo] = useState(false);
  //will refer to the video object
  const vidRef = React.useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo); //change the state using the previous state

    // if else statement for video
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video app__bg">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        control={false}
        muted
      />
      <div className="flex__center app__video-overlay ">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {/* if else statement for button */}
          {
            playVideo ? (
              <BsPauseFill color="#fff" frontSize={30} /> //if the playVideo is true(playing) button will pause
            ) : (
              <BsFillPlayFill color="#fff" frontSize={30} />
            ) //else playVideo will play
          }
        </div>
      </div>
    </div>
  );
};

export default Intro;
