import React from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import MenuParallaxFifthImage from "../../../assets/image/restaurant_kitchen_6.webp";

const MenuParallaxFifth = () => {
  return (
    <div className="menu-parallaxComponents">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={MenuParallaxFifthImage} 
        title="Variety"
        text="of drinks"
      />
    </div>
  );
};

export default MenuParallaxFifth;
