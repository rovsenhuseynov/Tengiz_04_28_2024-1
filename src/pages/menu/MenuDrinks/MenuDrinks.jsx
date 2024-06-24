import React from "react";
import "./MenuDrinks.scss";
import TraditionalDrinks from "./TraditionalDrinks/TraditionalDrinks";
import SoftDrinks from "./SoftDrinks/SoftDrinks";
import AlcoholicDrinks from "./AlcoholicDrinks/AlcoholicDrinks";

const MenuDrinks = () => {
  return (
    <div className="drinks-menu">
      <h2 className="drinks-menu__title">Drinks</h2>
      <TraditionalDrinks />
      <SoftDrinks/>
      <AlcoholicDrinks/>
    </div>
  );
};

export default MenuDrinks;
