import React from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";
import Footer from "../footer/Footer";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
