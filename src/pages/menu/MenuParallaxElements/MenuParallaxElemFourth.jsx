import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import restaurant_kitchen_3 from "../../../assets/image/restaurant_kitchen_4.webp";
import "./GeneralMenuParallaxElemTop.scss";

function MenuParallaxElemFourth() {
  return (
    <>
      <Parallax
        backgroundImage={restaurant_kitchen_3}
        titleItalic="Chefs"
        title="create"
        className="restaurant-kitchen-1" // Custom class for specific styles
        className_title="title"
        className_subtitle="subtitle"
      />
    </>
  );
}

export default MenuParallaxElemFourth;
