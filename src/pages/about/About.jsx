import React from "react";
import "./About.scss";
import "../../assets/globalStyles.scss";
import ScrollToTopButton from "../../Components/reusableComponents/ScrollToTopButton/ScrollToTopButton";
import Intermediate from "./intermediate/Intermediate";
import {
  benefitSections,
  reasons,
  chefIcon,
} from "../../Components/reusableComponents/DataBox/AboutData";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";
import PhotoSlider from "./PhotoSlider/PhotoSlider";
import AboutBanner from "./AboutBanner/AboutBanner";

const BenefitSection = ({ icon, title, items }) => (
  <div className="about">
    <div className="about__title-block">
      <img src={icon} alt={title} className="about__title-svg" />

      <h3 className="about__title">{title}</h3>
    </div>
    <ul className="about__list">
      {items.map((item, index) => (
        <li key={index} className="about__list-elem">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <div className="about__wrapper">
    <ScrollToTop />
    <AboutBanner />

    <div className="about__content next-section">
      <div className="about__welcome-block">
        <h1 className="about__welcome-block-title">
          Welcome to the “Azerbaijani Cuisine” restaurant!
        </h1>
        <ul className="about__welcome-block-subtitle-list">
          <li className="about__welcome-block-subtitle-list-elem">
            We have everything to make your visit to our restaurant
            unforgettable.
          </li>
          <li className="about__welcome-block-subtitle-list-elem">
            A unique place where great taste and cozy atmosphere meet.
          </li>
        </ul>
      </div>

      <div className="lists_benefits">
        {benefitSections.map((section, index) => (
          <BenefitSection
            key={index}
            icon={section.icon}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <div className="reasons-choice">
        <h3 className="reasons-choice__title">But that is not all!</h3>

        <h4 className="reasons-choice__subtitle">
          Here are some reasons why Best Food in Azerbaijan is your ideal
          choice:
        </h4>

        <div className="reasons-choice__contecst-block">
          <ul className="reasons-choice__list">
            {reasons.map((reason, index) => (
              <li key={index} className="reasons-choice__list-element">
                <span className="reasons-choice__list-element-title">
                  {reason.title}
                </span>
                <p className="reasons-choice__list-element-text">
                  {reason.text}
                </p>
              </li>
            ))}
          </ul>
          <img alt="Chef" src={chefIcon} className="reasons-choice__img" />
        </div>
      </div>
    </div>

    <PhotoSlider />
    <Intermediate />
    <ScrollToTopButton />
  </div>
);

export default About;
