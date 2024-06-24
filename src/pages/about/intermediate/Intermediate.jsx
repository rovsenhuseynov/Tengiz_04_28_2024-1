import React from "react";
import "./Intermediate.scss";
import cooking from "../../../assets/image/cooking-5510047_640.png.svg";
import { intermediateContent } from "../../../Components/reusableComponents/DataBox/intermediateContent";

function Intermediate() {
  return (
    <div className="intermediate ">
      
      <div className="intermediate__head">
        <img
          src={cooking}
          alt={intermediateContent.head.imageAlt}
          className="intermediate__head-img"
        />
        <h2 className="text-block__element-h2">
          {intermediateContent.head.title}
        </h2>
      </div>

      <div className="text-block">
        {intermediateContent.textBlock.map((text, index) => (
          <div key={index} className={`text-block__texEl-${index + 1}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intermediate;
