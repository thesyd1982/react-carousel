import React from "react";
import "./dot.styles.scss";

import useMangeSlide from "../../../../hooks/useManageSlide";

const Dot = ({ id }) => {
  const { getCurrentSlide, setCurrentSlide } = useMangeSlide();

  const active = id === getCurrentSlide();
  return (
    <div
      className={active ? "dot active" : "dot"}
      onClick={() => setCurrentSlide(id)}
    ></div>
  );
};

export default Dot;
