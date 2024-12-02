import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ children, isSignWithGoogle, ...OtherProps }) => (
  <button
    className={`${isSignWithGoogle ? "sign-in-google" : ""} custom-button`}
    {...OtherProps}
  >
    {children}
  </button>
);

export default CustomButton;
