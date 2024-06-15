import React from "react";
import "./AboutBanner.scss";
import { Link } from "react-router-dom";
import NavLinkBtn from "../../../Components/reusableComponents/Btn/NavLinkBtn";

function AboutBanner() {
  return (
    <div className="about__banner">
      <div className="about__banner-content">
        <h1 className="about__banner-title">The about us</h1>
        <p className="about__banner-subtext">Best Food In Azerbaijan</p>
        <Link to="/cartPage" className="about__banner-link">
          <NavLinkBtn text="ORDER NOW" className="about__nav-link-btn" />
        </Link>
      </div>
    </div>
  );
}

export default AboutBanner;
