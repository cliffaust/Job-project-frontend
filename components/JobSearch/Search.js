import React, { useState } from "react";
import FilterButton from "../DefaultComponents/FilterButton";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import { showDatePosted, showJobType } from "../../redux/actions/jobSearch";
import { useDispatch, useSelector } from "react-redux";

function JobSearchFilter() {
  const jobSearch = useSelector((state) => state.jobSearchReducer);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    job: "",
    location: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  return (
    <div className="bg-white shadow-sm px-20 py-6 flex flex-col justify-center">
      <div className="self-center flex items-center gap-5 mb-5">
        <div className="relative">
          <div
          // onClick={(e) => {
          //   e.stopPropagation();
          //   setState({
          //     ...state,
          //     showDatePosted: !state.showDatePosted,
          //     showJobType: false,
          //   });
          // }}
          >
            <FilterButton>Date Posted</FilterButton>
          </div>
          {jobSearch.showDatePosted && (
            <div className="bg-white shadow-lg rounded-lg w-48 overflow-hidden absolute -bottom-44">
              <div className="option-select">Last 24 hours</div>
              <div className="option-select">Last 3 days</div>
              <div className="option-select">Last 7 days</div>
              <div className="option-select">Last 14 days</div>
            </div>
          )}
        </div>
        <div className="relative">
          <div
          // onClick={(e) => {
          //   e.stopPropagation();
          //   setState({
          //     ...state,
          //     showJobType: !state.showJobType,
          //     showDatePosted: false,
          //   });
          // }}
          >
            <FilterButton>On-site/Remote</FilterButton>
          </div>
          {jobSearch.showJobType && (
            <div className="bg-white shadow-lg rounded-lg w-48 overflow-hidden absolute -bottom-32">
              <div className="option-select">Remote</div>
              <div className="option-select">On-site</div>
              <div className="option-select">Hybrid</div>
            </div>
          )}
        </div>
      </div>
      <div></div>
      <div className="flex items-center justify-center gap-10">
        <div className="w-2/5">
          <BaseInput
            name="job"
            type="text"
            value={state.job}
            placeholder="Search jobs"
            handleChange={handleChange}
          ></BaseInput>
        </div>
        <div className="w-2/5">
          <BaseInput
            name="location"
            type="text"
            value={state.location}
            placeholder="Search City, Region or Town"
            handleChange={handleChange}
          ></BaseInput>
        </div>
        <ButtonPrimary className="px-4 py-2 !rounded-md">
          Find a job
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default JobSearchFilter;
