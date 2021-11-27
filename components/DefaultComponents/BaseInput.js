import React from "react";

export default function BaseInput({
  label,
  errorStyle,
  name,
  value,
  handleChange,
}) {
  return (
    <div className="flex flex-col">
      {label ? (
        <label className="block text-gray-700 text-sm font-bold mb-2">
          {label}
        </label>
      ) : (
        ""
      )}
      <div>
        <input
          onChange={handleChange}
          name={name}
          value={value}
          className={
            "appearance-none leading-tight border-2 border-gray-400 focus:outline-none py-3 px-2 text-gray-700 w-full text-base " +
            errorStyle
              ? "border-red-300"
              : ""
          }
        />
      </div>
    </div>
  );
}
