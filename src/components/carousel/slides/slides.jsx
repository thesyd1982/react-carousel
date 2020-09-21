import React, { useContext, useEffect } from "react";
import "./slides.styles.scss";

import SliderContext from "../../../context/slider-context";
import Slide from "../slides/slide/slide";
import useManageSlide from "../../../hooks/useManageSlide";

const Slides = () => {
  const { value } = useContext(SliderContext);
  const {
    autoplay,
    getCurrentSlide,
    getSlides,
    getAnimationType,
  } = useManageSlide();

  const currentSlide = getCurrentSlide();
  let ml = 0,
    w = 0;
  if (value.animation === "slide") {
    ml = -1 * ((getCurrentSlide() - 1) * 100);
    w = getSlides().length * 100;
  }

  if (getAnimationType() === "fade") {
    ml = 0;
    w = 100;
  }

  // autoplay(3000);
  return (
    <div className="slides">
      <div className="overflow">
        <div
          className={`inner animation-${value.animation}`}
          style={{ marginLeft: `${ml}%`, width: `${w}%` }}
        >
          {getSlides().map(({ id, ...otherProps }) => {
            return <Slide key={id} id={id} {...otherProps} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slides;
