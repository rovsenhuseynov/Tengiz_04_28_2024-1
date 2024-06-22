import React from "react";
import ParallaxComponent from "../../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import ParallaxSecondImage from "../../../../assets/image/restaurant_kitchen_1.webp";

const MenuParallaxTop = () => {
  return (
    <div className="menu-parallaxTop ">
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
