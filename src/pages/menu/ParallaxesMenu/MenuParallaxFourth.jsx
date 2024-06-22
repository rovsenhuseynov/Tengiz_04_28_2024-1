import React from 'react'
import ParallaxComponent from '../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent';
import MenuParallaxFourthImage from "../../../assets/image/restaurant_kitchen_4.webp"

const MenuParallaxFourth = () => {
  return (
    <div className="menu-parallaxTop ">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={MenuParallaxFourthImage} // Укажите путь к вашему изображению
        title="Chefs"
        text="create"
      />
    </div>
  );
};

export default MenuParallaxFourth