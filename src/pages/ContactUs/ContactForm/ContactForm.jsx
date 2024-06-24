import React, { useState, useEffect } from "react";
import "./ContactForm.scss";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleFocus = (event) =>
      event.target.parentElement.firstElementChild.classList.add("move-up");
    const handleBlur = (event) => {
      if (!event.target.value) {
        event.target.parentElement.firstElementChild.classList.remove(
          "move-up"
        );
      }
    };
    const GTInput = document.querySelectorAll(".gt-input");
    GTInput.forEach((input) => {
      input.addEventListener("focus", handleFocus);
      input.addEventListener("blur", handleBlur);
    });
    return () => {
      GTInput.forEach((input) => {
        input.removeEventListener("focus", handleFocus);
        input.removeEventListener("blur", handleBlur);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(
      () => setErrors({ name: "", email: "", message: "" }),
      3000
    );
    return () => clearTimeout(timer);
  }, [errors]);

  useEffect(() => {
    const timers = Object.keys(formData).reduce((acc, field) => {
      if (!formData[field]) {
        acc[field] = setTimeout(() => {
          const label = document.querySelector(`label[for=${field}]`);
          if (label) label.classList.remove("move-up");
        }, 3000);
      }
      return acc;
    }, {});
    return () => Object.values(timers).forEach(clearTimeout);
  }, [formData]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [id]: "" }));
    setIsSubmitted(false);
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const newErrors = {};
    if (!name) newErrors.name = "Full name is required.";
    if (!email) {
      newErrors.email = "Invalid email address.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Некорректный адрес электронной почты.";
    }
    if (!message) newErrors.message = "Message required.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("The form is valid and ready to submit");
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      console.log("The form contains errors");
      setIsSubmitted(false);
    }
  };

  return (
    <div className="contactForm">
      <div className="contactForm__container">
        <form className="my-form" onSubmit={handleSubmit} noValidate>
          <FormField
            id="name"
            label="Full Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            autoComplete="name"
            required={!!errors.name}
          />
          <FormField
            id="email"
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            autoComplete="email"
            required={!!errors.email}
          />
          <FormField
            id="message"
            label="Your Message"
            type="textarea"
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
            autoComplete="off"
            required={!!errors.message}
          />
          <input
            type="submit"
            value={isSubmitted ? "Successfully!" : "Submit"}
            className={`btn ${isSubmitted ? "btn-success" : ""}`}
            disabled={isSubmitted}
          />
        </form>
      </div>
    </div>
  );
}

function FormField({
  id,
  label,
  type,
  value,
  onChange,
  error,
  required,
  ...props
}) {
  return (
    <div className="form-1">
      <label
        className={`move-up ${value ? "move-up-active" : ""}`}
        htmlFor={id}
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          className="gt-input gt-text"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      ) : (
        <input
          id={id}
          type={type}
          className="gt-input"
          value={value}
          onChange={onChange}
          required={required}
          {...props}
        />
      )}
      <div className="error-space">
        <div className={`error ${error ? "visible" : ""}`}>{error}</div>
      </div>
      <div className="dividing-line" />
    </div>
  );
}

export default ContactForm;
