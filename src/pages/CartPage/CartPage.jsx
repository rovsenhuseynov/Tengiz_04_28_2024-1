import React, { useContext, useEffect, useRef, useState } from "react";
import "./CartPage.scss";
import { CartContext } from "../../Components/reusableComponents/Context/CartContext ";
import Popup from "../../Components/reusableComponents/Popup/Popup";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";
import CartItem from "./CartItem";
import { useFormik } from "formik";
import * as Yup from "yup";

const CartPage = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);
  const [showPopup, setShowPopup] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);

  const errorTimeouts = useRef({});

  useEffect(() => {
    setShowPopup(cart.length === 0);
    const calculateTotalPrice = () =>
      cart.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );

    const totalPrice = calculateTotalPrice();
    const discountAmount = totalPrice * 0.005;
    setTotalPrice(totalPrice);
    setDiscount(discountAmount);
    setFinalPrice(totalPrice - discountAmount);
  }, [cart]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const formik = useFormik({
    initialValues: {
      customerName: "",
      address: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required("This field is required"),
      address: Yup.string().required("This field is required"),
      phone: Yup.string().required("This field is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log({
        ...values,
        cart,
        totalQuantity: cart.reduce((total, item) => total + item.quantity, 0),
        finalPrice,
      });
      resetForm();
      Object.keys(errorTimeouts.current).forEach((key) =>
        clearTimeout(errorTimeouts.current[key])
      );
      errorTimeouts.current = {};
    },
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    const errors = formik.errors;
    Object.keys(errors).forEach((key) => {
      if (!errorTimeouts.current[key]) {
        errorTimeouts.current[key] = setTimeout(() => {
          formik.setFieldError(key, "");
          delete errorTimeouts.current[key];
        }, 5000);
      }
    });

    return () => {
      Object.keys(errorTimeouts.current).forEach((key) =>
        clearTimeout(errorTimeouts.current[key])
      );
      errorTimeouts.current = {};
    };
  }, [formik.errors, formik.setFieldError, formik]);

  return (
    <div className="cartPage">
      <ScrollToTop />
      <h2 className="cartPage-title">
        YOUR CART
        {cart.length > 0 && (
          <span className="cartPage-quantity">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </h2>

      {cart.length === 0 && showPopup && (
        <Popup show={showPopup} onClose={handleClosePopup} />
      )}

      {cart.length > 0 && (
        <div className="cartPage-container">
          <ul className="cartPage__list">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            ))}
          </ul>

          <div className="cartPage-summary">
            <p className="cartPage__summary-item number-dishes">
              Number of dishes:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="cartPage__summary-item sum">
              Sum: {totalPrice.toFixed(2)} ₼
            </p>
            <p className="cartPage__summary-item discount">
              Discount: {discount.toFixed(2)} ₼
            </p>
            <p className="cartPage__summary-item total">
              Total payable: {finalPrice.toFixed(2)} ₼
            </p>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section__title">Placing an order</h2>

            {formik.status === "success" && (
              <div className="order-status success">
                Заказ успешно отправлен!
              </div>
            )}
            {formik.status === "error" && (
              <div className="order-status error">
                Пожалуйста, заполните все поля корректно.
              </div>
            )}

            <form onSubmit={formik.handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="customerName">Customer Name</label>
                <input
                  id="customerName"
                  name="customerName"
                  type="text"
                  {...formik.getFieldProps("customerName")}
                  className="transparent-input"
                  autoComplete="name"
                />
                {formik.touched.customerName && formik.errors.customerName ? (
                  <span className="error-message visible">
                    {formik.errors.customerName}
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  {...formik.getFieldProps("address")}
                  className="transparent-input"
                  autoComplete="street-address"
                />
                {formik.touched.address && formik.errors.address ? (
                  <span className="error-message visible">
                    {formik.errors.address}
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  {...formik.getFieldProps("phone")}
                  className="transparent-input"
                  autoComplete="tel"
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <span className="error-message visible">
                    {formik.errors.phone}
                  </span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className="transparent-input"
                  autoComplete="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <span className="error-message visible">
                    {formik.errors.email}
                  </span>
                ) : null}
              </div>
              <button type="submit" className="checkout-button">
                Confirm the order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
