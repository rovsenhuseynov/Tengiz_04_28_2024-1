import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./ParallaxComponent.scss";

const ParallaxComponent = ({ backgroundImage, title, text }) => {
  const parallaxRef = useRef(null);
  const [scrollData, setScrollData] = useState({
    opacity: 1,
    backgroundPositionY: "50%",
  });

  const handleScroll = () => {
    if (parallaxRef.current) {
      const section = parallaxRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const distanceFromCenter = Math.abs(
        windowHeight / 3 - (section.top + section.height / 2)
      );
      const maxOpacityDistance = windowHeight / 3;
      const opacity = 1 - distanceFromCenter / maxOpacityDistance;
      const clampedOpacity = opacity < 0 ? 0 : opacity;

      const scrolled =
        (windowHeight - section.top) / (windowHeight + section.height);
      const backgroundPositionY = Math.max(0, Math.min(100, scrolled * 100));

      setScrollData({
        opacity: clampedOpacity,
        backgroundPositionY: `${backgroundPositionY}%`,
      });
    }
  };

  useEffect(() => {
    const handleScrollThrottled = () => {
      window.requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", handleScrollThrottled);
    return () => window.removeEventListener("scroll", handleScrollThrottled);
  }, []);

  return (
    <div
      className="menu-parallaxTop__content"
      ref={parallaxRef}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: scrollData.backgroundPositionY,
      }}
    >
      <div
        className="menu-parallaxTop__content-context"
        style={{ opacity: scrollData.opacity }}
      >
        <h1 className="menu-parallaxTop__content-title">{title}</h1>
        <p className="menu-parallaxTop__content-text">{text}</p>
      </div>
    </div>
  );
};

ParallaxComponent.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ParallaxComponent;
