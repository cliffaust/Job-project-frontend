import React, { useState } from "react";
import Profile from "../../components/CompanyProfile/Profile";
import Footer from "../../components/HomeFooter/Footer";
import getToken from "../../lib/getToken";

import axios from "axios";

function CompanyProfile({ user_profile, company_profile }) {
  return (
    <div className="overflow-x-hidden">
      <Profile
        user_profile={user_profile}
        company_profile={company_profile}
      ></Profile>
      <div className="mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default CompanyProfile;

export async function getServerSideProps(context) {
  try {
    const token = getToken(context);

    if (token) {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_baseURL}/user-company-profile/`,
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      );

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_baseURL}/user/`,
        {
          headers: {
            Authorization: "Token " + token,
          },
        }
      );

      return {
        props: {
          company_profile: data,
          user_profile: response.data[0],
        },
      };
    }

    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  } catch (error) {
    console.log(error.response.data);
    if (error.response.status === 401) {
      return {
        redirect: {
          permanent: false,
          destination: "logout",
        },
      };
    } else {
      return {
        props: {
          company_profile: "",
          user_profile: "",
        },
      };
    }
  }
}
