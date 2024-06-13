import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import restaurant_kitchen_3 from "../../../assets/image/restaurant_kitchen_3.webp";
import "./GeneralMenuParallaxElemTop.scss";

function MenuParallaxElemThird() {
  return (
    <>
      <Parallax
        backgroundImage={restaurant_kitchen_3}
        titleItalic="Taste"
        title="inspiration"
        className="restaurant-kitchen-1" // Custom class for specific styles
        className_title="title"
        className_subtitle="subtitle"
      />
    </>
  );
}

export default MenuParallaxElemThird;
