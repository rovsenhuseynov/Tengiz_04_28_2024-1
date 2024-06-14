import React, { useState } from "react";
import "./MenuSalads.scss";
import SlidersComponent from "../../../Components/reusableComponents/SlidersSwiper/SlidersComponent";
import { saladsMenuData } from "../../../Components/reusableComponents/DataBox/Menu_Data";
import BtnBuyNow from "../../../Components/reusableComponents/BtnBuyNow/BtnBuyNow";

const MenuItem = ({ item, openPopup }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="salads-menu-card menu-card">
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
                {Array.from({ length: 14 }, (_, index) => (
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

const MenuSalads = () => {
  return (
    <div className="salads-menu">
      <h2 className="salads-menu__title">Salads</h2>
      <SlidersComponent
        data={saladsMenuData}
        renderSlideContent={(item, openPopup, index) => (
          <MenuItem key={index} item={item} openPopup={openPopup} />
        )}
      />
    </div>
  );
};
export default MenuSalads;
