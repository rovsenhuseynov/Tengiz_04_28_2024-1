import React, { useContext } from "react";
import "./BtnBuyNow.scss";
import shopping_basket from "../../../assets/svg/shopping_basket/shopping.svg";
import { CartContext } from "../Context/CartContext ";

function BtnBuyNow({ item, image }) {
  const { addToCart } = useContext(CartContext);

  const handleClick = () => {
    addToCart({ ...item, image }); // Передаем объект товара вместе с изображением
  };

  return (
    <div className="btn-buyNow" onClick={handleClick}>
      <div className="btn-buyNow__content">
        <div className="btn-buyNow__text">BUY NOW</div>
        <div className="btn-buyNow__separator">|</div>
        <img
          className="btn-buyNow__icon"
          src={shopping_basket}
          alt="shopping basket img"
        />
      </div>
    </div>
  );
}

export default BtnBuyNow;
