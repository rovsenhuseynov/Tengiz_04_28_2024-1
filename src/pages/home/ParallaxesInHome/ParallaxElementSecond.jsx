import React, { useEffect, useState } from 'react'

import bgImage_2 from "../../../assets/image/0_66/R1.webp";
import Parallax from '../../../Components/reusableComponents/parallaxSection/Parallax';

function ParallaxElementSecond() {
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
          backgroundImage={bgImage_2}
          titleItalic="The perfect"
          title="BLEND"
          customStyles={customStyles} // передаем пользовательские стили
        />
      </>
    );
}

export default ParallaxElementSecond;