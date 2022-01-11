import dynamic from "next/dynamic";
import Parser from "html-react-parser";
import React, { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import moment from "moment";
import { useDropzone } from "react-dropzone";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SwiperCore from "swiper";
import "swiper/css/effect-creative";
import "swiper/css";
import "react-quill/dist/quill.snow.css";

import NavBar from "../JobsNavbar/Navbar";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ImageGallery from "./ImageGallery";
import ImageGalleryPicker from "./ImageGalleryPicker";
import GroupPopup from "./GalleryPopup";
import BaseInput from "../DefaultComponents/BaseInput";

SwiperCore.use([Navigation]);

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

function Profile({ user_profile, company_profile, jobs }) {
  const [state, setState] = useState({
    swiperIndex: 0,
    allowSlideNext: false,
    galleryPopup: false,
    jobPopup: false,
    phone: "",
    comment: "",
    jobData: {
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
      num_applicants: 0,
      date_posted: "",
    },
  });

  const [showProfilePics, setShowProfilePics] = useState(false);

  const [file, setFile] = useState({
    image: null,
    profileImageProgress: 0,
  });

  const jobsRef = useRef(null);

  const formTime = (time) => {
    return moment(time).startOf("hour").fromNow();
  };

  useEffect(() => {
    if (file.image) {
      sendProfileImage();
      return () => {
        setFile({});
      };
    }
  }, [file.image]);

  const settings = {
    spaceBetween: 40,
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const jobModal = (data) => (e) => {
    e.stopPropagation();
    setState({
      ...state,
      jobPopup: true,
      jobData: {
        ...state.jobData,
        firstName: data.first_name,
        lastName: data.last_name,
        jobTitle: data.job_title,
        address: data.address,
        remote: data.remote,
        salary: data.salary,
        workEmail: data.work_email,
        currentRole: data.current_role,
        phone: data.phone_number,
        description: data.description,
        num_applicants: data.num_applicants,
        date_posted: data.date_posted,
      },
    });
  };
  const openGalleryModal = (e) => {
    e.stopPropagation();
    setState({ ...state, galleryPopup: true });
  };

  const closeGalleryModal = (e) => {
    e.stopPropagation();
    setState({ ...state, galleryPopup: false });
  };

  const handleComment = (value) => {
    setState({ ...state, comment: value });
  };

  const sendProfileImage = async () => {
    const fd = new FormData();
    fd.append("profile_pic", file.image, file.image.name);

    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_baseURL}/user/${user_profile.id}/`,
        fd,
        {
          headers: {
            Authorization: "Token " + Cookies.get("token"),
          },
          onUploadProgress: (progressEvent) => {
            let percentCompleted = Math.floor(
              (progressEvent.loaded * 100) / progressEvent.total
            );

            setFile({ ...file, profileImageProgress: percentCompleted });
          },
        }
      );
      location.reload();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleFileChange = async (event) => {
    setFile({ ...file, image: event.target.files[0] });
  };

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const closeJobModal = (e) => {
    e.stopPropagation();
    setState({ ...state, jobPopup: false });
  };

  return (
    <div onClick={() => setState({ ...state, galleryPopup: false })}>
      <NavBar user_profile={user_profile}></NavBar>
      <div className="mt-10 md:px-20 px-8 flex md:flex-row flex-col md:justify-between md:items-center sm:items-center justify-center">
        <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
          <div
            onMouseEnter={() => setShowProfilePics(true)}
            onMouseLeave={() => setShowProfilePics(false)}
            className="w-44 h-44 md:w-36 md:h-36 rounded-full relative cursor-pointer"
          >
            <img
              src={user_profile.profile_pic}
              alt="Image"
              className="h-full w-full object-cover rounded-full"
            />

            <label
              className={
                "cursor-pointer z-50 " +
                (showProfilePics && company_profile.user === user_profile.email
                  ? null
                  : "hidden")
              }
            >
              <input
                className="hidden"
                accept="image/*"
                type="file"
                onChange={handleFileChange}
              />

              <div className="bg-black bg-opacity-70 w-44 h-44 md:w-36 md:h-36 rounded-full absolute top-0"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-purple-800 absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </label>
            {file.profileImageProgress > 0 ? (
              <div className="mt-2 relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="bg-purple-600 rounded-full h-full"
                  style={{ width: file.profileImageProgress + "%" }}
                ></div>
                <div className="absolute right-2 top-2/4 font-bold z-20 -translate-y-2/4">
                  {file.profileImageProgress}%
                </div>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-center md:text-left">
              {company_profile.company_name}
            </h1>
            <p className="text-base text-center md:text-left">
              Since {company_profile.year_started}
            </p>
            <p className="text-base text-green-600 font-medium md:text-left">
              About {company_profile.num_of_employees} employees
            </p>
          </div>
        </div>
        <ButtonPrimary
          onClick={() =>
            jobsRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          className="px-6 py-2 !rounded-md md:mt-0 mt-6 sm:w-80"
        >
          Go to jobs
        </ButtonPrimary>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex items-center justify-between md:px-20 px-6 mb-8 md:mt-10 mt-5">
          <div className="text-2xl font-standardTT font-bold"></div>
          <div
            onClick={openGalleryModal}
            className="flex items-center gap-1 text-purple-600 cursor-pointer"
          >
            <span>See all images</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </div>
        </div>
        <ImageGallery images={company_profile.company_images}></ImageGallery>
      </div>
      <div className="flex flex-col mt-10 md:px-20 px-6">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          About Company
        </div>
        <div className="md:pl-8 pl-4">
          <p className="text-base whitespace-pre-wrap">
            {company_profile.about_company}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:px-20 px-6">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          Company Values
        </div>
        <div className="md:pl-8 pl-4">
          <p className="text-base whitespace-pre-wrap">
            {company_profile.company_values}
          </p>
        </div>
      </div>
      {jobs.length > 0 ? (
        <div ref={jobsRef} className="flex flex-col mt-10 md:px-20 pl-6">
          <div className="text-2xl mb-8 font-standardTT font-bold">
            Available jobs({jobs.length})
          </div>
          <Swiper
            {...settings}
            onSwiper={(swiper) =>
              setState({ ...state, allowSlideNext: swiper.allowSlideNext })
            }
            onSlideChange={(swiper) =>
              setState({ ...state, swiperIndex: swiper.realIndex })
            }
            className="!w-full md:!pl-10 !pl-5"
          >
            {jobs.map((job) => (
              <SwiperSlide
                key={job.id}
                className="px-3 py-5 shadow-lg rounded-xl !w-72"
              >
                <h1 className="text-xl truncate mb-2 font-bold">
                  {job.job_title}
                </h1>
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
                <div className="mt-10">
                  <p className="text-base font-medium mb-2">
                    Posted {moment(job.date_posted).startOf("hour").fromNow()}
                  </p>
                  <div onClick={jobModal(job)}>
                    <ButtonPrimary className="w-full rounded-md">
                      View Job
                    </ButtonPrimary>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div
              className={
                "absolute flex cursor-pointer items-center justify-center top-2/4 z-10 md:left-6 left-3 -translate-y-2/4 swiper-pagination swiper-button-prev w-10 h-10 rounded-full bg-white shadow-lg " +
                (state.swiperIndex === 0 ? "invisible" : "")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={
                "absolute cursor-pointer flex items-center justify-center top-2/4 z-10 md:right-6 right-3 -translate-y-2/4 swiper-pagination swiper-button-next w-10 h-10 rounded-full bg-white shadow-lg " +
                (!state.allowSlideNext ? "invisible" : "")
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Swiper>
        </div>
      ) : (
        <div ref={jobsRef} className="text-xl font-bold text-center mt-10">
          No available jobs
        </div>
      )}
      <div className="mt-10 md:px-20 px-6">
        To read more about this company,{" "}
        <span className="font-bold text-purple-600">Go to company website</span>
      </div>
      <GroupPopup
        closeModal={closeJobModal}
        showPopup={state.jobPopup}
        className="w-2/4 px-6"
      >
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
            <div className="flex justify-center flex-col gap-4 items-center">
              <div className="w-36 h-36 rounded-full">
                <img
                  src={user_profile.profile_pic}
                  alt="Image"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl font-bold">{state.jobData.title}</h1>
                <p className="truncate text-lg">
                  {state.jobData.remote && state.jobData.address
                    ? state.jobData.address + "(Remote)"
                    : state.jobData.remote && !state.jobData.address
                    ? "Remote"
                    : !state.jobData.remote && state.jobData.address
                    ? state.jobData.address
                    : "No address data"}
                </p>
                {state.jobData.num_applicants > 0 ? (
                  <p className="text-base text-green-600 font-bold">
                    {state.jobData.num_applicants} Applicants
                  </p>
                ) : (
                  <p className="text-base text-green-600 font-bold">
                    No applicants
                  </p>
                )}
                <p className="text-base font-medium">
                  Posted{" "}
                  {moment(state.jobData.date_posted).startOf("hour").fromNow()}
                </p>
              </div>
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
            <div className="mt-12">{Parser(state.jobData.description)}</div>
            <div className="flex flex-wrap mt-12">
              <div className="w-2/4 px-4 py-2 rounded-md border-l-4 border-purple-600">
                <h3 className="font-bold text-lg">Salary</h3>
                {state.jobData.salary ? (
                  <p className="mt-2">GH¢{state.jobData.salary}</p>
                ) : (
                  <p className="mt-2">No data</p>
                )}
              </div>
              <div className="w-2/4 px-4 py-2 rounded-md border-l-4 border-purple-600">
                <h3 className="font-bold text-lg">Posted by,</h3>
                <p className="mt-2">
                  {state.jobData.firstName} {""} {state.jobData.lastName}
                </p>
              </div>
              <div className="w-2/4 px-4 py-2 mt-4 rounded-md border-l-4 border-purple-600">
                <h3 className="font-bold text-lg">Phone Number</h3>
                <p className="mt-2 truncate">{state.jobData.phone}</p>
              </div>
              <div className="w-2/4 px-4 py-2 mt-4 rounded-md border-l-4 border-purple-600">
                <h3 className="font-bold text-lg">Email address</h3>
                <p className="mt-2 truncate">{state.jobData.workEmail}</p>
              </div>
            </div>
            <div className="mt-10 font-bold">
              If you have a problem with the job,{" "}
              <span className="font-bold text-purple-600 cursor-pointer">
                Report it here
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
            <div className="px-6">
              <div className="mt-5">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <h3 className="font-bold">Your CV&nbsp;</h3>
                    <span className="text-red-500 font-bold mt-2">*</span>
                  </div>
                  <ButtonPrimary className="py-1 ml-2 px-6 !rounded-md font-bold">
                    Upload
                  </ButtonPrimary>
                </div>
              </div>
              <div className="mt-6">
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <h3 className="font-bold">Transcript</h3>
                  </div>
                  <ButtonPrimary className="py-1 ml-2 px-6 !rounded-md font-bold">
                    Upload
                  </ButtonPrimary>
                </div>
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
                  value={state.phone}
                  onChange={onChange}
                ></BaseInput>
              </div>
              <div className="mt-6 comment">
                <div className="flex items-center mb-2">
                  <h3 className="font-bold">Other comment&nbsp;</h3>
                  <span className="text-red-500 font-bold mt-2">*</span>
                </div>
                <ReactQuill
                  theme="snow"
                  placeholder="Other comment"
                  value={state.comment}
                  className=""
                  onChange={handleComment}
                ></ReactQuill>
              </div>
              <ButtonPrimary className="py-1 mt-6 w-full px-6 !rounded-md font-bold">
                Apply for this job
              </ButtonPrimary>
            </div>
          </SwiperSlide>
        </Swiper>
      </GroupPopup>
      <GroupPopup
        closeModal={closeGalleryModal}
        showPopup={state.galleryPopup}
        className="w-4/5"
      >
        <ImageGalleryPicker
          images={company_profile.company_images}
          // comment={
          //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quia quae quas perferendis. Ducimus consectetur nam, error distinctio fugit esse porro facere totam maxime aliquam similique dolores exercitationem Inventore, temporibus"
          // }
        ></ImageGalleryPicker>
      </GroupPopup>
    </div>
  );
}

export default Profile;
