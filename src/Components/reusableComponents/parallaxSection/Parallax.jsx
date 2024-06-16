import React, { useEffect, useRef, useState } from "react";
import "./parallax.scss";
import { getScreenConfig } from "./GetScreenConfig";

// export const getScreenConfig = (width, height) => {
//   const screenConfig = [
//     { minWidth: 1440, minHeight: 900, speed: 0.2, offset: 100 },
//     { minWidth: 1280, minHeight: 800, speed: 0.2, offset: 120 },
//     { minWidth: 1024, minHeight: 768, speed: 0.2, offset: 100 },
//     { minWidth: 1024, minHeight: 600, speed: 0.2, offset: 90 },

//     { minWidth: 1024, minHeight: 1366, speed: 0.2, offset: 120 },

//     { minWidth: 912, minHeight: 1368, speed: 0.2, offset: 170 },
//     { minWidth: 853, minHeight: 1280, speed: 0.2, offset: 180 },
//     { minWidth: 820, minHeight: 1180, speed: 0.2, offset: 130 },
//     { minWidth: 768, minHeight: 1024, speed: 0.2, offset: 100 },
//     { minWidth: 768, minHeight: 600, speed: 0.2, offset: 100 },
//     { minWidth: 576, minHeight: 400, speed: 0.2, offset: 100 },
//     { minWidth: 540, minHeight: 720, speed: 0.2, offset: 110 },
//     { minWidth: 430, minHeight: 932, speed: 0.2, offset: 110 },
//     { minWidth: 412, minHeight: 914, speed: 0.2, offset: 120 },
//     { minWidth: 390, minHeight: 844, speed: 0.2, offset: 100 },
//     { minWidth: 360, minHeight: 740, speed: 0.2, offset: 100 },
//     { minWidth: 375, minHeight: 667, speed: 0.2, offset: 80 },
//     { minWidth: 344, minHeight: 882, speed: 0.2, offset: 100 },

//     // Добавляем другие конфигурации по мере необходимости
//   ];

//   const config = screenConfig.find(
//     (config) => width >= config.minWidth && height >= config.minHeight
//   );
//   console.log("Screen config:", config); // Лог для проверки параметров конфигурации
//   return config || screenConfig[screenConfig.length - 1];
// };

// function Parallax({
//   backgroundImage,
//   title,
//   titleItalic,
//   className,
//   className_title,
//   className_subtitle,
// }) {
//   const parallaxRef = useRef(null);
//   const [scrollOpacity, setScrollOpacity] = useState(1);
//   const [backgroundPosition, setBackgroundPosition] = useState("center center");
//   const [backgroundSize, setBackgroundSize] = useState("cover");

//   useEffect(() => {
//     const handleScroll = () => {
//       const parallaxElement = parallaxRef.current;
//       if (!parallaxElement) return;

//       const rect = parallaxElement.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const windowWidth = window.innerWidth;

//       const {
//         speed,
//         backgroundSize: bgSize,
//         offset,
//       } = getScreenConfig(windowWidth, windowHeight);

//       const backgroundPosY = (rect.top - windowHeight / 2) * speed + offset;
//       console.log("backgroundPosY:", backgroundPosY); // Лог для проверки значения backgroundPosY

//       setBackgroundPosition(`center ${backgroundPosY}px`);
//       setBackgroundSize(bgSize);

//       const distanceFromCenter = Math.abs(
//         windowHeight / 2 - (rect.top + rect.height / 2)
//       );
//       const maxOpacityDistance = windowHeight / 2;
//       const opacity = 1 - distanceFromCenter / maxOpacityDistance;
//       setScrollOpacity(opacity < 0 ? 0 : opacity);
//     };

//     const handleResize = () => {
//       handleScroll();
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div
//       className={`parallax-wrapper ${className}`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundPosition: backgroundPosition,
//         backgroundSize: backgroundSize,
//       }}
//       ref={parallaxRef}
//     >
//       <div className="parallax__content">
//         <h2
//           className={`parallax__title-italics ${className_title}`}
//           style={{ opacity: scrollOpacity }}
//         >
//           {titleItalic}
//         </h2>
//         <h2
//           className={`parallax__title ${className_subtitle}`}
//           style={{ opacity: scrollOpacity }}
//         >
//           {title}
//         </h2>
//       </div>
//       <div className="mask"></div>
//     </div>
//   );
// }

// export default Parallax;

function Parallax({
  backgroundImage,
  title,
  titleItalic,
  className,
  className_title,
  className_subtitle,
}) {
  const parallaxRef = useRef(null);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [backgroundPosition, setBackgroundPosition] = useState("center center");
  const [backgroundSize, setBackgroundSize] = useState("cover");

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      if (!parallaxElement) return;

      const rect = parallaxElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      const {
        speed,
        backgroundSize: bgSize,
        offset,
      } = getScreenConfig(windowWidth, windowHeight);

      const backgroundPosY = (rect.top - windowHeight / 2) * speed + offset;
      console.log("backgroundPosY:", backgroundPosY); // Лог для проверки значения backgroundPosY

      setBackgroundPosition(`center ${backgroundPosY}px`);
      setBackgroundSize(bgSize);

      const distanceFromCenter = Math.abs(
        windowHeight / 2 - (rect.top + rect.height / 2)
      );
      const maxOpacityDistance = windowHeight / 2;
      const opacity = 1 - distanceFromCenter / maxOpacityDistance;
      setScrollOpacity(opacity < 0 ? 0 : opacity);
    };

    const handleResize = () => {
      handleScroll();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`parallax-wrapper ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: backgroundPosition,
        backgroundSize: backgroundSize,
      }}
      ref={parallaxRef}
    >
      <div className="parallax__content">
        <h2
          className={`parallax__title-italics ${className_title}`}
          style={{ opacity: scrollOpacity }}
        >
          {titleItalic}
        </h2>
        <h2
          className={`parallax__title ${className_subtitle}`}
          style={{ opacity: scrollOpacity }}
        >
          {title}
        </h2>
      </div>
      <div className="mask"></div>
    </div>
  );
}

export default Parallax;
