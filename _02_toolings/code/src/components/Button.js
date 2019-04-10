import React from "react";

const Button = ({ enabled }) => {
  return (
    <button
      type="button"
      className={`btn btn-outline-${enabled ? "primary" : "success"}`}
    >
      Book Now
    </button>
  );
};

export default Button;
