// import React, { useEffect, useRef, useState } from "react";
// import "./parallax.scss";

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

//   useEffect(() => {
//     const handleScroll = () => {
//       const parallaxElement = parallaxRef.current;
//       if (!parallaxElement) return;

//       const rect = parallaxElement.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const middleOfWindow = windowHeight / 4;
//       const sectionTop = middleOfWindow - windowHeight / 1;
//       const sectionBottom = middleOfWindow + windowHeight / 0;

//       if (rect.top <= sectionBottom && rect.bottom >= sectionTop) {
//         const distanceFromCenter = Math.abs(middleOfWindow - rect.top);
//         const maxOpacityDistance = windowHeight / 2.6;
//         const opacity = 1 - distanceFromCenter / maxOpacityDistance;
//         setScrollOpacity(opacity < 0 ? 0 : opacity);
//       } else {
//         setScrollOpacity(1);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const parallaxStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//   };

//   return (
//     <div
//       className={`parallax-wrapper ${className}`}
//       style={parallaxStyle}
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
  const [backgroundPosition, setBackgroundPosition] = useState('center center');

  useEffect(() => {
    const handleScroll = () => {
      const parallaxElement = parallaxRef.current;
      if (!parallaxElement) return;

      const rect = parallaxElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const middleOfWindow = windowHeight / 7;
      const parallaxSpeed = 0; // Adjust the speed factor as needed

      // Calculate the background position based on the element's position in the viewport
      const backgroundPosY = (middleOfWindow - rect.top) * parallaxSpeed;
      setBackgroundPosition(`center ${backgroundPosY}px`);

      const distanceFromCenter = Math.abs(middleOfWindow - rect.top);
      const maxOpacityDistance = windowHeight / 2.6;
      const opacity = 1 - distanceFromCenter / maxOpacityDistance;
      setScrollOpacity(opacity < 0 ? 0 : opacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: backgroundPosition,
  };

  return (
    <div
      className={`parallax-wrapper ${className}`}
      style={parallaxStyle}
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