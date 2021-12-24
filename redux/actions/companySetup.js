import axios from "axios";
import Cookies from "js-cookie";

export const addCompanyProfile = (payload) => {
  try {
    axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/create-company-profile/`,
      {
        company_name: payload.data.company_name,
        num_of_employees: payload.data.num_of_employees,
        year_started: payload.data.year_started,
        about_company: payload.data.about_company,
        values: payload.data.values,
      },
      {
        headers: {
          Authorization: "Token " + Cookies.get("token"),
        },
      }
    );
  } catch (error) {
    console.log(error.response.data);
  }
};
