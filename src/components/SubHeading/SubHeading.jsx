import React from "react";

import { images } from "../../constants";

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: "16px" }}>
    <p className="p__cormorant">{title}</p> {/*dynamic rendering*/}
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
