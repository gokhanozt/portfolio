import React, { useState } from "react";
// import themeLight from "../../assets/img/theme-light.svg";
// import themeDark from "../../assets/img/theme-dark.svg";
// import themeChristmas from "../../assets/img/theme-christmas.svg";
import { ReactComponent as ThemeLight } from "../../assets/img/theme-light.svg";
import { ReactComponent as ThemeChristmas } from "../../assets/img/theme-christmas.svg";
import { ReactComponent as ThemeDark } from "../../assets/img/theme-dark.svg";

import "./darkMode.scss";

const DarkMode = () => {
  const handleClick = (event) => {
    // console.log(event.target.value);
    const html = document.getElementsByTagName("html");
    const radios = document.getElementsByName("themes");
    let i;
    for (i = 0; i < radios.length; i++) {
      radios[i].addEventListener("change", function () {
        html[0].classList.remove(html[0].classList.item(0));
        html[0].classList.add(this.id);
      });
    }
  };

  return (
    <div className="dark-mode">
      <div className="theme-switcher" onChange={(event) => handleClick(event)}>
        <input
          type="radio"
          id="christmas-theme"
          value="christmas"
          name="themes"
          defaultChecked
        />
        <label htmlFor="christmas-theme">
          <span>
            <ThemeChristmas className="christmas" />
            Christmas
          </span>
        </label>
        <input type="radio" id="light-theme" name="themes" value="light" />
        <label htmlFor="light-theme">
          <span>
            <ThemeLight className="light" />
            Light
          </span>
        </label>
        <input type="radio" id="dark-theme" value="dark" name="themes" />
        <label htmlFor="dark-theme">
          <span>
            <ThemeDark className="dark" />
            Dark
          </span>
        </label>
        <span className="slider"></span>
      </div>
    </div>
  );
};

export default DarkMode;
