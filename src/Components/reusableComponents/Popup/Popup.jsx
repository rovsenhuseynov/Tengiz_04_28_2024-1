import React from "react";
import "./Popup.scss";
import delete_img from "../../../assets/svg/delete_svg/delete.svg";

const Popup = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="popup">
      <div className="popup-wrapper">
        <div className="popup-content">
          {children}
          <button onClick={onClose} className="popup-close-button">
            <img className="popup-close-button-img" src={delete_img} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
