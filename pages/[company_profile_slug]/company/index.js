import React, { useState } from "react";
import Profile from "../../../components/CompanyProfile/Profile";
import Footer from "../../../components/HomeFooter/Footer";
import getToken from "../../../lib/getToken";
import Error from "../../_error";

import axios from "axios";

function CompanyProfile({ user_profile, company_profile, jobs, statusCode }) {
  return (
    <div>
      {statusCode ? (
        <Error></Error>
      ) : (
        <div className="overflow-x-hidden">
          <Profile
            user_profile={user_profile}
            company_profile={company_profile}
            jobs={jobs}
          ></Profile>
          <div className="mt-20">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompanyProfile;

export async function getServerSideProps(context) {
  try {
    const token = getToken(context);

    const { company_profile_slug } = context.params;

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/company-profiles/${company_profile_slug}/`
    );

    const jobs = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/companies/${data.slug}/jobs/`
    );

    if (token) {
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
          jobs: jobs.data.results,
        },
      };
    }

    return {
      props: {
        company_profile: data,
        user_profile: "",
        jobs: jobs.data.results,
      },
    };
  } catch (error) {
    console.log(error.response.data);
    if (error.response.status === 401) {
      return {
        redirect: {
          permanent: false,
          destination: "/logout",
        },
      };
    } else if (error.response.status === 400) {
      context.res.statusCode = 400;

      return {
        notFound: true,
      };
    } else {
      const statusCode = context.res
        ? context.res.statusCode
        : context.err
        ? context.err.statusCode
        : 404;
      return {
        props: {
          statusCode,
        },
      };
    }
  }
}
