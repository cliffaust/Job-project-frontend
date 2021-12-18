import axios from "axios";

export const internSignup = (data) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );

    dispatch({
      type: "INTERN_SIGNUP",
      payload: {
        token: response.data.key,
      },
    });
  } catch (error) {
    console.log(error.response.data);

    dispatch({
      type: "INTERN_SIGNUP",
      payload: {
        token: "",
      },
    });
  }
};

export const companySignup = () => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );
    dispatch({
      type: "COMPANY_SIGNUP",
      payload: {
        token: response.data.key,
      },
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: "COMPANY_SIGNUP",
      payload: {
        token: "",
      },
    });
  }
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
