import React from 'react'
import ParallaxComponent from '../../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent';
import ParallaxThirdImage from "../../../../assets/image/restaurant_kitchen_3.webp"

const MenuParallaxThird = () => {
    return (
      <div className="menu-parallaxTop ">
        <div className="mask"></div>
        <ParallaxComponent
          backgroundImage={ParallaxThirdImage} // Укажите путь к вашему изображению
          title="Taste"
          text="inspiration"
        />
      </div>
    );
  };

export default MenuParallaxThird