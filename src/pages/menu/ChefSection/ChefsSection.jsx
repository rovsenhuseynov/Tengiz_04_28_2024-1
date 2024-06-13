import React from "react";
import "./ChefsSection.scss";
import woman_chefs_images from "../../../assets/image/Chef/Chef Maria Vlasova.svg";
import chefs_images from "../../../assets/image/Chef/Chef Turan Gyuler.svg";

const ChefsSection = () => {
  return (
    <div className="menu-preface">
      <img
        className="menu-preface__chef-image"
        src={chefs_images}
        alt="chefs-images"
      />

      <p className="menu-preface__text">
        Our chefs Maria Vlasova and Turan Mustafaev have created a menu using
        the best seasonal ingredients, serving dishes and drinks exquisitely.
        Drawing inspiration from the world's diverse cuisines, every dish on our
        menu is prepared to be shared with you. We use ingredients of incredible
        quality and freshness, slaughtering live animals and fish on site daily
        for further preparation. Our ingredients speak for themselves.
      </p>

      <img
        className="menu-preface__chef-image"
        src={woman_chefs_images}
        alt="chefs-images"
      />
    </div>
  );
};

export default ChefsSection;
