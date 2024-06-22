import React from 'react'
import ParallaxComponent from '../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent';
import MenuParallaxFinalImage from "../../../assets/image/restaurant_kitchen_5.webp"

const MenuParallaxFinal = () => {
    return (
      <div className="menu-parallaxTop ">
        <div className="mask"></div>
        <ParallaxComponent
          backgroundImage={MenuParallaxFinalImage} // Укажите путь к вашему изображению
          title="Kitchen"
          text="professionals"
        />
      </div>
    );
  };
  

export default MenuParallaxFinal;