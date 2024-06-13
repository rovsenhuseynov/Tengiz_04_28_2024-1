import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import restaurant_kitchen_4 from "../../../assets/image/restaurant_kitchen_5.webp";
import "./GeneralMenuParallaxElemTop.scss";
import { NavLink } from "react-router-dom";
import NavLinkBtn from "../../../Components/reusableComponents/Btn/NavLinkBtn";

function MenuParallaxElemFinal() {
  return (
    <div className="menuParallaxElem-final">
      <Parallax
        backgroundImage={restaurant_kitchen_4}
        titleItalic={<span className="title-italics">Reserve</span>}
        title={<span className="title-subtext">your spot today!</span>}
        className="restaurant-kitchen-1"
        className_title="title"
        className_subtitle="subtitle"
      />

      <NavLink to="/reservationForm" className="final__nav-link">
        <NavLinkBtn
          text="make a reservation"
          className="order-btn final__nav-link-btn"
        />
      </NavLink>
    </div>
  );
}

export default MenuParallaxElemFinal;
