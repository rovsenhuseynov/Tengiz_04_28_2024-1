import React from "react";
import PropTypes from "prop-types";
import "./RotatingCube.scss";

const RotatingCube = ({ images }) => {
  return (
    <div className="rotating-cube-wrapper">
      <div className="rotating-cube-container">
        <div className="rotating-cube">
          <img src={images[0]} alt="front" className="rotating-cube-front" />
          <img src={images[1]} alt="back" className="rotating-cube-back" />
          <img src={images[2]} alt="right" className="rotating-cube-right" />
          <img src={images[3]} alt="left" className="rotating-cube-left" />
        </div>
      </div>
    </div>
  );
};

RotatingCube.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RotatingCube;