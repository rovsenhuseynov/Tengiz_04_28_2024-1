import React, { useEffect, useState } from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import ContactUsParallaxHeaderImage from "../../../assets/image/image_1.webp";

const ContactUsParallaxHeader = () => {
  const [parallaxSpeed, setParallaxSpeed] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 480) {
        setParallaxSpeed(0.7);
      } else if (width <= 768) {
        setParallaxSpeed(0.6);
      } else if (width <= 1200) {
        setParallaxSpeed(0.6);
      } else {
        setParallaxSpeed(0.8);
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
        backgroundImage={ContactUsParallaxHeaderImage}
        title="Best"
        text="DISHES"
        alignItems="end"
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={1.1}
        parallaxwindowHeight={1.1}
      />
    </div>
  );
};
export default ContactUsParallaxHeader;
