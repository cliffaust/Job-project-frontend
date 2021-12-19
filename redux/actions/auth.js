import axios from "axios";
import Cookies from "js-cookie";

export const internSignup = (data) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );
    // Cookies.set("token", response.data.key);
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

export const companySignup = (data) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/registration/`,
      data
    );
    // Cookies.set("token", response.data.key);
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

export const login = (payload) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/login/`,
      payload.data
    );
    // Cookies.set("token", response.data.key);
    dispatch({
      type: "LOGIN",
      payload: {
        token: response.data.key,
      },
    });
    // payload.router.replace(( payload.router.query.redirect || '/'), () => payload.router.reload())
    payload.router.push("/", null, { shallow: true });
  } catch (error) {
    console.log(error.response.data);
    if (error.response.status === 400) {
      dispatch({
        type: "CHANGE_LOGIN_ERROR_STATE",
      });
    }
  }
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
