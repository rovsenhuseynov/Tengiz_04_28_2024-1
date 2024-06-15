import React, { useState, useEffect } from "react";
import "./PhotoSlider.scss";


function PhotoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "https://i.natgeofe.com/n/b9ab8443-acc5-4e24-be6f-708b547b90b5/food-in-baku.jpg?w=1260&h=840",
    "https://www.advantour.com/img/azarbaijan/dishes/azerbaijani-dishes.jpg",
    "https://www.advantour.com/img/azarbaijan/dishes/pakhlava.jpg",
    "https://assets.jintravel.com/files/upload/jintravel/azerb%20food/xengel-azerbaijani-food-dish-cuisine-azerbaycan-metbexi-kuxnya-qastrotur-jintravel.com.jpg",
    "https://blog.russianfoods.com/wp-content/uploads/2012/01/Dovga-With-Meat-1-800x534.jpg",
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
