import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import BaseTextArea from "../DefaultComponents/BaseTextArea";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/effect-creative";
import "swiper/css";

SwiperCore.use([Navigation]);

import SwiperCore, { EffectCreative } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCreative]);

function ProfileSetup() {
  const [state, setState] = useState({
    companyName: "",
    employeeNumbers: "",
    yearStarted: "",
    aboutCompany: "",
    companyValues: "",
    swiperIndex: 0,
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
      <div className="w-2/5">
        <div className="h-40 flex flex-col items-center justify-center border-b border-gray-300">
          <div className="text-4xl px-10 font-standardTT">
            Build your profile to attract more Interns.
          </div>
        </div>
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          effect={"creative"}
          onSlideChange={(swiper) =>
            setState({ ...state, swiperIndex: swiper.realIndex })
          }
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          className="!h-2/4 !overflow-visible"
        >
          <SwiperSlide className="flex flex-col !bg-white justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Company name&nbsp;</h3>
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
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-white justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Number of employees&nbsp;</h3>
            </div>
            <BaseInput
              name="employeeNumbers"
              type="number"
              placeholder="Number of Employees"
              value={state.employeeNumbers}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-white justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Year started</h3>
            </div>
            <BaseInput
              name="yearStarted"
              type="number"
              placeholder="Year Started"
              value={state.yearStarted}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-white justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">About company</h3>
            </div>
            <BaseTextArea
              name="aboutCompany"
              placeholder="About Company"
              value={state.aboutCompany}
              handleChange={handleChange}
            ></BaseTextArea>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-white justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Company values</h3>
            </div>
            <BaseTextArea
              name="companyValues"
              placeholder="Company Values"
              value={state.companyValues}
              handleChange={handleChange}
            ></BaseTextArea>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <div className="flex items-center px-20 justify-between">
            <div
              className={
                "swiper-pagination swiper-button-prev z-10 " +
                (state.swiperIndex === 0 ? "invisible" : "")
              }
            >
              <PreviousLink>Previous</PreviousLink>
            </div>
            <div className="swiper-pagination swiper-button-next z-10">
              <NextLink>Next</NextLink>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default ProfileSetup;
