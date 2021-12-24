import React, { useState } from "react";
import Profile from "../../components/CompanyProfile/Profile";
import Footer from "../../components/HomeFooter/Footer";
import axios from "axios";
import Cookies from "js-cookie";

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

export async function getServerSideProps({ res, req }) {
  try {
    let token;
    if (req) {
      if (req.headers.cookie) {
        token = req.headers.cookie.split(";").map((element) => element.trim());
        token = token.find((c) => c.startsWith("token="));

        if (token) {
          token = token.split("=")[1];
        }
      }
    }

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/user-company-profile/`,
      {
        headers: {
          Authorization: "Token " + token,
        },
      }
    );

    return {
      props: {
        company_profile: data,
      },
    };
  } catch (error) {
    console.log(error.response.data);
    return {
      props: {
        company_profile: "",
      },
    };
  }
}
