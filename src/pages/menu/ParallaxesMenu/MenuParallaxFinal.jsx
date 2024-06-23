import React from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import MenuParallaxFinalImage from "../../../assets/image/restaurant_kitchen_5.webp";

const MenuParallaxFinal = () => {
  const showReservationLink = true; // Здесь можно установить нужное значение

  return (
    <div className="menu-parallaxComponents">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={MenuParallaxFinalImage} // Укажите путь к вашему изображению
        title=""
        text="Make"
        subtext="a reservation"
        showReservationLink={showReservationLink} // Передача пропа
      />
    </div>
  );
};

export default MenuParallaxFinal;
