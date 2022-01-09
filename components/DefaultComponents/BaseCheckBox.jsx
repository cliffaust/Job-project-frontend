import React from "react";

function BaseCheckBox({ label, value, name, onChange, className }) {
  return (
    <div className={"flex items-center " + className}>
      <input
        id="others"
        name={name}
        className="input"
        type="checkbox"
        value={value}
        onChange={onChange}
      />
      {label ? (
        <label htmlFor="others" className="font-bold ml-2 text-sm">
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default BaseCheckBox;
