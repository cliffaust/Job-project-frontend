import React from "react";
import Parser from "html-react-parser";
import moment from "moment";

import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

function ActiveJob({ job }) {
  return (
    <div
      className={
        "px-6 py-4 bg-white shadow-lg rounded-lg flex flex-col items-center"
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
          <p className="text-base text-green-600 font-bold">No applicants</p>
        )}
        <p className="text-base">
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
          <ButtonPrimary className="px-6 py-2 !w-full !rounded-md">
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
        <ButtonPrimary className="!rounded-md w-full py-2">
          View Company Profile
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ActiveJob;
