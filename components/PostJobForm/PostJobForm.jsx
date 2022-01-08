import dynamic from "next/dynamic";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import * as Yup from "yup";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { Navigation } from "swiper";
import "react-quill/dist/quill.snow.css";
import "swiper/css/effect-creative";
import "swiper/css";

import BaseInput from "../DefaultComponents/BaseInput";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";

SwiperCore.use([Navigation]);

import SwiperCore, { EffectCreative } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCreative]);

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function PostJobForm({ children }) {
  const [state, setState] = useState({
    loading: false,
    swiperIndex: 0,
    setupError: false,
    endOfSlide: false,
  });

  const router = useRouter();

  const errorMessage = {
    show: {
      opacity: 1,
    },

    hide: {
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      workEmail: "",
      currentRole: "",
      phone: "",
      description: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(120, "This field has a max lenght of 120")
        .required("This field is required"),
      lastName: Yup.string()
        .max(120, "This field has a max lenght of 120")
        .required("This field is required"),
      jobTitle: Yup.string()
        .max(255, "This field has a max lenght of 500")
        .required("This field is required"),
      workEmail: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      currentRole: Yup.string()
        .max(500, "This field has a max lenght of 500")
        .required("This field is required"),
      phone: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
    }),
    onSubmit: (values) => {
      setState({ ...state, loading: true });
      console.log(values);
    },
  });

  const onChange = (event) => {
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
          {state.setupError && (
            <motion.div
              variants={errorMessage}
              animate="show"
              initial="hide"
              className="text-white mb-2 w-full text-sm py-2 text-center px-4 bg-red-500 font-bold"
            >
              An error has occurred.
            </motion.div>
          )}
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
              errorStyle={
                formik.touched.firstName && formik.errors.firstName
                  ? true
                  : false
              }
              {...formik.getFieldProps("firstName")}
            ></BaseInput>
            {formik.touched.firstName && formik.errors.firstName ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.firstName}
              </span>
            ) : null}
            <div className="flex items-center mb-2 mt-4">
              <h3 className="font-bold">Last name&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="lastName"
              type="text"
              placeholder="Last Name"
              errorStyle={
                formik.touched.lastName && formik.errors.lastName ? true : false
              }
              {...formik.getFieldProps("lastName")}
            ></BaseInput>
            {formik.touched.lastName && formik.errors.lastName ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.lastName}
              </span>
            ) : null}
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
              errorStyle={
                formik.touched.jobTitle && formik.errors.jobTitle ? true : false
              }
              {...formik.getFieldProps("jobTitle")}
            ></BaseInput>
            {formik.touched.jobTitle && formik.errors.jobTitle ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.jobTitle}
              </span>
            ) : null}
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
              onChange={onChange}
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
              errorStyle={
                formik.touched.phone && formik.errors.phone ? true : false
              }
              {...formik.getFieldProps("phone")}
            ></BaseInput>
            {formik.touched.phone && formik.errors.phone ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.phone}
              </span>
            ) : null}
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
              errorStyle={
                formik.touched.currentRole && formik.errors.currentRole
                  ? true
                  : false
              }
              {...formik.getFieldProps("currentRole")}
            ></BaseInput>
            {formik.touched.currentRole && formik.errors.currentRole ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.currentRole}
              </span>
            ) : null}
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
              value={formik.values.description}
              className="!h-325"
              onChange={formik.handleChange}
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
