import React from "react";
import Parallax from "../../../Components/reusableComponents/parallaxSection/Parallax";
import bgImage from "../../../assets/image/0_66/R.webp";

function ParallaxElementFirst() {
  return (
    <>
      <Parallax
        backgroundImage={bgImage}
        titleItalic="Tasteful"
        title="Recipes"
      />
    </>
  );
}

export default ParallaxElementFirst;
