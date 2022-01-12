import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";

function ImageGalleryPickerSlide({ image }) {
  const [showComment, setShowComment] = useState(false);
  return (
    <SwiperSlide className="relative">
      {showComment && (
        <div className="absolute w-4/5 bottom-10 rounded-lg -translate-x-2/4 left-2/4 right-2/4 py-2 z-10 bg-purple-200">
          <div className="px-6 mb-4 font-bold">{image.comment}</div>
        </div>
      )}
      <div className="relative">
        <img
          className="image-gallery relative"
          src={image.image}
          alt="Image Gallery"
        />
        <div
          onClick={() => setShowComment(!showComment)}
          className="w-12 h-12 flex justify-center cursor-pointer items-center rounded-full bg-purple-500 absolute bottom-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default ImageGalleryPickerSlide;
