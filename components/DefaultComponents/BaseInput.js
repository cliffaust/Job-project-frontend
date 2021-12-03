import React from "react";

export default function BaseInput({
  label,
  errorStyle,
  name,
  value,
  type,
  handleChange,
  placeholder,
  className,
}) {
  return (
    <>
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
          type={type}
          placeholder={placeholder}
          className={
            "appearance-none leading-tight border border-gray-300 rounded-md focus:outline-none py-3 px-4 w-full text-base " +
            className +
            (errorStyle ? "border-red-300" : "")
          }
        />
      </div>
    </>
  );
}
