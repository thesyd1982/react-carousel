import React from "react";
import "./arrow.styles.scss";

import useManageSlide from "../../../../hooks/useManageSlide";

const Arrow = ({ left }) => {
  const { perviousSlide, nextSlide, pause } = useManageSlide();

  const handleClickNext = () => {
    // pause();
    nextSlide();
  };

  const handleClickPrevious = () => {
    // pause();
    perviousSlide();
  };

  const arrow = left ? (
    <div className="arrow" onClick={handleClickPrevious}>
      <div className="arrow arrow--left">
        <img src="" alt="" srcSet="" />
      </div>
    </div>
  ) : (
    <div className="arrow" onClick={handleClickNext}>
      <div className="arrow arrow--right">
        <img src="" alt="" srcSet="" />
      </div>
    </div>
  );
  return arrow;
};

export default Arrow;
