import React from "react";
import "./slide.styles.scss";
import useManageSlide from "../../../../hooks/useManageSlide";

const Slide = ({ id, image, children }) => {
  const { getCurrentSlide } = useManageSlide();
  let zindex = id !== getCurrentSlide() ? 1 : 0;

  return (
    <div
      className={`slide slide-${id}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: zindex,
      }}
    >
      <div className="slide-content">{children}</div>
    </div>
  );
};

export default Slide;
