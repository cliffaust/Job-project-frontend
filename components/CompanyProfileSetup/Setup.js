import dynamic from "next/dynamic";
import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import axios from "axios";
import * as Yup from "yup";

import BaseInput from "../DefaultComponents/BaseInput";
import BaseTextArea from "../DefaultComponents/BaseTextArea";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";

import SwiperCore, { EffectCreative } from "swiper";

import "swiper/css/effect-creative";
import "swiper/css";
import "react-quill/dist/quill.snow.css";

SwiperCore.use([Navigation]);
SwiperCore.use([EffectCreative]);

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function ProfileSetup() {
  const [state, setState] = useState({
    swiperIndex: 0,
    endOfSlide: false,
    setupError: false,
    loading: false,
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
      companyName: "",
      employeeNumbers: "",
      yearStarted: "",
      aboutCompany: "",
      companyValues: "",
    },
    validationSchema: Yup.object({
      companyName: Yup.string()
        .max(500, "This field has a max lenght of 500")
        .required("This field is required"),
      employeeNumbers: Yup.number().required("This field is required"),
      yearStarted: Yup.number().required("This field is required"),
      aboutCompany: Yup.string().required("This field is required"),
      companyValues: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values) => {
      setState({ ...state, loading: true });
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_baseURL}/create-company-profile/`,
          {
            company_name: values.companyName,
            num_of_employees: values.employeeNumbers,
            year_started: values.yearStarted,
            about_company: values.aboutCompany,
            company_values: values.companyValues,
          },
          {
            headers: {
              Authorization: "Token " + Cookies.get("token"),
            },
          }
        );
        router.push("/company-setup-image");
      } catch (error) {
        console.log(error.response.data);

        setState({ ...state, setupError: true, loading: false });
      }
    },
  });
  return (
    <div className="flex lg:h-screen">
      <div className="lg:w-2/4 lg:flex hidden flex-col py-5 justify-between bg-white">
        <div className="h-full">
          <img
            className="h-full w-full"
            src="./images/setup-image1.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-2/4 w-full px-10 lg:px-0 sm:pb-10">
        <div className="h-auto flex flex-col items-center justify-center border-b border-gray-300">
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
          <div className="text-4xl md:px-10 sm:px-5 px-2 font-standardTT">
            Build your profile to attract more Interns.
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          effect={"creative"}
          onSlideChange={(swiper) =>
            setState({
              ...state,
              swiperIndex: swiper.realIndex,
              endOfSlide: swiper.isEnd,
            })
          }
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
          className="lg:!h-70 !h-full w-full !relative !overflow-visible !overflow-x-hidden"
        >
          <SwiperSlide className="company-setup-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Company name&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="companyName"
              type="text"
              placeholder="Company Name"
              errorStyle={
                formik.touched.companyName && formik.errors.companyName
                  ? true
                  : false
              }
              {...formik.getFieldProps("companyName")}
            ></BaseInput>
            {formik.touched.companyName && formik.errors.companyName ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.companyName}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="company-setup-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Number of employees&nbsp;</h3>
            </div>
            <BaseInput
              name="employeeNumbers"
              type="number"
              placeholder="Number of Employees"
              errorStyle={
                formik.touched.employeeNumbers && formik.errors.employeeNumbers
                  ? true
                  : false
              }
              {...formik.getFieldProps("employeeNumbers")}
            ></BaseInput>
            {formik.touched.employeeNumbers && formik.errors.employeeNumbers ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.employeeNumbers}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="company-setup-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Year started</h3>
            </div>
            <BaseInput
              name="yearStarted"
              type="number"
              placeholder="Year Started"
              errorStyle={
                formik.touched.yearStarted && formik.errors.yearStarted
                  ? true
                  : false
              }
              {...formik.getFieldProps("yearStarted")}
            ></BaseInput>
            {formik.touched.yearStarted && formik.errors.yearStarted ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.yearStarted}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="company-setup-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">About company</h3>
            </div>
            {/* <div className="about-company">
              <ReactQuill
                theme="snow"
                name="aboutCompany"
                placeholder="About Company"
                className={
                  "border rounded-md " +
                  (formik.touched.aboutCompany && formik.errors.aboutCompany
                    ? "border-red-300"
                    : "")
                }
                value={formik.values.aboutCompany}
                onChange={formik.handleChange}
              ></ReactQuill>
            </div> */}
            <BaseTextArea
              name="aboutCompany"
              placeholder="About Company"
              errorStyle={
                formik.touched.aboutCompany && formik.errors.aboutCompany
                  ? true
                  : false
              }
              {...formik.getFieldProps("aboutCompany")}
            ></BaseTextArea>
            {formik.touched.aboutCompany && formik.errors.aboutCompany ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.aboutCompany}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
          <SwiperSlide className="company-setup-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Company values</h3>
            </div>
            <BaseTextArea
              name="companyValues"
              placeholder="Company Values"
              errorStyle={
                formik.touched.companyValues && formik.errors.companyValues
                  ? true
                  : false
              }
              {...formik.getFieldProps("companyValues")}
            ></BaseTextArea>
            {formik.touched.companyValues && formik.errors.companyValues ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.companyValues}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              Lorem ipsum dolor sit amet. egestas urna vel ultrices risus,
              maecenas, egestas urna vel ultrices risus, maecenas
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="flex items-center lg:px-20 justify-between flex-grow z-10 w-full">
          <div
            className={
              "swiper-pagination swiper-button-prev z-10 " +
              (state.swiperIndex === 0 ? "invisible" : "")
            }
          >
            <PreviousLink>Previous</PreviousLink>
          </div>
          <div
            className={
              "z-10 swiper-pagination swiper-button-next flex items-center gap-2 " +
              (!state.endOfSlide ? "hidden" : "")
            }
            onClick={formik.handleSubmit}
          >
            {state.loading ? (
              <div className="mt-5">
                <ButtonLoadingSpinner
                  width={18}
                  height={18}
                ></ButtonLoadingSpinner>
              </div>
            ) : null}
            <NextLink>Done</NextLink>
          </div>
          <div
            className={
              "z-10 swiper-pagination swiper-button-next " +
              (state.endOfSlide ? "hidden" : "")
            }
          >
            <NextLink>Next</NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
