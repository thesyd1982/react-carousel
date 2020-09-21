import React, { useContext } from "react";
import "./silder-content.styles.scss";

import Dots from "../dots/dots";
import Arrows from "../arrows/arrows";
import Slides from "../slides/slides";
import SliderContext from "../../../context/slider-context";

const SliderContent = () => {
  const { value } = useContext(SliderContext);

  return (
    <div className="slider-content">
      {value.controls.arrows && <Arrows />}
      <Slides slides={value.slides} autoplay={value.autoplay} />
      {value.controls.dots && <Dots slides={value.slides} />}
    </div>
  );
};

export default SliderContent;
