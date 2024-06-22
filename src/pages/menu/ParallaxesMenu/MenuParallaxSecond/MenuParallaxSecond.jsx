import React from 'react'
import ParallaxComponent from '../../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent';
import ParallaxSecondImage from "../../../../assets/image/restaurant_kitchen_2.webp"

const MenuParallaxSecond = () => {
    return (
      <div className="menu-parallaxTop ">
        <div className="mask"></div>
        <ParallaxComponent
          backgroundImage={ParallaxSecondImage} // Укажите путь к вашему изображению
          title="Delicious"
          text="magic"
        />
      </div>
    );
  };

export default MenuParallaxSecond