import React, { useState } from "react";
import moment from "moment";

import ActiveJob from "../../components/JobActive/JobActive";

function Job({ jobs }) {
  const [state, setState] = useState({
    id: typeof jobs[0] !== "undefined" ? jobs[0].id : 0,
    firstName: typeof jobs[0] !== "undefined" ? jobs[0].first_name : "",
    lastName: typeof jobs[0] !== "undefined" ? jobs[0].last_name : "",
    jobTitle: typeof jobs[0] !== "undefined" ? jobs[0].job_title : "",
    address: typeof jobs[0] !== "undefined" ? jobs[0].address : "",
    remote: typeof jobs[0] !== "undefined" ? jobs[0].remote : false,
    salary: typeof jobs[0] !== "undefined" ? jobs[0].salary : "",
    workEmail: typeof jobs[0] !== "undefined" ? jobs[0].work_email : "",
    currentRole: typeof jobs[0] !== "undefined" ? jobs[0].current_role : "",
    phone: typeof jobs[0] !== "undefined" ? jobs[0].phone_number : "",
    description: typeof jobs[0] !== "undefined" ? jobs[0].description : "",
    num_applicants: typeof jobs[0] !== "undefined" ? jobs[0].num_applicants : 0,
    date_posted: typeof jobs[0] !== "undefined" ? jobs[0].date_posted : "",
    company_name: typeof jobs[0] !== "undefined" ? jobs[0].company_name : "",
    company_profile_image:
      typeof jobs[0] !== "undefined" ? jobs[0].company_profile_image : "",
  });

  const setJobActive = (data) => (e) => {
    e.stopPropagation();
    setState({
      ...state,
      id: data.id,
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
      company_name: data.company_name,
      company_profile_image: data.company_profile_image,
    });
  };
  return (
    <div>
      {jobs.length > 0 ? (
        <div className="md:px-20 px-5 flex justify-between mt-10">
          <div className="md:w-2/5 w-full flex flex-col gap-6 h-screen overflow-scroll">
            {jobs.map((job) => (
              <div
                onClick={setJobActive(job)}
                key={job.id}
                className={
                  "border px-6 py-4 bg-white rounded-md flex flex-col items-center cursor-pointer " +
                  (job.id === state.id
                    ? "border-purple-600"
                    : "border-gray-200")
                }
              >
                <div className="w-24 h-24 rounded-full">
                  <img
                    src={job.company_profile_image}
                    alt="Image"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="mt-2 self-start">
                  <div className="mb-4">
                    <h1 className="text-xl font-bold">{job.company_name}</h1>
                    <p className="text-base">{job.job_title}</p>
                  </div>
                  <div>
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
                  </div>
                  <p className="text-base mt-4 font-medium mb-2">
                    Posted {moment(job.date_posted).startOf("hour").fromNow()}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-2/4 h-screen overflow-scroll hidden md:block">
            <ActiveJob job={state}></ActiveJob>
          </div>
        </div>
      ) : (
        <div className="text-center text-2xl font-bold mt-6">
          Sorry, No jobs available right now
        </div>
      )}
    </div>
  );
}

export default Job;
