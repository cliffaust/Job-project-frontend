import React from "react";
import NextLink from "../DefaultComponents/NextLink";
import PreviousLink from "../DefaultComponents/PreviousLink";
import Link from "next/link";

function ProfileSetup() {
  return (
    <div className="flex h-screen">
      <div className="lg:w-2/3 lg:flex hidden flex-col py-5 justify-between bg-white">
        <div className="h-full">
          <img
            className="h-full w-full"
            src="./images/setup-image3.svg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:w-2/5 w-full h-full flex flex-col justify-center sm:px-5">
        <img
          className="w-48 sm:w-60 self-center lg:hidden rounded-full"
          src="./images/setup-image3.svg"
          alt=""
        />
        <div className="text-4xl px-5 font-standardTT mt-10 lg:mt-0">
          Get started by,
        </div>
        <div className="flex px-3 justify-between items-center md:mt-24 mt-12">
          <Link href="/">
            <a>
              <PreviousLink>Back Home</PreviousLink>
            </a>
          </Link>
          <Link href="/jobs">
            <a>
              <NextLink>Find a job</NextLink>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetup;
