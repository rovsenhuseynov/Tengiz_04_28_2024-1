import React from "react";
import ChefsSection from "./ChefSection/ChefsSection";
import MenuParallaxTop from "./ParallaxesMenu/MenuParallaxTop/MenuParallaxTop";
import ParallaxHeader from "./ParallaxesMenu/ParallaxHeader/ParallaxHeader";
import "./Menu.scss";
import DividerLine from "../../Components/reusableComponents/DividerLine/DividerLine";
import MenuSalads from "./MenuSalads/MenuSalads";
import MenuParallaxSecond from "./ParallaxesMenu/MenuParallaxSecond/MenuParallaxSecond";
import MenuStarters from "./MenuStarters/MenuStarters";
import MenuParallaxThird from "./ParallaxesMenu/MenuParallaxThird/MenuParallaxThird";
import MainDishes from "./MainDishes/MainDishes";
import MenuParallaxFourth from "./ParallaxesMenu/MenuParallaxFourth";
import MenuSweets from "./MenuSweets/MenuSweets";
import MenuParallaxFifth from "./ParallaxesMenu/MenuParallaxFifth";
import MenuDrinks from "./MenuDrinks/MenuDrinks";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import MenuParallaxFinal from "./ParallaxesMenu/MenuParallaxFinal";

const Menu = () => {
  return (
    <div className="menu-wrapper">
      <ParallaxHeader />
      <ChefsSection />
      <DividerLine />
      <MenuParallaxTop />
      <MenuSalads />
      <MenuParallaxSecond />
      <MenuStarters />
      <MenuParallaxThird />
      <MainDishes />
      <MenuParallaxFourth />
      <MenuSweets />
      <MenuParallaxFifth />
      <MenuDrinks />
      <MenuParallaxFinal />
      <ScrollToTopButton />
    </div>
  );
};

export default Menu;
