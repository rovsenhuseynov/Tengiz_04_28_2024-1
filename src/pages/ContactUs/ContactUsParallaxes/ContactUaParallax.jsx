import React, { useEffect, useState } from "react";
import ParallaxComponent from "../../../Components/reusableComponents/ParallaxComponent/ParallaxComponent";
import ContactUaParallaxImage from "../../../assets/image/faq.webp";
import "./ContactUsParallaxHeader.scss";

const ContactUaParallax = () => {
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
    <div className="menu-parallaxComponents contact-ua-parallax">
      <div className="mask"></div>
      <ParallaxComponent
        backgroundImage={ContactUaParallaxImage}
        title="FAQ"
        text="Asked"
        alignItems="end"
        parallaxSpeed={parallaxSpeed}
        parallaxHeight={1.1}
        parallaxwindowHeight={1.1}
      />
    </div>
  );
};

export default ContactUaParallax;
