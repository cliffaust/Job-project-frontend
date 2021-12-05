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
    speed: 3500,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div className="h-80 shadow-lg">
        <img
          src="https://media.istockphoto.com/photos/african-american-businesswoman-head-meeting-with-colleagues-picture-id1300529876?b=1&k=20&m=1300529876&s=170667a&w=0&h=1wRv855Duep9XQ23BFZChkdYVv5TFDYm8CIuZigvLQk="
          className="h-full w-full object-cover rounded-lg"
          alt=""
        />
      </div>
      <div className="h-80 shadow-lg">
        <img
          src="https://media.istockphoto.com/photos/african-american-businesswoman-head-meeting-with-colleagues-picture-id1300529876?b=1&k=20&m=1300529876&s=170667a&w=0&h=1wRv855Duep9XQ23BFZChkdYVv5TFDYm8CIuZigvLQk="
          className="h-full w-full object-cover rounded-lg"
          alt=""
        />
      </div>
    </Slider>
    // <Swiper
    //   slidesPerView={2}
    //   // loop={true}
    //   // spaceBetween={10}
    //   // autoplay={{
    //   //   delay: 2500,
    //   //   disableOnInteraction: false,
    //   // }}
    //   className="!h-64 !w-full"
    // >
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://media.istockphoto.com/photos/african-american-businesswoman-head-meeting-with-colleagues-picture-id1300529876?b=1&k=20&m=1300529876&s=170667a&w=0&h=1wRv855Duep9XQ23BFZChkdYVv5TFDYm8CIuZigvLQk="
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcGFueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcGFueXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    //   <SwiperSlide className="!w-full">
    //     <div className="h-64 w-64 rounded-xl">
    //       <img
    //         className="w-full h-full rounded-xl object-cover"
    //         src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbXBhbnl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
    //         alt="Image Gallery"
    //       />
    //     </div>
    //   </SwiperSlide>
    // </Swiper>
  );
}

export default ImageGallery;
