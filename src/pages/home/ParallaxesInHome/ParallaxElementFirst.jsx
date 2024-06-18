// import React, { useEffect, useState } from "react";
// import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
// import bgImage from "../../../assets/image/0_66/R.webp";

// function ParallaxElementFirst() {
//   const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth < 1280);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const customStyles = isSmallScreen
//     ? {
//         backgroundSize: "175%", // переопределяем размер фона
//       }
//     : {};

//   return (
//     <Parallax
//       backgroundImage={bgImage}
//       titleItalic="Tasteful"
//       title="Recipes"
//       customStyles={customStyles} // передаем пользовательские стили при малых экранах
//     />
//   );
// }

// export default ParallaxElementFirst;

import React, { useEffect, useState } from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import bgImage from "../../../assets/image/0_66/R.webp";

function ParallaxElementFirst() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1279);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1279);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customStyles = isLargeScreen
    ? {
        backgroundSize: "100%", // переопределяем размер фона

      }
    : {};

  return (
    <Parallax
      backgroundImage={bgImage}
      titleItalic="Tasteful"
      title="Recipes"
      customStyles={customStyles} // передаем пользовательские стили при больших экранах
    />
  );
}

export default ParallaxElementFirst;




// import React, { useEffect, useState } from "react";
// import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
// import bgImage from "../../../assets/image/0_66/R.webp";

// function ParallaxElementFirst() {
//   const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1280);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsLargeScreen(window.innerWidth > 1280);
//     };

//     window.addEventListener("resize", handleResize);

//     // Initial check
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <Parallax
//       backgroundImage={bgImage}
//       titleItalic="Tasteful"
//       title="Recipes"
//       isLargeScreen={isLargeScreen} // передаем состояние isLargeScreen
//     />
//   );
// }

// export default ParallaxElementFirst;
