import { createContext } from "react";
import slides from "../components/carousel/slides/slides-data";

const cfg = {
  slides: slides,
  controls: { arrows: true, dots: true },
  autoplay: true,
  currentSlide: Math.ceil(slides.length / 2),
  animation: "slide",
};
//create Context
const SliderContext = createContext(cfg);

export default SliderContext;
