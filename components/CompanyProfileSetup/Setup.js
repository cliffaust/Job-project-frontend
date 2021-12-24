import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import BaseTextArea from "../DefaultComponents/BaseTextArea";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useFormik } from "formik";
import * as Yup from "yup";

import "swiper/css/effect-creative";
import "swiper/css";

SwiperCore.use([Navigation]);

import SwiperCore, { EffectCreative } from "swiper";

// install Swiper modules
SwiperCore.use([EffectCreative]);

function ProfileSetup() {
  const [state, setState] = useState({
    swiperIndex: 0,
    endOfSlide: false,
  });

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
      console.log(values);
    },
  });
  return (
    <div className="flex h-full">
      <div className="w-2/3 flex flex-col py-5 justify-between bg-white">
        <div className="h-full">
          <img
            className="h-full w-full"
            src="./images/setup-image1.svg"
            alt=""
          />
        </div>
      </div>
      <div className="w-2/5">
        <div className="h-1/5 flex flex-col items-center justify-center border-b border-gray-300">
          <div className="text-4xl px-10 font-standardTT">
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
          className="!h-70 !relative !overflow-visible !overflow-x-hidden"
        >
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
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
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
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
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
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
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">About company</h3>
            </div>
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
          <SwiperSlide className="flex flex-col !bg-[#fdfbf8] justify-center !px-20 !w-full">
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
            {state.endOfSlide ? (
              <button type="submit" onClick={formik.handleSubmit}>
                <NextLink>Done</NextLink>
              </button>
            ) : (
              <NextLink>Next</NextLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
