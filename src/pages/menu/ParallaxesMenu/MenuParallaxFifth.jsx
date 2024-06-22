
import React from 'react'
import ParallaxComponent from '../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent';
import MenuParallaxFifthImage from "../../../assets/image/restaurant_kitchen_6.webp"

const MenuParallaxFifth = () => {
  return (
    <div className="menu-parallaxTop ">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={MenuParallaxFifthImage} // Укажите путь к вашему изображению
        title="Chefs"
        text="create"
      />
    </div>
  );
};

export default MenuParallaxFifth