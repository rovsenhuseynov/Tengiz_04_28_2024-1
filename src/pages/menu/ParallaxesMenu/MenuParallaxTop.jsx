import React from "react";
import ParallaxSecondImage from "../../../assets/image/restaurant_kitchen_1.webp";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";

const MenuParallaxTop = () => {
  return (
    <div className="menu-parallaxComponents ">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={ParallaxSecondImage} // Укажите путь к вашему изображению
        title="Kitchen"
        text="professionals"
      />
    </div>
  );
};

export default MenuParallaxTop;
