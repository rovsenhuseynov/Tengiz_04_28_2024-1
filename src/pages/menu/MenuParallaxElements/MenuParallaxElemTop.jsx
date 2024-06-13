import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import restaurant_kitchen_1 from "../../../assets/image/restaurant_kitchen_1.webp";
import "./GeneralMenuParallaxElemTop.scss";

function MenuParallaxElemTop() {
  return (
    <>
      <Parallax
        backgroundImage={restaurant_kitchen_1}
        titleItalic="Kitchen"
        title="professionals"
        className="restaurant-kitchen-1" // Custom class for specific styles
        className_title="title"
        className_subtitle="subtitle"
      />
    </>
  );
}

export default MenuParallaxElemTop;
