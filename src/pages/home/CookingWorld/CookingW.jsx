// import React from "react";
// import { NavLink } from "react-router-dom";
// import CookingWorldImg_1 from "../../../assets/image/CookingWorldImg/CookingWorldIm_1.webp";
// import CookingWorldImg_2 from "../../../assets/image/CookingWorldImg/CookingWorldIm_2.webp";
// import CookingWorldImg_3 from "../../../assets/image/CookingWorldImg/CookingWorldIm_3.webp";
// import CookingWorldImg_4 from "../../../assets/image/CookingWorldImg/CookingWorldIm_4.webp";
// import "./CookingW.scss";

// const CookingWorldImg = () => {
//   return (
//     <div className="cookingW">
//       <div className="cookingW__top">
//         <div className="cookingW__top-logo">
//           <span className="cookingW__top-logo-title">Cooking</span>
//           <h2 className="cookingW__top-logo-subtitle">World</h2>
//         </div>

//         <div className="cookingW__top-text">
//           Open the doors to a world of flavors! Indulge in an unforgettable
//           journey through the culinary traditions of the world right here in our
//           restaurant. From delicious Georgian "khinkali" to exquisite Japanese
//           sushi - each dish with us is a true immersion into the culture and
//           flavors of different corners of the planet.
//         </div>

//         <span className="cookingW__top-bg-watermark">TASTE</span>
//       </div>

//       <div className="cookingW__bottom">
//         <div className="cookingW__bottom-cards">
//           <div className="cookingW__bottom-cards-card">
//             <img
//               className="cookingW__bottom-cards-card-img"
//               src={CookingWorldImg_1}
//               alt="Franklin Carlson"
//             />
//             <div className="cookingW__bottom-cards-card-content">
//               <h3 className="card-content-h3">Pizza Siciliana</h3>
//               <p className="card-content-p">Italy-Sicily</p>
//             </div>
//           </div>

//           <div className="cookingW__bottom-cards-card">
//             <img
//               className="cookingW__bottom-cards-card-img"
//               src={CookingWorldImg_2}
//               alt="Antonia Moore"
//             />
//             <div className="cookingW__bottom-cards-card-content">
//               <h3 className="card-content-h3">
//                 Khinkali &<br />
//                 Khachapuri in Adjara
//               </h3>
//               <p className="card-content-p">Georgia</p>
//             </div>
//           </div>

//           <div className="cookingW__bottom-cards-card">
//             <img
//               className="cookingW__bottom-cards-card-img"
//               src={CookingWorldImg_3}
//               alt="Travis Lynch"
//             />
//             <div className="cookingW__bottom-cards-card-content">
//               <h3 className="card-content-h3">Kebab</h3>
//               <p className="card-content-p">Azerbaijan</p>
//             </div>
//           </div>

//           <div className="cookingW__bottom-cards-card">
//             <img
//               className="cookingW__bottom-cards-card-img"
//               src={CookingWorldImg_4}
//               alt="Travis Lynch"
//             />
//             <div className="cookingW__bottom-cards-card-content">
//               <h3 className="card-content-h3">Kofta Kebabs</h3>
//               <p className="card-content-p">Türkiye</p>
//             </div>
//           </div>
//         </div>
//         <NavLink to="/about" className="link-to">
//           VIEW THE FULL MENU
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default CookingWorldImg;


//  AFTER OPTIMIZATION  ---------------------------------
import React from "react";
import { NavLink } from "react-router-dom";
import CookingWorldImg_1 from "../../../assets/image/CookingWorldImg/CookingWorldIm_1.webp";
import CookingWorldImg_2 from "../../../assets/image/CookingWorldImg/CookingWorldIm_2.webp";
import CookingWorldImg_3 from "../../../assets/image/CookingWorldImg/CookingWorldIm_3.webp";
import CookingWorldImg_4 from "../../../assets/image/CookingWorldImg/CookingWorldIm_4.webp";
import "./CookingW.scss";

const cardData = [
  {
    img: CookingWorldImg_1,
    alt: "Franklin Carlson",
    title: "Pizza Siciliana",
    location: "Italy-Sicily"
  },
  {
    img: CookingWorldImg_2,
    alt: "Antonia Moore",
    title: "Khinkali & Khachapuri in Adjara",
    location: "Georgia"
  },
  {
    img: CookingWorldImg_3,
    alt: "Travis Lynch",
    title: "Kebab",
    location: "Azerbaijan"
  },
  {
    img: CookingWorldImg_4,
    alt: "Travis Lynch",
    title: "Kofta Kebabs",
    location: "Türkiye"
  }
];

const CookingWorldImg = () => {
  return (
    <div className="cookingW">
      <div className="cookingW__top">
        <div className="cookingW__top-logo">
          <span className="cookingW__top-logo-title">Cooking</span>
          <h2 className="cookingW__top-logo-subtitle">World</h2>
        </div>

        <div className="cookingW__top-text">
          Open the doors to a world of flavors! Indulge in an unforgettable
          journey through the culinary traditions of the world right here in our
          restaurant. From delicious Georgian "khinkali" to exquisite Japanese
          sushi - each dish with us is a true immersion into the culture and
          flavors of different corners of the planet.
        </div>

        <span className="cookingW__top-bg-watermark">TASTE</span>
      </div>

      <div className="cookingW__bottom">
        <div className="cookingW__bottom-cards">
          {cardData.map((card, index) => (
            <div key={index} className="cookingW__bottom-cards-card">
              <img
                className="cookingW__bottom-cards-card-img"
                src={card.img}
                alt={card.alt}
              />
              <div className="cookingW__bottom-cards-card-content">
                <h3 className="card-content-h3">{card.title}</h3>
                <p className="card-content-p">{card.location}</p>
              </div>
            </div>
          ))}
        </div>
        <NavLink to="/menu" className="link-to">
          VIEW THE FULL MENU
        </NavLink>
      </div>
    </div>
  );
};

export default CookingWorldImg;