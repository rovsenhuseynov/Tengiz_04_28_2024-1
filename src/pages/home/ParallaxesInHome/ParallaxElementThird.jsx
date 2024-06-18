import React, { useEffect, useState } from "react";
import bgImage_3 from "../../../assets/image/0_66/R2.webp";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";

function ParallaxElementThird() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customStyles = isSmallScreen
    ? {
        backgroundSize: "175%", // переопределяем размер фона
      }
    : {};

  return (
    <>
      <Parallax
        backgroundImage={bgImage_3}
        titleItalic="Best"
        title="dishes"
        customStyles={customStyles} // передаем пользовательские стили при малых экранах
      />
    </>
  );
}

export default ParallaxElementThird;
