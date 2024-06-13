import React from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavLink } from "react-router-dom";
import googlePlayIcon from "../../assets/image/app-&-google-store/2google-play-badge.svg";
import appPlayIcon from "../../assets/image/app-&-google-store/2app-store-badge.svg";
import phoneSvg from "../../assets/image/Phone_svg/phone.svg";

const socialIcons = [
  { Icon: FacebookIcon, link: "#" },
  { Icon: TwitterIcon, link: "#" },
  { Icon: InstagramIcon, link: "#" },
  { Icon: GitHubIcon, link: "#" },
];

const storeLinks = [
  { to: "about", text: "About Us" },
  { to: "menu", text: "Menu" },
  { to: "reservationForm", text: "Reservations" },
  { to: "contactUs", text: "Contact Us" },
  { to: "faq", text: "Faq" },
  { to: "menu", text: "Specials and Offers" },
];

const businessLinks = [
  { to: "menu", text: "Delivery and Pickup" },
  { to: "menu", text: "Reviews" },
  { to: "menu", text: "News and Events" },
  { to: "menu", text: "Career" },
  { to: "menu", text: "Privacy Policy" },
  { to: "menu", text: "Sitemap" },
];

const SocialIcon = ({ Icon, link }) => (
  <NavLink to={link} className="footer__social-media-list-item">
    <Icon fontSize="large" className="footer__social-media-list-item-btn" />
  </NavLink>
);

const MenuLink = ({ to, text }) => (
  <li className="footer__top-right-blocks-list-item">
    <NavLink to={to} className="footer__top-right-blocks-list-item-linck">
      {text}
    </NavLink>
  </li>
);

const MenuBlock = ({ title, links }) => (
  <div className="footer__top-right-blocks">
    <h6 className="footer__top-right-blocks-title">{title}</h6>
    <ul className="footer__top-right-blocks-list">
      {links.map((link, index) => (
        <MenuLink key={index} {...link} />
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top-left">
          <div className="footer__top-left-title">Food Website</div>
          <div className="footer__top-left-address_block">
            <div className="footer__top-left-address_block-address">
              Address:
            </div>
            <div className="footer__top-left-address_block-city">
              Baku <span>city</span>
            </div>
            <div className="footer__top-left-address_block-street">
              M.K.Ataturk avenue-31
            </div>
            <div className="footer__top-left-address_block-phone">
              <img
                className="footer__top-left-address_block-phone-img"
                src={phoneSvg}
                alt="phone-img"
              />

              <h3 className="footer__top-left-address_block-phone-num">
                0099&nbsp;50&nbsp;459&nbsp;59&nbsp;59
              </h3>
            </div>
          </div>
        </div>
        <div className="footer__top-right">
          <MenuBlock title="Store" links={storeLinks} />
          <MenuBlock title="Business" links={businessLinks} />
        </div>
      </div>
      <div className="footer__social-media">
        <ul className="footer__social-media-list">
          {socialIcons.map((icon, index) => (
            <SocialIcon key={index} {...icon} />
          ))}
        </ul>
        <div className="footer__social-media-app_stope">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
          >
            <img src={googlePlayIcon} alt="Google Play Store" />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appPlayIcon} alt="App Store" />
          </a>
        </div>
      </div>

      <span className="copy">
        &copy; 2024 Food Website. All rights reserved.
      </span>
      <h5 id="аuthor">
        The user part of the site was developed by Rovshan Huseynov in 2024.01.{" "}
        <br />
        Email: rovsen.dev@gmail.com
      </h5>
    </div>
  );
};

export default Footer;
