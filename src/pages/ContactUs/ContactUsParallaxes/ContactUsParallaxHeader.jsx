import React from "react";
import "./ContactUsParallaxHeader.scss";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import ContactUsHeaderImgDesktop from "../../../assets/image/image_1.webp";

function ContactUsParallaxHeader() {
  return (
    <div className="contactUsParallaxHeader">
      <Parallax
        backgroundImage={ContactUsHeaderImgDesktop}
        titleItalic={<span className="title-italics">Find us</span>}
        title={<span className="title-subtext">contact</span>}
        className="restaurant-kitchen-1"
        className_title="title"
        className_subtitle="subtitle"
      />
    </div>
  );
}
export default ContactUsParallaxHeader;
