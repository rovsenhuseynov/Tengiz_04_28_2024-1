import React, { useEffect, useState } from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import bgImage from "../../../assets/image/0_66/R.webp";

const ParallaxFirst = () => {
  const [parallaxSpeed, setParallaxSpeed] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setParallaxSpeed(.5);
      } else if (width <= 768) {
        setParallaxSpeed(.5);
      } else if (width <= 1025) {
        setParallaxSpeed(.35);
      } else {
        setParallaxSpeed(0.35);
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
        backgroundImage={bgImage}
        title="Best"
        text="DISHES"
        alignItems="center" 
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={0.15}
        parallaxwindowHeight={1.1}
      />
    </div>
  );
};

export default ParallaxFirst;
