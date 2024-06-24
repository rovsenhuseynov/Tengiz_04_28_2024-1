import React from "react";
import "./Slider.scss";

function CustomSlider() {
  return (
    <div className="custom-slider">
      <div class="grid-container">
        <div class="grid-item photo1">
          <img
            class="filter-image"
            src="https://picsum.photos/id/101/400/300"
            alt=""
          />
        </div>

        <div class="grid-item photo2">
          <img
            class="filter-image"
            src="https://picsum.photos/id/201/400/300"
            alt=""
          />
        </div>

        <div class="grid-item photo3">
          <img
            class="filter-image"
            src="https://picsum.photos/id/501/400/300"
            alt=""
          />
        </div>
      </div>

      <svg>
        <defs>
          <filter id="crumple-effect-1">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.1"
              numOctaves="5"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.1;0.3;0.6;1.0"
                keyTimes="0;0.5;0.75;1"
                dur="15s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="0">
              <animate
                attributeName="scale"
                values="0;20;50;100"
                keyTimes="0;0.5;0.75;1"
                dur="60s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>

          <filter id="crumple-effect-2">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="5"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.1;0.2"
                keyTimes="0;1"
                dur="10s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="0">
              <animate
                attributeName="scale"
                values="30;60"
                keyTimes="0;1"
                dur="10s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>

          <filter id="crumple-effect-3">
            <feTurbulence
              id="turbulence"
              type="fractalNoise"
              baseFrequency="0.02"
              numOctaves="5"
              result="turbulence"
            >
              <animate
                attributeName="baseFrequency"
                values="0.6;0.3;0.2;0.1"
                keyTimes="0;0.5;0.75;1"
                dur="15s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="0">
              <animate
                attributeName="scale"
                values="0;50;75;100"
                keyTimes="0;0.5;0.75;1"
                dur="60s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default CustomSlider;
