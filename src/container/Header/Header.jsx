import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

//as a components because will reuse it for multiple sections

import { images } from "../../constants";
import "./Header.scss";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flaver" />{" "}
      {/* "title"passing as a prop */}
      <h1 className="app__header-h1">The Key to Fine Dinning</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat
        Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
        Tellus
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="headerimage" />
    </div>
  </div>
);

export default Header;
