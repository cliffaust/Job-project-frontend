import axios from "axios";

export const internSignup = (data) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );
    console.log(response);
  } catch (error) {
    console.log(error.response.data);
  }
  return {
    type: "INTERN_SIGNUP",
    payload: {
      token: response.data.key,
    },
  };
};

export const companySignup = async () => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );
  } catch (error) {
    console.log(error.response.data);
  }
  return {
    type: "COMPANY_SIGNUP",
    payload: {
      token: response.data.key,
    },
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
