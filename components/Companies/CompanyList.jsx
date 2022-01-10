import React from "react";
import CompanySearch from "../Companies/CompanySearch";
import NavBar from "../JobsNavbar/Navbar";

function CompanyList() {
  return (
    <div>
      <NavBar></NavBar>
      <div className="px-20 mt-10">
        <CompanySearch></CompanySearch>
        <div className="mt-6">
          <div className="flex flex-wrap">
            <div className="p-4 w-80 bg-white flex items-center gap-4 rounded-lg hover:shadow-lg cursor-pointer transition-all duration-200">
              <img
                src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                alt="Company Profile Image"
                className="w-24 h-24 rounded-md object-cover"
              />
              <div>
                <h1 className="text-xl font-bold truncate">Namibo</h1>
                <p className="text-base">Since 2013</p>
                <p className="text-base text-green-600 font-medium">
                  About 41 employees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
