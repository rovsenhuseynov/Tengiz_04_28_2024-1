// import React, { useEffect, useRef, useState } from "react";
// import "./parallax.scss";
// import { getScreenConfig } from "./GetScreenConfig";

// function Parallax({
//   backgroundImage,
//   title,
//   titleItalic,
//   className,
//   className_title,
//   className_subtitle,
//   isLargeScreen, // принимаем prop для определения пользовательских стилей
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

//       let backgroundPosY = 0;

//       if (speed && offset) {
//         backgroundPosY = (rect.top - windowHeight / 2) * speed + offset;
//       }

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

//   const customStyles = isLargeScreen
//     ? {
//         backgroundSize: "175%", // переопределяем размер фона
//         backgroundPosition: "top", // можно добавить другие стили
//       }
//     : {};

//   return (
//     <div
//       className={`parallax-wrapper ${className}`}
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundPosition: backgroundPosition,
//         backgroundSize: backgroundSize,
//         ...customStyles, // применяем дополнительные стили
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





// import React, { useEffect, useRef, useState } from "react";
// import "./parallax.scss";
// import { getScreenConfig } from "./GetScreenConfig";

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

//       let backgroundPosY = 0;

//       if (speed && offset) {
//         backgroundPosY = (rect.top - windowHeight / 2) * speed + offset;
//       }

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




import React, { useEffect, useRef, useState } from "react";
import "./parallax.scss";
import { getScreenConfig } from "./GetScreenConfig";

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

      let backgroundPosY = 0;

      if (speed && offset) {
        backgroundPosY = (rect.top - windowHeight / 2) * speed + offset;
      }

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