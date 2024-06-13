// import React from "react";
// import "./OurStory.scss";
// // import image_20 from "../../../assets/image/restoran/R.webp";
// import { NavLink } from "react-router-dom";
// import image_1 from "../../../assets/image/restoran/restaurant_1.webp";
// import image_2 from "../../../assets/image/restoran/restaurant_2.webp";
// import image_3 from "../../../assets/image/restoran/restaurant_3.webp";
// import image_4 from "../../../assets/image/restoran/restaurant_4.jpeg";

// const OurStory = () => {
//   return (
//     <div className="ourStory next-section">
//       <div className="ourStory__container">
//         <div className="ourStory__text">
//           <div className="ourStory__logo">
//             <div className="ourStory__logo-title">Discover</div>
//             <div className="ourStory__logo-subtitle">OUR STORY</div>
//           </div>

//           <div className="decorative-divider">✻</div>
//           <div className="ourStory__text-p">
//             "Best Food in Azerbaijan" is a restaurant and cafe located on the
//             busy corner of Yashyl Bazaar in Narimanov. With a glazed facade on
//             both sides of the building, overlooking the market and the busy
//             intersection of Baku.
//           </div>
//           <NavLink to="/about" className="link-to">
//             About Us
//           </NavLink>
//         </div>

//         <div className="rotating-cube-wrapper">
//           <div className="rotating-cube-container">
//             <div className="rotating-cube">
//               <img src={image_1} alt="front" className="rotating-cube-front" />
//               <img src={image_2} alt="back" className="rotating-cube-back" />
//               <img src={image_3} alt="right" className="rotating-cube-right" />
//               <img src={image_4} alt="left" className="rotating-cube-left" />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default OurStory;

import React from "react";
import "./OurStory.scss";
import { NavLink } from "react-router-dom";
import image_1 from "../../../assets/image/restoran/restaurant_1.webp";
import image_2 from "../../../assets/image/restoran/restaurant_2.webp";
import image_3 from "../../../assets/image/restoran/restaurant_3.webp";
import image_4 from "../../../assets/image/restoran/restaurant_4.jpeg";
import RotatingCube from "../../../Components/reusableComponents/RotatingCube/RotatingCube";

const OurStory = () => {
  const images = [image_1, image_2, image_3, image_4];

  return (
    <div className="ourStory next-section">
      <div className="ourStory__container">
        <div className="ourStory__text">
          <div className="ourStory__logo">
            <div className="ourStory__logo-title">Discover</div>
            <div className="ourStory__logo-subtitle">OUR STORY</div>
          </div>

          <div className="decorative-divider">✻</div>
          <div className="ourStory__text-p">
            "Best Food in Azerbaijan" is a restaurant and cafe located on the
            busy corner of Yashyl Bazaar in Narimanov. With a glazed facade on
            both sides of the building, overlooking the market and the busy
            intersection of Baku.
          </div>

          <NavLink to="/about" className="link-to">
            About Us
          </NavLink>
        </div>
        <RotatingCube images={images} />
      </div>
    </div>
  );
};

export default OurStory;
