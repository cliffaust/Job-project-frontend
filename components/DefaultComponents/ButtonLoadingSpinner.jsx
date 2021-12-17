import React from "react";

function ButtonLoadingSpinner({ width = 22, height = 22 }) {
  return (
    <div
      className="sp sp-circle"
      style={{ width: width + "px", height: height + "px" }}
    ></div>
  );
}

export default ButtonLoadingSpinner;
