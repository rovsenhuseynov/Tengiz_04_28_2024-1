import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SlidersComponent.scss";

const SlidersComponent = ({ data, renderSlideContent }) => {
  const [popupImage, setPopupImage] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial call
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openPopup = (imageUrl) => {
    setPopupImage(imageUrl);
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        freeMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            {renderSlideContent(item, openPopup)}
            {/* Передаем openPopup в renderSlideContent */}
          </SwiperSlide>
        ))}
      </Swiper>

      {popupImage && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={popupImage} alt="popup" />
          </div>
        </div>
      )}
    </>
  );
};

export default SlidersComponent;
