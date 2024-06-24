import React from "react";
import "./scrollToTopButton.scss";
import ArrowTop from "../../../assets/svg/Arrow_bottom/arrow_top.svg";

function ScrollToTopButton() {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <img
      alt="Arrow"
      src={ArrowTop}
      onClick={handleClick}
      className="scroll-to-top-btn"
    />
  );
}

export default ScrollToTopButton;