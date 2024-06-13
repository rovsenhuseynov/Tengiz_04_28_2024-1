import React, { useState, useEffect } from "react";
import "./PhotoSlider.scss";


function PhotoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.pinimg.com/originals/d0/26/5e/d0265ec4d8fb124b1db8ccb480cfea0b.jpg",
    "https://i.pinimg.com/originals/7c/af/ab/7cafaba7589022d7e3faf39121d0a21b.jpg",
    "https://i.pinimg.com/originals/b5/06/28/b506283595af90116ef8ddae2cadaa5b.jpg",
    "https://i.pinimg.com/originals/7b/76/5b/7b765b272687050eae007e1e659dc565.jpg",
    "https://i.pinimg.com/originals/dc/3e/7c/dc3e7c15404c4c3930ec884bbb30a375.jpg",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slider-wrapper">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide})` }}
          />
        ))}
      </div>
    </div>
  );
}

export default PhotoSlider;
