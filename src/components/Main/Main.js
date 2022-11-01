import React, { useState, useEffect } from "react";
import elf from "../../assets/img/elf1.png";
import sock from "../../assets/img/sock.png";
import toy from "../../assets/img/toy.png";
import candy from "../../assets/img/candy.png";
import "./main.scss";

const Main = () => {
  return (
    <div className="main-section">
      <h1>Christmas time is coming...</h1>
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
