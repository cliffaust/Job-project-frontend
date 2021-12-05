import React, { useState } from "react";
import FilterButton from "../DefaultComponents/FilterButton";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

function JobSearchFilter() {
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
        <FilterButton>Date Posted</FilterButton>
        <FilterButton>On-site/Remote</FilterButton>
      </div>
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
