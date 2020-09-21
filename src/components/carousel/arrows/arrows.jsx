import React from "react";
import "./arrows.styles.scss";

import Arrow from "./arrow/arrow";

const Arrows = () => {
  return (
    <div className="arrows">
      <Arrow left />
      <Arrow />
    </div>
  );
};

export default Arrows;
