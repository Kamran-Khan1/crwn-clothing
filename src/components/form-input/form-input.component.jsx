import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...OtherInputs }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...OtherInputs} />
    {label ? (
      <label
        className={`${
          OtherInputs.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
