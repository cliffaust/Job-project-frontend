import React, { useState } from "react";
import Parser from "html-react-parser";
import moment from "moment";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Navigation } from "swiper";
import SwiperCore from "swiper";
import * as Yup from "yup";
import { useFormik } from "formik";
import "swiper/css/effect-creative";
import "swiper/css";
import "react-quill/dist/quill.snow.css";

import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";

SwiperCore.use([Navigation]);

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

function ActiveJob({ job, user_profile }) {
  const router = useRouter();

  const [cv, setCv] = useState({
    file: null,
  });

  const [transcript, setTranscript] = useState({
    file: null,
  });

  const [state, setState] = useState({
    loading: false,
  });

  const formik = useFormik({
    initialValues: {
      phone: "",
      comment: "",
      email: user_profile.email || "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      phone: Yup.string().required("This field is required"),
      comment: Yup.string(),
    }),
    onSubmit: async (values) => {
      setState({ ...state, loading: true });
      try {
        const fd = new FormData();
        fd.append("cv", cv.file, cv.file.name.slice(0, 70));
        transcript.file
          ? fd.append(
              "transcript",
              transcript.file,
              transcript.file.name.slice(0, 70)
            )
          : null;
        fd.append(
          "phone_number",
          values.phone.startsWith("+233") ? values.phone : "+233" + values.phone
        );
        fd.append("email", values.email);
        fd.append("other_comment", values.comment);
        console.log(job.slug);
        await axios.post(
          `${process.env.NEXT_PUBLIC_baseURL}/jobs/${job.slug}/create-seeker/`,
          fd,
          {
            headers: {
              Authorization: "Token " + Cookies.get("token"),
            },
          }
        );
        location.reload();
      } catch (error) {
        console.log(error.response);
        setState({ ...state, loading: false });
      }
    },
  });

  const handleCvChange = (event) => {
    setCv({ ...cv, file: event.target.files[0] });
  };

  const handleTranscriptChange = (event) => {
    setTranscript({ ...transcript, file: event.target.files[0] });
  };

  const viewCompanyProfile = (slug) => {
    router.push(`/${slug}/company`);
  };
  return (
    <Swiper
      preventInteractionOnTransition={true}
      allowTouchMove={false}
      autoHeight={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      <SwiperSlide>
        <div
          className={
            "md:px-6 py-4 bg-white lg:shadow-lg rounded-lg flex flex-col items-center"
          }
        >
          <div className="w-32 h-32 rounded-full">
            <img
              src={job.company_profile_image}
              alt="Image"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="mt-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold">{job.company_name}</h1>
            <p className="text-base">{job.jobTitle}</p>
            <p className="text-base truncate">
              {job.remote && job.address
                ? job.address + "(Remote)"
                : job.remote && !job.address
                ? "Remote"
                : !job.remote && job.address
                ? job.address
                : "No address data"}
            </p>
            {job.num_applicants > 0 ? (
              <p className="text-base text-green-600 font-bold">
                {job.num_applicants} Applicants
              </p>
            ) : (
              <p className="text-base text-green-600 font-bold">
                No applicants
              </p>
            )}
            <p className="text-base text-center">
              <span>Job posted by, </span>{" "}
              <span className="font-bold">
                {job.firstName} {""} {job.lastName}({job.currentRole})
              </span>
            </p>
            <p className="text-base mt-1 font-medium mb-2">
              Posted {moment(job.date_posted).startOf("hour").fromNow()}
            </p>
          </div>
          <div className="flex gap-5 items-center w-full mt-6">
            <div className="w-3/4">
              <ButtonPrimary className="swiper-pagination swiper-button-next px-6 py-2 !w-full !rounded-md">
                Apply for this job
              </ButtonPrimary>
            </div>
            <div className="w-1/5">
              <ButtonPrimary className="!bg-gray-200 !border-gray-200 !w-full py-2 px-2 !rounded-md !text-black font-bold">
                Save
              </ButtonPrimary>
            </div>
          </div>
          <div className="mt-6">{Parser(job.description)}</div>
          <div className="w-full mt-6">
            <ButtonPrimary
              onClick={() => viewCompanyProfile(job.company_slug)}
              className="!rounded-md w-full py-2"
            >
              View Company Profile
            </ButtonPrimary>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"md:px-6 py-4 bg-white lg:shadow-lg rounded-lg"}>
          <div className="swiper-pagination swiper-button-prev cursor-pointer flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-purple-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="font-bold text-purple-600">Job Info</h3>
          </div>
          <div className="md:px-6 px-0">
            <div className="mt-5">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="font-bold">Your CV&nbsp;</h3>
                  <span className="text-red-500 font-bold mt-2">*</span>
                </div>
                <div className="flex gap-4 items-center">
                  <label
                    htmlFor="cv"
                    className="cursor-pointer z-50 py-2 ml-2 px-6 !rounded-md font-bold bg-purple-600 text-white"
                  >
                    Upload
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    onChange={handleCvChange}
                    id="cv"
                  />
                  {cv.file && (
                    <div className="truncate w-40">{cv.file.name}</div>
                  )}
                  {cv.file && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() => setCv({ ...cv, file: null })}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <h3 className="font-bold">Transcript</h3>
                </div>
                <div className="flex gap-4 items-center">
                  <label
                    htmlFor="transcript"
                    className="cursor-pointer z-50 py-2 ml-2 px-6 !rounded-md font-bold bg-purple-600 text-white"
                  >
                    Upload
                  </label>
                  <input
                    className="hidden"
                    type="file"
                    onChange={handleTranscriptChange}
                    id="transcript"
                  />
                  {transcript.file && (
                    <div className="truncate w-40">{transcript.file.name}</div>
                  )}
                  {transcript.file && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 cursor-pointer"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      onClick={() =>
                        setTranscript({ ...transcript, file: null })
                      }
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center mb-2">
                <h3 className="font-bold">Email&nbsp;</h3>
                <span className="text-red-500 font-bold mt-2">*</span>
              </div>
              <BaseInput
                name="email"
                type="email"
                errorStyle={
                  formik.touched.email && formik.errors.email ? true : false
                }
                placeholder="Email"
                {...formik.getFieldProps("email")}
              ></BaseInput>
              {formik.touched.email && formik.errors.email ? (
                <span className="text-sm mt-3 font-bold text-red-400">
                  {formik.errors.email}
                </span>
              ) : null}
            </div>
            <div className="mt-6">
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
            </div>
            <div className="mt-6 comment">
              <div className="flex items-center mb-2">
                <h3 className="font-bold">Other comment</h3>
              </div>
              <ReactQuill
                theme="snow"
                placeholder="Other comment"
                value={formik.values.comment}
                className=""
                onChange={(value) => formik.setFieldValue("comment", value)}
              ></ReactQuill>
            </div>
            <ButtonPrimary
              type="submit"
              className={
                "py-1 mt-6 w-full px-6 !rounded-md font-bold " +
                (state.loading ? "opacity-60" : "")
              }
              onClick={formik.handleSubmit}
            >
              <div>
                {!state.loading ? <span>Apply</span> : ""}{" "}
                {state.loading ? (
                  <ButtonLoadingSpinner></ButtonLoadingSpinner>
                ) : (
                  ""
                )}
              </div>
            </ButtonPrimary>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default ActiveJob;
