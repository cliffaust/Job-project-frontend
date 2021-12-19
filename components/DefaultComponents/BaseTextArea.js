import React from "react";

export default function BaseInput({
  label,
  errorStyle,
  name,
  value,
  onChange,
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
        <textarea
          cols="30"
          rows="10"
          onChange={onChange}
          name={name}
          value={value}
          placeholder={placeholder}
          className={
            "appearance-none leading-tight border resize-none border-gray-300 rounded-md focus:outline-none py-3 px-4 w-full text-base " +
            className +
            (errorStyle ? "border-red-300" : "")
          }
        />
      </div>
    </>
  );
}
