import React, { useState } from "react";

const ReadMore = ({ children, numOfWords }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div className="inline w-full">
      {isReadMore ? text.slice(0, numOfWords) : text}
      <span
        onClick={toggleReadMore}
        className="cursor-pointer text-purple-500 font-bold"
      >
        {isReadMore ? "...read more" : " show less"}
      </span>
    </div>
  );
};

export default ReadMore;
