import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import NextLink from "../DefaultComponents/NextLink";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function ProfileSetup() {
  const [state, setState] = useState({
    companyName: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex h-screen">
      <div className="w-2/3 flex flex-col py-5 justify-between bg-gray-100">
        <div className="h-2/5">
          <img
            className="h-full w-full"
            src="./images/setup-image2.svg"
            alt=""
          />
        </div>
        <div className="h-2/4">
          <img
            className="h-full w-full"
            src="./images/setup-image1.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="h-2/6 flex flex-col items-center justify-center border-b border-gray-300">
          <div className="text-4xl px-20 font-standardTT">
            Build your profile to attract more Interns.
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="h-2/3 flex-grow px-20 flex flex-col justify-center relative">
              <div className="flex items-center">
                <h3 className="font-bold">Company Name&nbsp;</h3>
                <span className="text-red-500 font-bold mt-2">*</span>
              </div>
              <BaseInput
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={state.companyName}
                handleChange={handleChange}
              ></BaseInput>
              <div className="mt-4 font-medium">
                Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
                maecenas, egestas urna vel ultrices risus, maecenas
              </div>
              <div className="mt-6 cursor-pointer float-right absolute right-20 bottom-32">
                <NextLink>Next</NextLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-2/3 flex-grow px-20 flex flex-col justify-center relative">
              <div className="flex items-center">
                <h3 className="font-bold">Company Name&nbsp;</h3>
                <span className="text-red-500 font-bold mt-2">*</span>
              </div>
              <BaseInput
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={state.companyName}
                handleChange={handleChange}
              ></BaseInput>
              <div className="mt-4 font-medium">
                Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
                maecenas, egestas urna vel ultrices risus, maecenas
              </div>
              <div className="mt-6 cursor-pointer float-right absolute right-20 bottom-32">
                <NextLink>Next</NextLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-2/3 flex-grow px-20 flex flex-col justify-center relative">
              <div className="flex items-center">
                <h3 className="font-bold">Company Name&nbsp;</h3>
                <span className="text-red-500 font-bold mt-2">*</span>
              </div>
              <BaseInput
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={state.companyName}
                handleChange={handleChange}
              ></BaseInput>
              <div className="mt-4 font-medium">
                Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
                maecenas, egestas urna vel ultrices risus, maecenas
              </div>
              <div className="mt-6 cursor-pointer float-right absolute right-20 bottom-32">
                <NextLink>Next</NextLink>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-2/3 flex-grow px-20 flex flex-col justify-center relative">
              <div className="flex items-center">
                <h3 className="font-bold">Company Name&nbsp;</h3>
                <span className="text-red-500 font-bold mt-2">*</span>
              </div>
              <BaseInput
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={state.companyName}
                handleChange={handleChange}
              ></BaseInput>
              <div className="mt-4 font-medium">
                Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
                maecenas, egestas urna vel ultrices risus, maecenas
              </div>
              <div className="mt-6 cursor-pointer float-right absolute right-20 bottom-32">
                <NextLink>Next</NextLink>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProfileSetup;
