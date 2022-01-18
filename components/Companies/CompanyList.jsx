import React from "react";
import CompanySearch from "../Companies/CompanySearch";
import NavBar from "../JobsNavbar/Navbar";
import { useRouter } from "next/router";

function CompanyList({ companies, user_profile }) {
  const router = useRouter();

  const viewCompanyProfile = (slug) => {
    router.push(`/${slug}/company`);
  };
  return (
    <div>
      <NavBar user_profile={user_profile}></NavBar>
      <div className="md:px-20 px-5 mt-10">
        <CompanySearch></CompanySearch>
        <div className="mt-6">
          <div className="flex justify-center flex-wrap gap-4">
            {companies.map((company) => (
              <div
                key={company.id}
                onClick={() => viewCompanyProfile(company.slug)}
                className="p-4 w-80 sm:w-96 bg-white flex items-center gap-4 rounded-lg hover:shadow-lg cursor-pointer transition-all duration-200"
              >
                <img
                  src={company.company_profile_image}
                  alt="Company Profile Image"
                  className="w-24 h-24 rounded-md object-cover"
                />
                <div>
                  <h1 className="text-xl font-bold truncate">
                    {company.company_name}
                  </h1>
                  <p className="text-base">Since {company.yearStarted}</p>
                  <p className="text-base text-green-600 font-medium">
                    About {company.num_of_employees} employees
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;
