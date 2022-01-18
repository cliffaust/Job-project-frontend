import React from "react";
import CompanyList from "../../components/Companies/CompanyList";
import getToken from "../../lib/getToken";

import axios from "axios";

function Companies({ companies, user_profile }) {
  return (
    <div>
      <CompanyList
        companies={companies}
        user_profile={user_profile}
      ></CompanyList>
    </div>
  );
}

export default Companies;

export async function getServerSideProps(context) {
  try {
    const token = getToken(context);

    const companies = await axios.get(
      `${process.env.NEXT_PUBLIC_baseURL}/company-profiles/`
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
          companies: companies.data.results,
          user_profile: response.data[0],
        },
      };
    }

    return {
      props: {
        companies: companies.data.results,
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
          companies: [],
          user_profile: "",
        },
      };
    }
  }
}
