import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../../assets/globalStyles.scss";
import shopping_basket from "../../assets/svg/shopping_basket/shopping.svg";
import login_svg from "../../assets/svg/login/login.svg";
import contact_us_img from "../../assets/svg/contact_us/contact_Us.svg";
import "./Header.scss";

function Header() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <header className="header">
      <NavLink to="/">
        <FastfoodIcon fontSize="large" className="logo-color" />
        <span className="header__logo">Food Website</span>
      </NavLink>

      <nav className={`header__nav ${isOpen ? "active" : ""}`}>
        <div className="header__nav-list">
          <NavLink to="/" className="header__nav-item">
            Home
          </NavLink>

          <NavLink to="/about" className="header__nav-item">
            About
          </NavLink>

          <NavLink to="/menu" className="header__nav-item">
            Menu
          </NavLink>

          <NavLink to="/reservationForm" className="header__nav-item">
            Reservation
          </NavLink>

          <NavLink to="/contactUs" className="header__nav-item">
            <img
              src={contact_us_img}
              className="header__nav-contactUs"
              alt="contact"
            />
          </NavLink>

          <NavLink to="/login" className="header__nav-item">
            <img
              src={login_svg}
              className="header__nav-login_svg"
              alt="login_svg"
            />
          </NavLink>

          <NavLink to="/cartPage" className="header__nav-item">
            <img
              src={shopping_basket}
              className="header__nav-shopping_basket"
              alt="shopping_basket"
            />
          </NavLink>
        </div>
      </nav>

      <button
        className={`header__menu-btn ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
}

export default Header;
