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

    const calculateTotalPrice = () => {
      return cart.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      );
    };

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
      customerName: Yup.string().required(
        "Это поле обязательно для заполнения"
      ),
      address: Yup.string().required("Это поле обязательно для заполнения"),
      phone: Yup.string().required("Это поле обязательно для заполнения"),
      email: Yup.string()
        .email("Некорректный адрес электронной почты")
        .required("Это поле обязательно для заполнения"),
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
              Количество блюд:{" "}
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </p>
            <p className="cartPage__summary-item sum">
              Сумма: {totalPrice.toFixed(2)} ₼
            </p>
            <p className="cartPage__summary-item discount">
              Скидка: {discount.toFixed(2)} ₼
            </p>
            <p className="cartPage__summary-item total">
              Всего к оплате: {finalPrice.toFixed(2)} ₼
            </p>
          </div>

          <div className="checkout-section">
            <h2 className="checkout-section__title">Оформление заказа</h2>

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
                <label htmlFor="customerName">Имя клиента</label>
                <input
                  id="customerName"
                  name="customerName"
                  type="text"
                  {...formik.getFieldProps("customerName")}
                  className="transparent-input"
                  autoComplete="name"
                />
                {formik.touched.customerName && formik.errors.customerName && (
                  <span className="error-message visible">
                    {formik.errors.customerName}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="address">Адрес</label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  {...formik.getFieldProps("address")}
                  className="transparent-input"
                  autoComplete="street-address"
                />
                {formik.touched.address && formik.errors.address && (
                  <span className="error-message visible">
                    {formik.errors.address}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  {...formik.getFieldProps("phone")}
                  className="transparent-input"
                  autoComplete="tel"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <span className="error-message visible">
                    {formik.errors.phone}
                  </span>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Электронная почта</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  className="transparent-input"
                  autoComplete="email"
                />
                {formik.touched.email && formik.errors.email && (
                  <span className="error-message visible">
                    {formik.errors.email}
                  </span>
                )}
              </div>
              <button type="submit" className="checkout-button">
                Подтвердить заказ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
