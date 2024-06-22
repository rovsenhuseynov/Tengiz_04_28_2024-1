import React from "react";
import ChefsSection from "./ChefSection/ChefsSection";
import ParallaxHeader from "./ParallaxesMenu/ParallaxHeader/ParallaxHeader";
import DividerLine from "../../Components/reusableComponents/DividerLine/DividerLine";
import MenuSalads from "./MenuSalads/MenuSalads";
import MenuStarters from "./MenuStarters/MenuStarters";
import MainDishes from "./MainDishes/MainDishes";
import MenuParallaxFourth from "./ParallaxesMenu/MenuParallaxFourth";
import MenuSweets from "./MenuSweets/MenuSweets";
import MenuParallaxFifth from "./ParallaxesMenu/MenuParallaxFifth";
import MenuDrinks from "./MenuDrinks/MenuDrinks";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import MenuParallaxFinal from "./ParallaxesMenu/MenuParallaxFinal";
import MenuParallaxTop from "./ParallaxesMenu/MenuParallaxTop";
import MenuParallaxThird from "./ParallaxesMenu/MenuParallaxThird";
import MenuParallaxSecond from "./ParallaxesMenu/MenuParallaxSecond";
import "./Menu.scss";


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
