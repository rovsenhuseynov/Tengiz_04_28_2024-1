import React from "react";
import "./Menu.scss";
import { NavLink } from "react-router-dom";
import NavLinkBtn from "../../Components/reusableComponents/Btn/NavLinkBtn";
import ChefsSection from "./ChefSection/ChefsSection";
import MenuStarters from "./MenuStarters/MenuStarters";
import MainDishes from "./MainDishes/MainDishes";
import MenuSweets from "./MenuSweets/MenuSweets";
import MenuSalads from "./MenuSalads/MenuSalads";
import DividerLine from "../../Components/reusableComponents/DividerLine/DividerLine";
import MenuDrinks from "./MenuDrinks/MenuDrinks";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import MenuParallaxElemTop from "./MenuParallaxElements/MenuParallaxElemTop";
import MenuParallaxElemSecond from "./MenuParallaxElements/MenuParallaxElemSecond";
import MenuParallaxElemThird from "./MenuParallaxElements/MenuParallaxElemThird";
import MenuParallaxElemFourth from "./MenuParallaxElements/MenuParallaxElemFourth";
import MenuParallaxElemFinal from "./MenuParallaxElements/MenuParallaxElemFinal";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";


const Menu = () => {
  return (
    <div className="menu">
      <ScrollToTop />
      <div className="menu__head">
        <h1 className="home__wrapper-title">menu</h1>
        <p className="home__wrapper-subtext">Best Food In Azerbaijan</p>
        <NavLink to="/cartPage" className="home__banner-link">
          <NavLinkBtn text="ORDER NOW" className="home__nav-link-btn" />
        </NavLink>
      </div>
      <ChefsSection />
    
      <DividerLine />

      <MenuParallaxElemTop />
    
      <MenuSalads />
      <MenuParallaxElemSecond />
      <MenuStarters />
      <MenuParallaxElemThird />
      <MainDishes />
      <MenuParallaxElemFourth />
      <MenuSweets />
      <MenuParallaxElemFinal />
      <MenuDrinks />
  
      <ScrollToTopButton />
    </div>
  );
};

export default Menu;
