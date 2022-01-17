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
import * as Yup from "yup";
import { useFormik } from "formik";
import "swiper/css/effect-creative";
import "swiper/css";
import "react-quill/dist/quill.snow.css";

import NavBar from "../JobsNavbar/Navbar";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ReadMore from "../DefaultComponents/ReadMore";
import ImageGallery from "./ImageGallery";
import ImageGalleryPicker from "./ImageGalleryPicker";
import GroupPopup from "./GalleryPopup";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";

SwiperCore.use([Navigation]);

const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

function Profile({ user_profile, company_profile, jobs }) {
  const [state, setState] = useState({
    swiperIndex: 0,
    allowSlideNext: false,
    galleryPopup: false,
    swiper: {},
    jobPopup: false,
    loading: false,
    jobData: {
      slug: "",
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

  const [seekers, setSeekers] = useState([]);

  const [seekerLoading, setSeekerLoading] = useState(false);

  const [seekerDetail, setSeekerDetail] = useState({});

  const [seekerDetailLoading, setSeekerDetailLoading] = useState(false);

  const [showProfilePics, setShowProfilePics] = useState(false);

  const [file, setFile] = useState({
    image: null,
    profileImageProgress: 0,
  });

  const [cv, setCv] = useState({
    file: null,
  });

  const [transcript, setTranscript] = useState({
    file: null,
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
        slug: data.slug,
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
        fd.append(
          "transcript",
          transcript.file,
          transcript.file.name.slice(0, 70)
        );
        fd.append("phone_number", values.phone);
        fd.append("email", values.email);
        fd.append("other_comment", values.comment);
        await axios.post(
          `${process.env.NEXT_PUBLIC_baseURL}/jobs/${state.jobData.slug}/create-seeker/`,
          fd,
          {
            headers: {
              Authorization: "Token " + Cookies.get("token"),
            },
          }
        );
        location.reload();
      } catch (error) {
        console.log(error.response.data);
        setState({ ...state, loading: false });
      }
    },
  });

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

  const handleFileChange = (event) => {
    setFile({ ...file, image: event.target.files[0] });
  };

  const handleCvChange = (event) => {
    setCv({ ...cv, file: event.target.files[0] });
  };

  const handleTranscriptChange = (event) => {
    setTranscript({ ...transcript, file: event.target.files[0] });
  };

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const closeJobModal = (e) => {
    e.stopPropagation();
    setState({ ...state, jobPopup: false });
  };

  const jobSeekers = async () => {
    setSeekerLoading(true);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/jobs/${state.jobData.slug}/seekers/`
    );
    setSeekers(data.results);
    setSeekerLoading(false);
  };

  const jobSeekerDetail = async (slug) => {
    state.swiper.slideNext();
    setSeekerDetailLoading(true);
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/seekers/${slug}/`
    );
    setSeekerDetail(data);
    setSeekerDetailLoading(false);
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
              src={company_profile.company_profile_image}
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
          <div className="text-base whitespace-pre-wrap">
            <ReadMore numOfWords={600}>
              {company_profile.about_company}
            </ReadMore>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 md:px-20 px-6">
        <div className="text-2xl mb-8 font-standardTT font-bold">
          Company Values
        </div>
        <div className="md:pl-8 pl-4">
          <div className="text-base whitespace-pre-wrap">
            <ReadMore numOfWords={600}>
              {company_profile.company_values}
            </ReadMore>
          </div>
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
              setState({
                ...state,
                allowSlideNext: swiper.allowSlideNext,
              })
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
        className="lg:w-2/4 md:w-4/5 w-full px-6"
      >
        <Swiper
          preventInteractionOnTransition={true}
          allowTouchMove={false}
          autoHeight={true}
          onSwiper={(swiper) =>
            setState({
              ...state,
              swiper: swiper,
            })
          }
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          // className="h-screen overflow-y-scroll"
        >
          <SwiperSlide>
            <div className="flex justify-center flex-col gap-4 items-center">
              <div className="w-36 h-36 rounded-full">
                <img
                  src={company_profile.company_profile_image}
                  alt="Image"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1 className="lg:text-2xl text-xl font-bold">
                  {state.jobData.jobTitle}
                </h1>
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
                {company_profile.user === user_profile.email ? (
                  <ButtonPrimary
                    onClick={jobSeekers}
                    className="swiper-pagination swiper-button-next px-6 py-2 !w-full !rounded-md"
                  >
                    View who has applied
                  </ButtonPrimary>
                ) : (
                  <ButtonPrimary className="swiper-pagination swiper-button-next px-6 py-2 !w-full !rounded-md">
                    Apply for this job
                  </ButtonPrimary>
                )}
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
          {company_profile.user === user_profile.email ? (
            <SwiperSlide className="h-full">
              <div className="swiper-pagination swiper-button-prev cursor-pointer flex items-center gap-2 mt-2">
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
              <div
                className={
                  "h-screen relative " + (!seekerLoading ? "hidden" : "")
                }
              >
                <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                  <ButtonLoadingSpinner
                    width={40}
                    height={40}
                  ></ButtonLoadingSpinner>
                </div>
              </div>
              <div
                className={"mt-8 h-screen " + (seekerLoading ? "hidden" : "")}
              >
                {seekers.map((seeker) => (
                  <div
                    key={seeker.id}
                    onClick={() => jobSeekerDetail(seeker.slug)}
                    className="shadow-md flex gap-4 px-4 py-2 rounded-lg cursor-pointer swiper-pagination swiper-button-prev"
                  >
                    <div className="w-24 h-24">
                      <img
                        src={seeker.user_profile_image}
                        className="w-full h-full rounded-full object-cover"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1 className="font-bold text-xl mb-2">{seeker.name}</h1>
                      <p className="mb-1">{seeker.email}</p>
                      <p className="text-base font-medium mb-2">
                        Applied{" "}
                        {moment(seeker.date_posted).startOf("hour").fromNow()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ) : (
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
                        <div className="truncate w-40">
                          {transcript.file.name}
                        </div>
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
            </SwiperSlide>
          )}
          {company_profile.user === user_profile.email ? (
            <SwiperSlide>
              <div className="swiper-pagination swiper-button-prev cursor-pointer flex items-center gap-2 mt-2">
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
                <h3 className="font-bold text-purple-600">Seekers</h3>
              </div>
              {seekerDetailLoading ? (
                <div className="h-screen relative">
                  <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                    <ButtonLoadingSpinner
                      width={40}
                      height={40}
                    ></ButtonLoadingSpinner>
                  </div>
                </div>
              ) : (
                <div className="mt-8 h-screen">
                  <div className="flex justify-center flex-col items-center">
                    <div className="w-36 h-36 rounded-full">
                      <img
                        src={seekerDetail.user_profile_image}
                        alt="Image"
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="lg:text-2xl text-xl font-bold mt-4">
                        {state.jobData.jobTitle}
                      </h1>
                      <p className="text-xl mb-1 mt-2">{seekerDetail.name}</p>
                      <p className="mb-1">{seekerDetail.email}</p>
                      <p className="text-base font-medium">
                        Posted{" "}
                        {moment(seekerDetail.date_posted)
                          .startOf("hour")
                          .fromNow()}
                      </p>
                    </div>
                    <div className="flex gap-5 items-center justify-center w-full mt-6">
                      <div
                        className={
                          "w-2/4 h-full " +
                          (!seekerDetail.transcript ? "!w-full" : "")
                        }
                      >
                        <ButtonPrimary className="swiper-pagination flex items-center justify-center gap-2 h-full swiper-button-next px-6 py-2 !w-full !rounded-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>{" "}
                          <div>CV</div>
                        </ButtonPrimary>
                      </div>
                      {seekerDetail.transcript ? (
                        <div className="w-2/4">
                          <ButtonPrimary className="!bg-gray-200 flex items-center justify-center gap-2 !border-gray-200 !w-full py-2 px-2 !rounded-md !text-black font-bold">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                              />
                            </svg>{" "}
                            <div>Transcript</div>
                          </ButtonPrimary>
                        </div>
                      ) : null}
                    </div>
                    <div>
                      <h1 className="lg:text-2xl text-xl font-bold mt-6">
                        Other Comment
                      </h1>
                      <p className="mt-4">
                        {Parser(seekerDetail.other_comment)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ) : null}
        </Swiper>
      </GroupPopup>
      <GroupPopup
        closeModal={closeGalleryModal}
        showPopup={state.galleryPopup}
        className="w-full md:w-11/12 lg:w-4/5"
      >
        <ImageGalleryPicker
          images={{
            images: company_profile.company_images,
          }}
        ></ImageGalleryPicker>
      </GroupPopup>
    </div>
  );
}

export default Profile;
