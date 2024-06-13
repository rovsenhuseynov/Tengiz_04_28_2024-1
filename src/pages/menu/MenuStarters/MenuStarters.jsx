import React, { useState } from "react";
import "./MenuStarters.scss";
import "../General_Menu_Styles.scss";
import SlidersComponent from "../../../Components/reusableComponents/SlidersSwiper/SlidersComponent";
import {
  coldMenuData,
  hotMenuData,
} from "../../../Components/reusableComponents/DataBox/Menu_Data";
import BtnBuyNow from "../../../Components/reusableComponents/BtnBuyNow/BtnBuyNow";

const MenuItem = ({ item, openPopup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="card-menu-starters menu-card">
      <div className={`image-content ${isExpanded ? "expanded" : ""}`}>
        <div className="curtain"></div>
        <div className="card-image">
          <img
            className="card-img"
            src={item.imageUrl}
            alt="menu-img"
            onClick={() => openPopup(item.imageUrl)}
          />
        </div>

        <div className="description-container">
          <div className="details">
            <p className="description">{item.description}</p>
            <div className="price-block">
              <p className="price-text">Price</p>
              <div className="dots">
                {Array.from({ length: 20 }, (_, index) => (
                  <span key={index} className="dot"></span>
                ))}
              </div>
              <p className="price-sum">{item.price}</p>
            </div>
          </div>
          <BtnBuyNow item={item} image={item.imageUrl} />
        </div>
      </div>
      <div className="card-content">
        <h2 className="name">{item.name}</h2>

        <button
          className={`link-to ${isExpanded ? "active" : ""}`}
          onClick={toggleExpansion}
        >
          {isExpanded ? "Back" : "More"}
        </button>
      </div>
    </div>
  );
};

const MenuStarters = () => {
  return (
    <div className="menu-starters">
      <h1 className="menu-starters__title">Appetizers</h1>

      <div className="sliders-component-body">
        <div className="menu-starters__cold">
          <h2 className="cold-startes-title">Cold Starters</h2>
          <SlidersComponent
            data={coldMenuData}
            renderSlideContent={(item, openPopup, index) => (
              <MenuItem key={index} item={item} openPopup={openPopup} />
            )}
          />
        </div>

        <div className="menu-starters__hot">
          <h2 className="hot-startes-title">Hot Starters</h2>
          <SlidersComponent
            data={hotMenuData}
            renderSlideContent={(item, openPopup, index) => (
              <MenuItem key={index} item={item} openPopup={openPopup} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuStarters;
