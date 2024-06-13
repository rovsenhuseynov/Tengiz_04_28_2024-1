import React from "react";
import "./NavLinkBtn.scss";

function NavLinkBtn({ text, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="nav-link-btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default NavLinkBtn;
