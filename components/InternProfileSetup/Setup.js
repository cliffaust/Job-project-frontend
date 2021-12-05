import React from "react";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import Link from "next/link";

function ProfileSetup() {
  return (
    <div className="flex h-screen">
      <div className="w-2/3 flex flex-col justify-center py-5 bg-gray-100">
        <div className="h-full">
          <img
            className="h-full w-full"
            src="./images/setup-image3.svg"
            alt=""
          />
        </div>
      </div>
      <div className="w-2/5 flex flex-col justify-center">
        <div className="text-4xl px-10 font-standardTT">Get started by,</div>
        <div className="flex px-10 justify-between items-center mt-12">
          <Link href="/">
            <a>
              <PreviousLink>Back Home</PreviousLink>
            </a>
          </Link>
          <div>
            <NextLink>Find a job</NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
