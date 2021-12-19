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

export const login = (data) => async (dispatch) => {
  let response;
  try {
    response = await axios.post(
      `${process.env.NEXT_PUBLIC_baseURL}/rest-auth/login/`,
      data
    );
    // Cookies.set("token", response.data.key);
    dispatch({
      type: "LOGIN",
      payload: {
        token: response.data.key,
      },
    });
  } catch (error) {
    console.log(error.response.data);

    dispatch({
      type: "LOGIN",
      payload: {
        token: "",
      },
    });
  }
};

// export const checkAuth = (req) => async (dispatch) => {
//   let token
//     if (req) {
//       if (req.headers.cookie) {
//         token = req.headers.cookie.split(';').map((element) => element.trim())
//         token = token.find((c) => c.startsWith('token='))

//         if (token) {
//           token = token.split('=')[1]
//           dispatch({
//             type: "ADD_TOKEN",
//             payload: {
//               token: token,
//             },
//           })
//         }
//       }
//     }
//   },

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
