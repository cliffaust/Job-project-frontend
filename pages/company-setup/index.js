import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import SwiperCore from "swiper";

import "swiper/css/effect-creative";
import "swiper/css";

import CompanySetup from "../../components/CompanyProfileSetup/Setup";

SwiperCore.use([Navigation]);

function Setup() {
  return (
    <>
      <Swiper
        preventInteractionOnTransition={true}
        allowTouchMove={false}
        pagination={{
          el: ".swiper-setup-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-setup-button-next",
          prevEl: ".swiper-setup-button-prev",
        }}
      >
        <SwiperSlide>
          <CompanySetup></CompanySetup>
        </SwiperSlide>
        <SwiperSlide>
          <h2>this is the next slide</h2>
        </SwiperSlide>
        <button className="p-4 bg-gray-400">next</button>
      </Swiper>
    </>
  );
}

export default Setup;
