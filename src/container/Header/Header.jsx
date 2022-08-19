import React from "react";
import { SubHeading } from "../../components/SubHeading.jsx"; //as a components because will reuse it for multiple sections

import { images } from "../../container";
import "./Header.scss";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading />
      <h1 className="app__header-h1">The Key to Fine Dinning</h1>
    </div>
    <div className="app__wrapper_img"></div>
  </div>
);

export default Header;
