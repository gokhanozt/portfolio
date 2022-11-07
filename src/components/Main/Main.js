import React, { useState, useEffect } from "react";
import elf from "../../assets/img/elf1.png";
import sock from "../../assets/img/sock.png";
import toy from "../../assets/img/toy.png";
import candy from "../../assets/img/candy.png";
import astro from "../../assets/img/astro2.png";
import developer from "../../assets/img/developer2.png";
import code from "../../assets/img/dev-code.png";
import window from "../../assets/img/dev-window.png";
import moon from "../../assets/img/moon1.png";
import spaceship1 from "../../assets/img/spaceship3.png";
import spaceship2 from "../../assets/img/spaceship2.png";
import saturn from "../../assets/img/saturn.png";
import "./main.scss";

const Main = () => {
  return (
    <div className="main-section">
      <h1>
        <span className="small-one">Hi, my name is</span>
        <span className="name">Gokhan Ozturk.</span>
        <span className="big-one">
          I build
          <span className="magic">
            {/* <div className="fairy">
              <div className="wings"></div>
              <div className="glow">
                <div className="sparkle"></div>
                <div className="sparkle"></div>
                <div clclassNameass="sparkle"></div>
                <div className="sparkle"></div>
                <div className="sparkle"></div>
              </div>
            </div> */}
            magical
          </span>
          things for the web.
        </span>
      </h1>
      <div className="right-side">
        <h2 className="big-one">
          <span className="description">
            I am front end developer specializing in building (and occasionally
            designing) exceptional digital experience. Currently, I'm focused on
            building accessible, pixel-perfect and interactive applications.
          </span>
        </h2>
      </div>

      <div className="banner-container">
        <div className="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <img className="main-character elf center" src={elf} alt="" />
        <img className="main-character astro center" src={astro} alt="" />
        <img
          className="main-character developer center"
          src={developer}
          alt=""
        />
        <div className="code-container code">
          <img src={code} alt="" />
        </div>

        <div className="window-container window">
          <img src={window} alt="" />
        </div>
        <div className="candy-container candy2">
          <img src={candy} alt="" />
        </div>
        <div className="sock-container">
          <img src={sock} alt="" />
        </div>
        <div className="toy-container">
          <img src={toy} alt="" />
        </div>
        <div className="candy-container">
          <img src={candy} alt="" />
        </div>

        <div className="moon-container">
          <img src={saturn} alt="" />
        </div>
        <div className="spaceship-container spaceship1">
          <img src={spaceship1} alt="" />
        </div>
        {/* <div className="spaceship-container spaceship2">
          <img src={spaceship2} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Main;
