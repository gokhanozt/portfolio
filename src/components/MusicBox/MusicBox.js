import React, { useState } from "react";
import ReactDOM from "react-dom";
import song1 from "../../assets/img/song1.mp3";
import radio from "../../assets/img/radio1.png";
import muteIcon from "../../assets/img/mute.svg";
import playIcon from "../../assets/img/play.svg";
import "./musicBox.scss";

const MusicBox = () => {
  const [isActive, setIsActive] = useState(false);
  const audio = new Audio(song1);

  const handleClick = (event) => {
    audio.loop = true;
    audio.play();
  };

  return (
    <div>
      <div className="radio-container">
        <img
          className={isActive ? "radio andActive" : "radio"}
          src={radio}
          alt=""
          onClick={handleClick}
        />
        <img className="play" src={playIcon} alt="" onClick={handleClick} />
        <img
          className="mute"
          src={muteIcon}
          alt=""
          onClick={() => {
            audio.loop = false;
            audio.pause();
          }}
        />
      </div>
    </div>
  );
};

export default MusicBox;
