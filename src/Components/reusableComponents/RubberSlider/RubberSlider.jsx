import React, { useState, useEffect } from "react";
import "./RubberSlider.scss";

// Компонент для отображения отдельного слайда
const Panel = ({ title, imageUrl, isActive, onClick }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setTimeout(() => {
        setShowText(true);
      }, 0);
    } else {
      setShowText(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isActive]);

  return (
    <div
      className={`panel ${isActive ? "active" : ""}`}
      style={{ backgroundImage: `url('${imageUrl}')` }}
      onClick={onClick}
    >
      <h3
        className="RubberSlider-text"
        style={{
          opacity: showText ? 1 : 0,
          transitionDuration: showText ? "0.5s" : "0s",
        }}
      >
        {title}
      </h3>
    </div>
  );
};

// Основной компонент слайдера
const RubberSlider = ({ panelsData }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Обработчик клика по панели
  const handlePanelClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="RubberSlider">
      <div className="RubberSlider-wrapper">
        {/* Отображение каждой панели */}
        {panelsData.map((panel, index) => (
          <Panel
            key={index}
            title={panel.title}
            imageUrl={panel.imageUrl}
            isActive={activeIndex === index}
            onClick={() => handlePanelClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RubberSlider;
