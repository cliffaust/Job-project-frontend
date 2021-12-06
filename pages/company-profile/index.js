import React, { useState } from "react";
import Profile from "../../components/CompanyProfile/Profile";
import Footer from "../../components/HomeFooter/Footer";

function CompanyProfile() {
  return (
    <div className="overflow-x-hidden">
      <Profile></Profile>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CompanyProfile;
