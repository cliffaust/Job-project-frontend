import React from "react";

function FilterButton(props) {
  return (
    <div
      className={
        "border-[#BABABA] border cursor-pointer gap-2 px-4 rounded-md py-3 flex items-center justify-center " +
        props.className
      }
    >
      <div>{props.children}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default FilterButton;
