import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavLinkBtn from "../../../../Components/reusableComponents/Btn/NavLinkBtn";
import "./ParallaxHeader.scss"; // Импорт CSS файла для стилей

const ParallaxHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="menu__header">
      <div
        className="menu__header-content"
        style={{ backgroundPositionY: `${scrollPosition / 3}px` }}
      >
        <p className="menu__header-subtext">Best Food In Azerbaijan</p>
        <h1 className="menu__header-title">menu</h1>

        <NavLink to="/cartPage" className="home__banner-link">
          <NavLinkBtn text="ORDER NOW" className="home__nav-link-btn" />
        </NavLink>
      </div>
    </div>
  );
};

export default ParallaxHeader;