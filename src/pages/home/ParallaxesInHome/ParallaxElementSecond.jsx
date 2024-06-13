import React from 'react'

import bgImage_2 from "../../../assets/image/0_66/R1.webp";
import Parallax from '../../../Components/reusableComponents/parallaxSection/Parallax';

function ParallaxElementSecond() {
    return (
      <>
        <Parallax
          backgroundImage={bgImage_2}
          titleItalic="The perfect"
          title="BLEND"
        />
      </>
    );
}

export default ParallaxElementSecond