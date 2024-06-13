import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import restaurant_kitchen_2 from "../../../assets/image/restaurant_kitchen_2.webp";
import "./GeneralMenuParallaxElemTop.scss";

function MenuParallaxElemSecond() {
  return (
    <>
      <Parallax
        backgroundImage={restaurant_kitchen_2}
        titleItalic="Delicious"
        title="magic"
        className="restaurant-kitchen-1" // Custom class for specific styles
        className_title="title"
        className_subtitle="subtitle"
      />
    </>
  );
}

export default MenuParallaxElemSecond;
