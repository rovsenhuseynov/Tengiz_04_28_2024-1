import React from "react";
import "./CulinaryDelight.scss";
import { NavLink } from "react-router-dom";
import delicacies_img_1 from "../../../assets/image/CulinaryDelight/delicacies_1.webp";
import delicacies_img_2 from "../../../assets/image/CulinaryDelight/delicacies_2.webp";

const CulinaryDelight = () => {
  return (
    <div className="delicacy">
      <div className="delicacy__container">
        <div className="delicacy__text">
          <div className="delicacy__logo">
            <div className="delicacy__logo-title">Culinary</div>
            <div className="delicacy__logo-subtitle">delight</div>
          </div>

          <div className="decorative-divider">✻</div>
          <div className="delicacy__text-p">
            "Best Food in Azerbaijan" is a restaurant and cafe located on the
            busy corner of Yashyl Bazaar in Narimanov. With a glazed facade on
            both sides of the building, overlooking the market and the busy
            intersection of Baku.
          </div>
          <NavLink to="/reservationForm" className="link-to">
            make a reservation
          </NavLink>
        </div>

        <div className="delicacy__block-images">
          <img
            src={delicacies_img_1}
            alt="restaurant img"
            className="delicacy__block-img"
          ></img>
          <img
            src={delicacies_img_2}
            alt="restaurant img"
            className="delicacy__block-img"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default CulinaryDelight;
