import dynamic from "next/dynamic";
import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "react-quill/dist/quill.snow.css";

import "swiper/css/effect-creative";
import "swiper/css";

SwiperCore.use([Navigation]);

import SwiperCore, { EffectCreative } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCreative]);

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function PostJobForm({ children }) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    workEmail: "",
    currentRole: "",
    phone: "",
    swiperIndex: 0,
    endOfSlide: false,
    description: "",
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleDescription = (value) => {
    setState({ ...state, description: value });
  };
  return (
    <div className="flex h-full">
      <div className="w-2/4 flex flex-col justify-center py-5 bg-white">
        <div className="h-full">
          <img
            className="h-full w-full"
            src="./images/post-job-image.svg"
            alt=""
          />
        </div>
      </div>
      <div className="w-2/4">
        <div className="h-1/5 flex flex-col items-center justify-center border-b border-gray-200">
          <div className="text-4xl px-10 font-standardTT">
            Start right from your comfort.
          </div>
        </div>
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          effect={"creative"}
          onSlideChange={(swiper) => {
            setState({
              ...state,
              swiperIndex: swiper.realIndex,
              endOfSlide: swiper.isEnd,
            });
          }}
          preventInteractionOnTransition={true}
          allowTouchMove={false}
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
          className="!h-70 !relative !overflow-y-auto !overflow-x-hidden"
        >
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">First name&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="firstName"
              type="text"
              placeholder="First Name"
              value={state.firstName}
              handleChange={handleChange}
            ></BaseInput>
            <div className="flex items-center mb-2 mt-4">
              <h3 className="font-bold">Last name&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={state.lastName}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Job Title&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="jobTitle"
              type="text"
              placeholder="Title of Job"
              value={state.jobTitle}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Work Email&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="workEmail"
              type="email"
              placeholder="Work Email"
              value={state.workEmail}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Phone number&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="phone"
              placeholder="Phone Number"
              type="text"
              value={state.phone}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Your role&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="currentRole"
              placeholder="Your role"
              type="text"
              value={state.currentRole}
              handleChange={handleChange}
            ></BaseInput>
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-10 py-5 !w-full">
            <div className="font-medium mb-4">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
            <ReactQuill
              theme="snow"
              placeholder="Job description"
              value={state.description}
              className="!h-325"
              onChange={handleDescription}
            ></ReactQuill>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center px-20 justify-between flex-grow z-10 w-full">
          <div
            className={
              "swiper-pagination swiper-button-prev z-10 " +
              (state.swiperIndex === 0 ? "invisible" : "")
            }
          >
            <PreviousLink>Previous</PreviousLink>
          </div>
          <div className="swiper-pagination swiper-button-next z-10">
            <NextLink>{state.endOfSlide ? "Done" : "Next"}</NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;
