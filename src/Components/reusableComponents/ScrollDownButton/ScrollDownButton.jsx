import React from "react";
import "./next_section.scss";
import ArrowBottom from "../../../assets/svg/Arrow_bottom/arrow_top.svg";

const ScrollDownButton = ({ targetSelector }) => {
  const handleClick = () => {
    const nextSection = document.querySelector(targetSelector);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with selector '${targetSelector}' not found.`);
    }
  };

  return (
    <img
      alt="Arrow"
      src={ArrowBottom}
      onClick={handleClick}
      className="next-btn"
    />
  );
};

export default ScrollDownButton;
