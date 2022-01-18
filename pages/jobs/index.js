import React from "react";
import Navbar from "../../components/JobsNavbar/Navbar";
import JobSearchFilter from "../../components/JobSearch/Search";
import Job from "../../components/Job/Job";
import ActiveJob from "../../components/JobActive/JobActive";
import Footer from "../../components/HomeFooter/Footer";
import { cancelPopup } from "../../redux/actions/jobSearch";
import getToken from "../../lib/getToken";

import { useDispatch } from "react-redux";
import axios from "axios";

function Jobs({ jobs, user_profile }) {
  const dispatch = useDispatch();
  return (
    <div onClick={() => dispatch(cancelPopup())} className="">
      <Navbar user_profile={user_profile}></Navbar>
      <JobSearchFilter></JobSearchFilter>
      <Job jobs={jobs} user_profile={user_profile}></Job>
      <Footer></Footer>
    </div>
  );
}

export default Jobs;

export async function getServerSideProps(context) {
  try {
    const token = getToken(context);

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/jobs/`
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
          jobs: data.results,
          user_profile: response.data[0],
        },
      };
    }

    return {
      props: {
        jobs: data.results,
        user_profile: "",
      },
    };
  } catch (error) {
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
          jobs: [],
          user_profile: "",
        },
      };
    }
  }
}
