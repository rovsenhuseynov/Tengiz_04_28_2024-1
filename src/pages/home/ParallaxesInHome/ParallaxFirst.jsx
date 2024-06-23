import React from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import bgImage from "../../../assets/image/0_66/R.webp";

const ParallaxFirst = () => {
  return (
    <div className="menu-parallaxComponents">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={bgImage}
        title="Best"
        text="DISHES"
        alignItems="center" 
        parallaxSpeed={0.3}
        parallaxHeight={0.15}
        parallaxwindowHeight={1.1}
      />
    </div>
  );
};

export default ParallaxFirst;
