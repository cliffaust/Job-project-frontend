import React, { useState } from "react";
import moment from "moment";

import ActiveJob from "../../components/JobActive/JobActive";
import Popup from "../CompanyProfile/GalleryPopup";

function Job({ jobs, user_profile }) {
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
    company_slug: typeof jobs[0] !== "undefined" ? jobs[0].company_slug : "",
    slug: typeof jobs[0] !== "undefined" ? jobs[0].slug : "",
    company_profile_image:
      typeof jobs[0] !== "undefined" ? jobs[0].company_profile_image : "",
  });

  const [jobPopup, setJobPopup] = useState(false);

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
      company_slug: data.company_slug,
      slug: data.slug,
    });
    setJobPopup(true);
  };
  return (
    <div className="border-b border-gray-100">
      {jobs.length > 0 ? (
        <div className="md:px-20 px-5 flex justify-between mt-10">
          <div className="lg:w-2/5 w-full flex flex-col gap-6 mb-6 lg:h-screen overflow-x-hidden overflow-y-scroll">
            {jobs.map((job) => (
              <div
                onClick={setJobActive(job)}
                key={job.id}
                className={
                  "border px-6 py-4 bg-white rounded-md flex flex-col sm:flex-row lg:flex-col items-center cursor-pointer w-full " +
                  (job.id === state.id
                    ? "lg:border-purple-600 border-gray-200"
                    : "border-gray-200")
                }
              >
                <div className="w-24 h-24 lg:w-28 lg:h-28 lg:mb-4 sm:mb-0 mb-4 sm:mr-6 lg:mr-0 sm:w-32 sm:h-32 rounded-full">
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
                    <p className="text-base">
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
          <ActiveJob
            job={state}
            user_profile={user_profile}
            setJobPopup={setJobPopup}
            jobPopup={jobPopup}
          ></ActiveJob>
        </div>
      ) : (
        <div className="text-center text-2xl font-bold mt-6">
          Sorry, No jobs available right now
        </div>
      )}
      {/* <Popup
        closeModal={() => setJobPopup(false)}
        showPopup={jobPopup}
        className="w-full md:w-11/12 lg:w-4/5 lg:hidden"
        backdropClassName="lg:hidden"
      >
        <ActiveJob job={state} user_profile={user_profile}></ActiveJob>
      </Popup> */}
    </div>
  );
}

export default Job;
