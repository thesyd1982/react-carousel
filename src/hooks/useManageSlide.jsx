import { useContext } from "react";
import SliderContext from "../context/slider-context";

const useManageSlide = () => {
  const { value, setValue } = useContext(SliderContext);
  const { currentSlide, ...context } = value;

  const perviousSlide = () => {
    if (currentSlide > 1) {
      setValue({ currentSlide: currentSlide - 1, ...context });
    } else setValue({ currentSlide: value.slides.length, ...context });
  };
  const nextSlide = () => {
    if (currentSlide < value.slides.length)
      setValue({ currentSlide: currentSlide + 1, ...context });
    else setValue({ currentSlide: 1, ...context });
  };

  const getCurrentSlide = () => currentSlide;

  const setCurrentSlide = (id) => setValue({ currentSlide: id, ...context });

  const autoplay = (ms) => {
    if (value.autoplay) {
      setTimeout(() => nextSlide(), ms);
    }
  };

  const pause = () => (value.autoplay = false);

  const getSlides = () => value.slides;

  const getAnimationType = () => value.animation;

  return {
    getAnimationType,
    perviousSlide,
    nextSlide,
    getSlides,
    getCurrentSlide,
    setCurrentSlide,
    autoplay,
    pause,
  };
};

export default useManageSlide;
