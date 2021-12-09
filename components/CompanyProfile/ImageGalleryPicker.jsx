import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

function ImageGalleryPicker() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [allowGallerySlideNext, setAllowGallerySlideNext] = useState(false);
  const [gallerySwiperIndex, setGallerySwiperIndex] = useState(0);

  const settings = {
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };
  return (
    <>
      <Swiper
        {...settings}
        onSwiper={(swiper) => setAllowGallerySlideNext(swiper.allowSlideNext)}
        onSlideChange={(swiper) => setGallerySwiperIndex(swiper.realIndex)}
        thumbs={{ swiper: thumbsSwiper }}
        className="!mb-4"
      >
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1603357465999-241beecc2629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-500">
          <img
            className="image-gallery"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <div
          className={
            "absolute flex cursor-pointer items-center justify-center top-2/4 z-50 left-6 -translate-y-2/4 swiper-pagination swiper-button-prev w-10 h-10 rounded-full bg-white shadow-lg " +
            (gallerySwiperIndex === 0 ? "invisible" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div
          className={
            "absolute cursor-pointer flex items-center justify-center top-2/4 z-50 right-6 -translate-y-2/4 swiper-pagination swiper-button-next w-10 h-10 rounded-full bg-white shadow-lg " +
            (!allowGallerySlideNext ? "invisible" : "")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={"auto"}
        // centeredSlides={true}
        freeMode={true}
        watchSlidesProgress={true}
        className="image-picker-container"
      >
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1603357465999-241beecc2629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
        <SwiperSlide className="!h-32 !w-72 !overflow-hidden">
          <img
            className="image-gallery-picker"
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt="Image Gallery"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ImageGalleryPicker;
