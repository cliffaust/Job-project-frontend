import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageGallery() {
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
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Image Gallery"
        />
      </div>
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Image Gallery"
        />
      </div>
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1603357465999-241beecc2629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
          alt="Image Gallery"
        />
      </div>
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
          alt="Image Gallery"
        />
      </div>
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="Image Gallery"
        />
      </div>
      <div className="shadow-lg rounded-xl">
        <img
          className="h-72 w-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
          alt="Image Gallery"
        />
      </div>
    </Slider>
  );
}

export default ImageGallery;
