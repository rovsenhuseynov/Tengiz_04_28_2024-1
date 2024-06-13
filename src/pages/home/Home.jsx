import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import OurStory from "./OurStory/OurStory";
import DiscoverMenu from "./DiscoverMenu/DiscoverMenu";
import ParallaxElementFirst from "./ParallaxesInHome/ParallaxElementFirst";
import ParallaxElementSecond from "./ParallaxesInHome/ParallaxElementSecond";
import CulinaryDelight from "./CulinaryDelight/CulinaryDelight";
import CookingW from "../home/CookingWorld/CookingW";
import ParallaxReservation from "./ParallaxesInHome/ParallaxReservation";
import NavLinkBtn from "../../Components/reusableComponents/Btn/NavLinkBtn";
import Page from "./RubberGallery/RubberGallery";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";
import ParallaxElementThird from "./ParallaxesInHome/ParallaxElementThird";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__wrapper">
      <ScrollToTop />
      <div className="home__wrapper-head">
        <h1 className="home__wrapper-title">Food Website</h1>
        <p className="home__wrapper-subtext">Best Food In Azerbaijan</p>

        <Link to="/cartPage" className="home__banner-link">
          <NavLinkBtn text="ORDER NOW" className="home__nav-link-btn" />
        </Link>
      </div>

      <div className="home__sections">
        <OurStory />
        <ParallaxElementFirst />
        <DiscoverMenu />
        <ParallaxElementSecond />
        <CulinaryDelight />
        <ParallaxElementThird />  
        <CookingW />
        <Page/>
        <ParallaxReservation />
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default Home;
