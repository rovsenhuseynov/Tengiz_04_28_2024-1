import React from "react";
import "./DiscoverMenu.scss";
import { NavLink } from "react-router-dom";
import lovel_img_1 from "../../../assets/image/home_discover_menu/discover_1.webp";
import lovel_img_2 from "../../../assets/image/home_discover_menu/discover_2.webp";
import lovel_img_3 from "../../../assets/image/home_discover_menu/discover_3.webp";
import lovel_img_4 from "../../../assets/image/home_discover_menu/discover_4.webp";

const DiscoverMenu = () => {
  return (
    <div className="discover-menu">
      <div className="discover-menu__container">
        <div className="discover-menu__Images">
          <img
            src={lovel_img_1}
            alt="img of Azerbaijani cuisine"
            className="discover-menu__Image"
          />
          <img
            src={lovel_img_2}
            alt="img of Azerbaijani cuisine"
            className="discover-menu__Image"
          />
          <img
            src={lovel_img_3}
            alt="img of Azerbaijani cuisine"
            className="discover-menu__Image"
          />
          <img
            src={lovel_img_4}
            alt="img of Azerbaijani cuisine"
            className="discover-menu__Image"
          />
        </div>

        <div className="discover-menu__text">
          <div className="discover-menu__text">
            <div className="discover-menu__logo">
              <div className="discover-menu__logo-title">Discover</div>
              <div className="discover-menu__logo-subtitle">MENU</div>
            </div>

            <div className="decorative-divider">✻</div>
            <div className="discover-menu__text-p">
              If you prefer clean eating, head to our nearby restaurant. Satisfy
              your appetite with a constantly changing array of exquisite dishes
              inspired by Azerbaijani and international cuisine, all served in a
              seasonal classic style. We love food just as much as you do.
            </div>
            <NavLink to="/menu" className="link-to">
              VIEW THE FULL MENU
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverMenu;
