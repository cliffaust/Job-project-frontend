import React from "react";
import Navbar from "../../components/JobsNavbar/Navbar";
import JobSearchFilter from "../../components/JobSearch/Search";
import Job from "../../components/Job/Job";
import ActiveJob from "../../components/JobActive/JobActive";

function Jobs() {
  return (
    <div className="">
      <Navbar></Navbar>
      <JobSearchFilter></JobSearchFilter>
      <div className="px-20 flex justify-between mt-10">
        <div className="w-2/5 flex flex-col gap-6">
          <Job isActive={true}></Job>
          <Job isActive={false}></Job>
        </div>
        <div className="w-2/4">
          <ActiveJob></ActiveJob>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
