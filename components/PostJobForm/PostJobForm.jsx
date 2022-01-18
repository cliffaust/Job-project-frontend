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
import BaseCheckBox from "../DefaultComponents/BaseCheckBox";
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
      address: "",
      remote: false,
      salary: "",
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
      address: Yup.string().max(500, "This field has a max lenght of 500"),
      remote: Yup.boolean(),
      salary: Yup.number(),
      phone: Yup.string().required("This field is required"),
      description: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values) => {
      setState({ ...state, loading: true });
      try {
        const companyProfile = await axios.get(
          `${process.env.NEXT_PUBLIC_baseURL}/user-company-profile/`,
          {
            headers: {
              Authorization: "Token " + Cookies.get("token"),
            },
          }
        );
        await axios.post(
          `${process.env.NEXT_PUBLIC_baseURL}/companies/${companyProfile.data.slug}/create-job/`,
          {
            first_name: values.firstName,
            last_name: values.lastName,
            job_title: values.jobTitle,
            work_email: values.workEmail,
            current_role: values.currentRole,
            phone_number: values.phone.startsWith("+233")
              ? values.phone
              : "+233" + values.phone,
            description: values.description,
            address: values.address,
            salary: values.salary,
            remote: values.remote,
          },
          {
            headers: {
              Authorization: "Token " + Cookies.get("token"),
            },
          }
        );
        router.push("/company-profile");
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
            src="./images/post-job-image.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-2/4 w-full px-10 lg:px-0 sm:pb-10">
        <div className="h-auto mt-8 flex flex-col items-center justify-center border-b border-gray-300">
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
          className="lg:!h-70 !h-full w-full !relative !overflow-visible !overflow-x-hidden"
        >
          <SwiperSlide className="post-job-slide">
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
              This is important for identification of who placed the job on the
              platform
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
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
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Work Email&nbsp;</h3>
              <span className="text-red-500 font-bold mt-2">*</span>
            </div>
            <BaseInput
              name="workEmail"
              type="email"
              placeholder="Work Email"
              errorStyle={
                formik.touched.workEmail && formik.errors.workEmail
                  ? true
                  : false
              }
              {...formik.getFieldProps("workEmail")}
            ></BaseInput>
            {formik.touched.workEmail && formik.errors.workEmail ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.workEmail}
              </span>
            ) : null}
            <div className="mt-4 font-medium">
              This should be your work email and one that people who applied for
              this job can reach you or the company
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Address</h3>
            </div>
            <BaseInput
              name="address"
              type="text"
              placeholder="Workplace adress"
              errorStyle={
                formik.touched.address && formik.errors.address ? true : false
              }
              {...formik.getFieldProps("address")}
            ></BaseInput>
            {formik.touched.address && formik.errors.address ? (
              <span className="text-sm mt-3 font-bold text-red-400">
                {formik.errors.address}
              </span>
            ) : null}

            <BaseCheckBox
              className="mt-4"
              name="remote"
              label="Remote job"
              {...formik.getFieldProps("remote")}
            ></BaseCheckBox>
            <div className="mt-4 font-medium">
              This should be where the work is located at. If it's only remote,
              just check the remote box and leave the address field empty. If
              it's both on-site and remote, type the address and check the
              remote box
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
            <div className="flex items-center mb-2">
              <h3 className="font-bold">Salary</h3>
            </div>
            <BaseInput
              name="salary"
              type="number"
              placeholder="Salary"
              {...formik.getFieldProps("salary")}
            ></BaseInput>
            <div className="mt-4 font-medium">
              This should be the salary that will be paid to the intern. If no
              salary will be given, just leave this field empty
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
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
              This should be your work phonenumber and one that people who
              applied for this job can reach you or the company
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
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
              This is important for identification of who placed the job on the
              platform
            </div>
          </SwiperSlide>
          <SwiperSlide className="post-job-slide">
            <div className="font-medium mb-4">
              This information is for in giving insight on this. We advice this
              should be broad and well explained on what the job is about
            </div>
            <div className="post-job-form">
              <ReactQuill
                theme="snow"
                name="description"
                placeholder="Job description"
                value={formik.values.description}
                className=""
                onChange={(value) => formik.setFieldValue("description", value)}
              ></ReactQuill>
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

export default PostJobForm;
