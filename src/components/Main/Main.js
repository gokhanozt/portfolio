import React, { useState, useEffect } from "react";
import elf from "../../assets/img/elf1.png";
import sock from "../../assets/img/sock.png";
import toy from "../../assets/img/toy.png";
import candy from "../../assets/img/candy.png";
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
        <img className="elf center" src={elf} alt="" />
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
      </div>
    </div>
  );
};

export default Main;
