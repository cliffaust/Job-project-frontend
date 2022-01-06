import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGallery({ images }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4500,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id} className="shadow-lg rounded-xl">
          <img
            className="h-72 w-full object-cover rounded-xl"
            src={image.image}
            alt="Image Gallery"
          />
        </div>
      ))}
    </Slider>
  );
}

export default ImageGallery;
