import React from "react";
import "./ParallaxReservation.scss";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import reservationImgBg from "../../../assets/image/reservation.webp";
import { NavLink } from "react-router-dom";
import NavLinkBtn from "../../../Components/reusableComponents/Btn/NavLinkBtn";

const ParallaxReservation = () => {
  return (
    <div className="parallax-reservation">
      <Parallax
        backgroundImage={reservationImgBg}
        titleItalic={
          <span className="parallax-reservation__title-italics">Reserve</span>
        }
        title={
          <span className="parallax-reservation__title">your spot today!</span>
        }
      />
      <NavLink to="/reservationForm" className="nav-link">
        <NavLinkBtn text="make a reservation" className="order-btn" />
      </NavLink>
    </div>
  );
};

export default ParallaxReservation;
