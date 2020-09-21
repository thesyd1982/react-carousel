import React, { useState } from "react";
import Slider from "./slider/slider";
import SliderContext from "../../context/slider-context";
import slidesList from "../../components/carousel/slides/slides-data";

const Carousel = ({
  slides = slidesList,
  arrows,
  dots,
  autoplay,
  currentSlide = Math.ceil(slides.length / 2),
  animation = "slide",
}) => {
  const cfg = {
    slides: slides,
    controls: { arrows: arrows, dots: dots },
    autoplay: autoplay,
    currentSlide: currentSlide,
    animation: animation,
  };

  const [value, setValue] = useState(cfg);

  return (
    <SliderContext.Provider value={{ value, setValue }}>
      <div className="carousel">
        <Slider />
      </div>
    </SliderContext.Provider>
  );
};

export default Carousel;
