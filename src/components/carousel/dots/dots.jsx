import React from "react";
import "./dots.styles.scss";

import Dot from "./dot/dot";

const Dots = ({ slides }) => {
  return (
    <div className="dots">
      {slides.map((d) => (
        <Dot id={d.id} key={d.id} />
      ))}
    </div>
  );
};

export default Dots;
