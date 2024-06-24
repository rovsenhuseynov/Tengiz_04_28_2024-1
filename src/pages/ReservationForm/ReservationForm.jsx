import React, { useEffect, useRef, useState } from "react";
import "./ReservationForm.scss";
import ScrollToTop from "../../Components/reusableComponents/ScrollToTop/ScrollToTop";
import FormInput from "./FormInput";

const ReservationForm = () => {
  const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem("reservationFormData");
    return storedData
      ? JSON.parse(storedData)
      : {
          name: "",
          email: "",
          number: "",
          time: "",
          vegetarian: "",
          occasion: "",
          allergies: [],
          comments: "",
        };
  });
  const [errors, setErrors] = useState({});
  const [areRadioButtonsDisabled, setAreRadioButtonsDisabled] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("reservationFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (formData.name === "") {
      timerRef.current = setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          number: "",
          vegetarian: "",
          occasion: "",
        }));
        setAreRadioButtonsDisabled(true);
      }, 10000); // 10 seconds
    } else {
      setAreRadioButtonsDisabled(false);
    }
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [
    formData.name,
    formData.email,
    formData.number,
    formData.time,
    formData.vegetarian,
    formData.occasion,
    formData.allergies,
    formData.comments,
  ]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;
    if (type === "number") {
      newValue = Math.min(6, Math.max(1, parseInt(value)));
    }
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        allergies: checked
          ? [...prevState.allergies, value]
          : prevState.allergies.filter((allergy) => allergy !== value),
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: newValue }));
    }
  };
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!formData.number) newErrors.number = "Number of people is required";
    else if (formData.number < 1 || formData.number > 6)
      newErrors.number = "Number of people must be between 1 and 6";
    if (!formData.time) newErrors.time = "Time is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) console.log("Form submitted:", formData);
  };
  return (
    <div className="reservationForm">
      <ScrollToTop />
      <div className="reservationForm__content">
        <div className="reservationForm__header">
          <h1 id="title">Restaurant Reservation Form</h1>
          <p id="description">
            Please use the form below to reserve a table at our restaurant.
          </p>
        </div>
        <div className="reservationForm__main">
          <form id="form" onSubmit={handleSubmit}>
            <FormInput
              label="Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Enter your name"
              required
              autoComplete="name"
            />
            <FormInput
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="Enter your email"
              required
            />
            <FormInput
              label="Number of People"
              id="number"
              name="number"
              type="number"
              value={formData.number}
              onChange={handleChange}
              error={errors.number}
              placeholder="How many people?"
              required
            />
            <FormInput
              label="Select preferred time"
              id="time"
              name="time"
              type="select"
              value={formData.time}
              onChange={handleChange}
              error={errors.time}
              options={[
                { label: "Select time", value: "" },
                { label: "18:00", value: "18:00" },
                { label: "18:30", value: "18:30" },
                { label: "19:00", value: "19:00" },
                { label: "19:30", value: "19:30" },
                { label: "20:00", value: "20:00" },
                { label: "21:00", value: "21:00" },
                { label: "22:00", value: "22:00" },
              ]}
              required
            />
            <FormInput
              label="Is anyone in your group vegetarian or vegan?"
              name="vegetarian"
              type="radio-group"
              options={[
                { label: "Vegan", value: "vegan" },
                { label: "Vegetarian", value: "yes" },
                { label: "Neither", value: "no" },
              ]}
              checked={formData.vegetarian}
              onChange={handleChange}
              disabled={areRadioButtonsDisabled}
            />
            <FormInput
              label="What's the occasion for your dinner?"
              name="occasion"
              type="radio-group"
              options={[
                { label: "Business", value: "business" },
                { label: "Family", value: "family" },
                { label: "Couple", value: "couple" },
              ]}
              checked={formData.occasion}
              onChange={handleChange}
              disabled={areRadioButtonsDisabled}
            />
            <FormInput
              label="Do you have any allergies to these ingredients?"
              name="allergies"
              type="checkbox-group"
              options={[
                { label: "Peanuts", value: "peanuts" },
                { label: "Lactose", value: "lactose" },
                { label: "Peas", value: "peas" },
                { label: "No allergies", value: "no_allergies" },
              ]}
              value={formData.allergies}
              onChange={handleChange}
              disabled={areRadioButtonsDisabled}
            />
            <FormInput
              label="Any additional comments?"
              id="comments"
              name="comments"
              type="textarea"
              value={formData.comments}
              onChange={handleChange}
            />
            <div className="form-group">
              <button id="submit" type="submit">
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ReservationForm;

// Поле number и состояние радио-кнопок обновляются если поле name пусто в течении 10 секунд. Cброс происходит, если поле name изначально пустое и остается пустым в течение 10 секунд после загрузки или изменения формы.
