import React, { useState } from "react";
import FilterButton from "../DefaultComponents/FilterButton";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import { showDatePosted, showJobType } from "../../redux/actions/jobSearch";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

function JobSearchFilter() {
  const jobSearch = useSelector((state) => state.jobSearch);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    job: "",
    location: "",
  });

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const showPopup = {
    show: {
      y: 10,
      opacity: 1,
    },

    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },

    hide: {
      y: 20,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
  };

  return (
    <div className="bg-white shadow-sm lg:px-20 border-t border-gray-100 px-5 py-6 flex flex-col justify-center">
      <div className="self-center sm:w-2/3 flex sm:flex-row flex-col items-center gap-5 mb-5">
        <div className="relative w-full">
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(showDatePosted());
            }}
          >
            <FilterButton>Date Posted</FilterButton>
          </div>
          <AnimatePresence exitBeforeEnter>
            {jobSearch.showDatePosted ? (
              <motion.div
                variants={showPopup}
                animate="show"
                initial="hide"
                exit="exit"
                className="bg-white z-10 shadow-lg rounded-lg w-48 overflow-hidden absolute"
              >
                <div className="option-select">Last 24 hours</div>
                <div className="option-select">Last 3 days</div>
                <div className="option-select">Last 7 days</div>
                <div className="option-select">Last 14 days</div>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
        <div className="relative w-full">
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(showJobType());
            }}
          >
            <FilterButton>On-site/Remote</FilterButton>
          </div>
          <AnimatePresence exitBeforeEnter>
            {jobSearch.showJobType ? (
              <motion.div
                variants={showPopup}
                animate="show"
                initial="hide"
                exit="exit"
                className="bg-white z-10 shadow-lg rounded-lg w-48 overflow-hidden absolute"
              >
                <div className="option-select">Remote</div>
                <div className="option-select">On-site</div>
                <div className="option-select">Hybrid</div>
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      </div>
      <div></div>
      <div className="flex md:flex-row flex-col items-center justify-center md:gap-10 gap-4">
        <div className="md:w-2/5 w-full">
          <BaseInput
            name="job"
            type="text"
            value={state.job}
            placeholder="Search jobs"
            onChange={onChange}
          ></BaseInput>
        </div>
        <div className="md:w-2/5 w-full">
          <BaseInput
            name="location"
            type="text"
            value={state.location}
            placeholder="Search City, Region or Town"
            onChange={onChange}
          ></BaseInput>
        </div>
        <ButtonPrimary className="px-4 py-2 !rounded-md md:w-1/5">
          Find a job
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default JobSearchFilter;
