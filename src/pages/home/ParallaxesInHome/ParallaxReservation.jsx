import React, { useEffect, useState } from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import ParallaxReservationImage from "../../../assets/image/restaurant_kitchen_5.webp";
import "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent.scss";

const ParallaxReservation = () => {
  const showReservationLink = true;
  const [parallaxSpeed, setParallaxSpeed] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setParallaxSpeed(.5);
      } else if (width <= 768) {
        setParallaxSpeed(.5);
      } else if (width <= 1025) {
        setParallaxSpeed(.5);
      } else {
        setParallaxSpeed(.8);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="menu-parallaxComponents">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={ParallaxReservationImage}
        title=""
        text="your spot today!"
        alignItems="end"
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={1}
        parallaxwindowHeight={1}
        showReservationLink={showReservationLink}
      />
    </div>
  );
};

export default ParallaxReservation;
