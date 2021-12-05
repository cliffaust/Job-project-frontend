import React from "react";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

function ActiveJob() {
  return (
    <div
      className={
        "px-6 py-4 bg-white shadow-lg rounded-lg flex flex-col items-center"
      }
    >
      <div className="w-32 h-32 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="Image"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-2xl font-bold">Namiba</h1>
        <p className="text-base">Junior Developer</p>
        <p className="text-base text-green-600">20 Applicant</p>
        <p className="text-base truncate">
          Tema Community 25, Accra Ghana(Remote)
        </p>
        <p className="text-base">
          <span>Job posted by, </span>{" "}
          <span className="font-bold">Jeff Lorem(Senior Developer)</span>
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
      <div className="mt-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nisi
        eaque ad odit optio. Nobis, harum consequuntur vero, sequi cum error
        aliquid voluptatibus sint minima omnis illo illum optio odio. eaque ad
        odit optio. Nobis, harum consequuntur vero, sequi cum error aliquid
        voluptatibus sint minima omnis illo illum optio odio. eaque ad odit
        optio. Nobis, harum consequuntur vero, sequi cum error aliquid
        voluptatibus sint minima omnis illo illum optio odio. oluptatibus sint
        minima omnis illo illum optio odio. eaque ad odit optio. Nobis, harum
        consequuntur vero, sequi cum error aliquid voluptatibus sint minima
        omnis illo illum optio odio. eaque ad odit optio. Nobis, harum
      </div>
      <div className="w-full mt-6">
        <ButtonPrimary className="!rounded-md w-full py-2">
          View Company Profile
        </ButtonPrimary>
      </div>
    </div>
  );
}

export default ActiveJob;
