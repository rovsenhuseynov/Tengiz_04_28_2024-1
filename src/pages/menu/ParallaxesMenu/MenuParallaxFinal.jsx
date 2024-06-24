import React from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import MenuParallaxFinalImage from "../../../assets/image/restaurant_kitchen_5.webp";

const MenuParallaxFinal = () => {
  const showReservationLink = true; 

  return (
    <div className="menu-parallaxComponents">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={MenuParallaxFinalImage} 
        title=""
        text="Make"
        subtext="a reservation"
        showReservationLink={showReservationLink} 
      />
    </div>
  );
};

export default MenuParallaxFinal;
