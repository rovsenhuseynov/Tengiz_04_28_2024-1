import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import LazyLoad from "./assets/LazyLoad";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ParallaxProvider>
        <LazyLoad>
          <App></App>
        </LazyLoad>
      </ParallaxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
