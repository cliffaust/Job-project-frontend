import React from "react";
import NavBar from "../JobsNavbar/Navbar";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ImageGallery from "./ImageGallery";

function Profile() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="mt-10 px-20 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="w-36 h-36 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
              alt="Image"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Namiba</h1>
            <p className="text-base">Since 2009</p>
            <p className="text-base text-green-600">20 Applicant</p>
          </div>
        </div>
        <ButtonPrimary className="px-6 py-2 !rounded-md">
          Go to jobs
        </ButtonPrimary>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between px-20 mb-5 mt-10">
          <div className="text-2xl font-standardTT font-bold">
            Company Images
          </div>
          <div className="flex items-center gap-1 text-purple-600">
            <span>See all</span>
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
        <ImageGallery></ImageGallery>
      </div>
    </div>
  );
}

export default Profile;
