import React, { useState } from "react";
import "./ContactUsMap.scss";
import zoomIcon from "../../../assets/svg/Increase_Decrease/Increase.svg";

// добавляем состояние для ключа iframe (iframeKey) и функцию updateIframe, которая обновляет это состояние при клике на ссылку. Это принудительно заставляет React перерендеривать iframe с новым ключом.

function ContactUsMap() {
  const [iframeKey, setIframeKey] = useState(0);

  const updateIframe = () => {
    setIframeKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="contactUsMap">
      <h2 className="contactUsMap-title">How to find us</h2>
      <div className="contactUsMap-box">
        <iframe
          key={iframeKey}
          title="Карта с местоположением"
          src="https://www.openstreetmap.org/export/embed.html?bbox=49.84772%2C40.40791%2C49.84872%2C40.40991&layer=mapnik&marker=40.40891%2C49.84822&zoom=19"
          style={{ border: "1px solid black" }}
          allowFullScreen
        ></iframe>
        <small>
          <a
            href="https://www.openstreetmap.org/?mlat=40.40891&mlon=49.84822#map=19/40.40891/49.84822"
            onClick={updateIframe}
          >
            <img className="fas zoomIcon" src={zoomIcon} alt="" />
          </a>
        </small>
      </div>
    </div>
  );
}

export default ContactUsMap;
