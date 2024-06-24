import React from "react";

const FormInput = ({
  label,
  id,
  type = "text",
  name,
  value = [],
  onChange,
  error,
  options = [],
  checked,
  placeholder,
  required,
}) => {
  if (type === "select") {
    return (
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={error ? "error" : ""}
          required={required}
        >
          <option value="">{placeholder}</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className="error">{error}</span>}
      </div>
    );
  }

  if (type === "radio-group" || type === "checkbox-group") {
    return (
      <div className="form-group">
        <p>{label}</p>
        <div className={type}>
          {options.map((option, index) => (
            <div className="option-container" key={index}>
              <label htmlFor={`${name}${index}`}>{option.label}</label>
              <input
                id={`${name}${index}`}
                type={type === "radio-group" ? "radio" : "checkbox"}
                name={name}
                value={option.value}
                checked={
                  checked
                    ? checked === option.value
                    : value.includes(option.value)
                }
                onChange={onChange}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? "error" : ""}
        required={required}
        autoComplete="name"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default FormInput;
