import React from "react";
import ImageSlider from "../../../Components/reusableComponents/RubberSlider/RubberSlider";
import { panelsData } from "../../../Components/reusableComponents/RubberSlider/panelsData";
import "./RubberGallery.scss";

const Page = () => {
  return (
    <div className="rubber-gallery">
      <div className="rubber-gallery__top">
        <div className="rubber-gallery__top-logo">
          <span className="rubber-gallery__top-logo-title">Coffee </span>
          <h2 className="rubber-gallery__top-logo-subtitle">with friends</h2>
        </div>

        <div className="rubber-gallery__top-text">
          Here you can also enjoy quality time with friends or in a family
          circle over a cup of velvety tea or aromatic coffee. Join us and
          create unforgettable moments in the pleasant atmosphere of our
          establishment!
        </div>
      </div>

      <ImageSlider panelsData={panelsData} />
    </div>
  );
};

export default Page;
