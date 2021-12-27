import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import SwiperCore from "swiper";

import "swiper/css/effect-creative";
import "swiper/css";

import CompanySetup from "../../components/CompanyProfileSetup/Setup";
import ImageUpload from "../../components/CompanyProfileSetup/ImageUpload";

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
          <ImageUpload></ImageUpload>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Setup;
