import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Layout from "./Components/layout/Layout";
import Menu from "./pages/menu/Menu";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/login/Login";
import ContactUs from "./pages/ContactUs/ContactUs";
import CartPage from "./pages/CartPage/CartPage";
import { CartProvider } from "./Components/reusableComponents/Context/CartContext ";
import ReservationForm from "./pages/ReservationForm/ReservationForm";
import ComponentFAQ from "./pages/ContactUs/ComponentFAQ/ComponentFAQ";

const App = () => {
  return (
    <CartProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/reservationForm" element={<ReservationForm />} />
            <Route path="/cartPage" element={<CartPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/faq" element={<ComponentFAQ />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
};

export default App;
