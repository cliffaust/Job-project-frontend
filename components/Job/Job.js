import React from "react";

function Job(props) {
  return (
    <div
      className={
        "border px-6 py-4 bg-white rounded-md flex flex-col items-center " +
        (props.isActive ? "border-purple-600" : "border-gray-200")
      }
    >
      <div className="w-24 h-24 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
          alt="Image"
          className="h-full w-full object-cover rounded-full"
        />
      </div>
      <div className="mt-2 self-start">
        <div className="mb-4">
          <h1 className="text-xl font-bold">Namiba</h1>
          <p className="text-base">Junior Developer</p>
        </div>
        <div>
          <p className="text-base truncate">
            Tema Community 25, Accra Ghana(Remote)
          </p>
          <p className="text-base text-green-600">20 Applicant</p>
        </div>
      </div>
    </div>
  );
}

export default Job;
