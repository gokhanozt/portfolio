import React, { useState, useEffect } from "react";

import logo from "../../assets/img/lion.png";
import eye from "../../assets/img/lion-eye.png";
import "./header.scss";

const Header = () => {
  const NAVS = [
    {
      name: "About",
      link: "#",
    },
    {
      name: "Portfolio",
      link: "#",
    },
    {
      name: "Blog",
      link: "#",
    },
    {
      name: "Magic World",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = (event) => {
      setGlobalCoords({
        mouseX: event.clientX,
        mouseY: event.clientY,
      });
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const anchor = document.getElementById("anchor");
      const rekt = anchor.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
      console.log(angleDeg);
      const eyes = document.querySelectorAll(".eye");
      eyes.forEach((eye) => {
        console.log(eye);
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);
    function angle(cx, cy, ex, ey) {
      const dy = ey - cy;
      const dx = ex - cx;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;

      return deg;
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  const handleMouseMove = (event) => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-logo">
          <a href="/" className="logo">
            <img id="anchor" src={logo} alt="lion Logo" />
            <div id="eyes">
              <img src={eye} className="eye" alt="lion eye" />
              <img
                src={eye}
                className="eye"
                alt="lion eye2"
                style={{ color: "red" }}
              />
            </div>
            <span className="logo-text">Gokhan.me</span>
          </a>
        </div>
        <div className="navbar">
          <nav className="nav">
            <div className="container">
              <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                  {NAVS.map((nav) => (
                    <li>
                      <a href={nav.link}>{nav.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
