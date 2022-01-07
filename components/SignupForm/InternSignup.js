import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";
import Logo from "../HomeNavbar/Logo";
import { useDispatch, useStore } from "react-redux";
import { internSignup } from "../../redux/actions/auth";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import * as Yup from "yup";

import Link from "next/link";

export default function InternSignup(props) {
  const [state, setState] = useState({
    showPassword: false,
  });

  const router = useRouter();

  const dispatch = useDispatch();

  const store = useStore();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password1: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .max(120, "This field has a max lenght of 120")
        .required("This field is required"),
      last_name: Yup.string()
        .max(120, "This field has a max lenght of 120")
        .required("This field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("This field is required"),
      password1: Yup.string().required("This field is required"),
    }),
    onSubmit: async (values, { setErrors }) => {
      setLoading(true);
      await dispatch(
        internSignup({
          data: {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            password1: values.password1,
            password2: values.password1,
          },
          router,
        })
      );
      setLoading(false);
      const errorVals = {
        first_name: "",
        last_name: "",
        email: "",
        password1: "",
      };
      setErrors({ ...errorVals, ...store.getState().auth.signupErrors });
    },
  });

  const [loading, setLoading] = useState(false);

  const changeShowPasswordToFalse = () => {
    setState({ ...state, showPassword: false });
  };

  const changeShowPasswordToTrue = () => {
    setState({ ...state, showPassword: true });
  };

  return (
    <div className="flex flex-col items-center py-10">
      <Link href="/">
        <a>
          <Logo type="large"></Logo>
        </a>
      </Link>
      <div className="bg-gray-100 px-8 py-4 rounded-xl flex flex-col w-500 mt-8">
        <h3 className="font-bold mb-2">
          What account are you creating? Please choose one
        </h3>
        <div className="p-2 w-full flex gap-2 items-center mb-4 rounded-full bg-white">
          <div
            onClick={props.changeToInternSignup}
            className="w-2/4 cursor-pointer text-center bg-purple-800 py-2 text-white font-bold rounded-full"
          >
            Intern
          </div>
          <div
            onClick={props.changeToCompanySignup}
            className="w-2/4 text-black cursor-pointer font-bold hover:bg-gray-100 transition-all text-center py-2 rounded-full"
          >
            Company
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <BaseInput
            name="first_name"
            type="text"
            placeholder="First name"
            errorStyle={
              formik.touched.first_name && formik.errors.first_name
                ? true
                : false
            }
            label="First name"
            {...formik.getFieldProps("first_name")}
          ></BaseInput>
          {formik.touched.first_name && formik.errors.first_name ? (
            <span className="text-sm mt-3 font-bold text-red-400">
              {formik.errors.first_name}
            </span>
          ) : null}
          <BaseInput
            name="last_name"
            type="text"
            placeholder="Last name"
            label="Last name"
            className="mt-6"
            errorStyle={
              formik.touched.last_name && formik.errors.last_name ? true : false
            }
            {...formik.getFieldProps("last_name")}
          ></BaseInput>
          {formik.touched.last_name && formik.errors.last_name ? (
            <span className="text-sm mt-3 font-bold text-red-400">
              {formik.errors.last_name}
            </span>
          ) : null}
          <BaseInput
            name="email"
            type="email"
            className="mt-6"
            errorStyle={
              formik.touched.email && formik.errors.email ? true : false
            }
            placeholder="Email"
            label="Email"
            {...formik.getFieldProps("email")}
          ></BaseInput>
          {formik.touched.email && formik.errors.email ? (
            <span className="text-sm mt-3 font-bold text-red-400">
              {formik.errors.email}
            </span>
          ) : null}
          <BaseInput
            name="password1"
            type={state.showPassword ? "text" : "password"}
            className="mt-6"
            errorStyle={
              formik.touched.password1 && formik.errors.password1 ? true : false
            }
            placeholder="Password"
            label="Password"
            {...formik.getFieldProps("password1")}
            showPassword={state.showPassword}
            changeShowPasswordToFalse={changeShowPasswordToFalse}
            changeShowPasswordToTrue={changeShowPasswordToTrue}
          ></BaseInput>
          {formik.touched.password1 && formik.errors.password1 ? (
            <span className="text-sm mt-3 font-bold text-red-400">
              {formik.errors.password1}
            </span>
          ) : null}
          <h3 className="mt-3 font-bold text-center">
            By clicking sign up, you agree to the job finder{" "}
            <span className="text-blue-500">Terms and condition</span>
          </h3>
          <ButtonPrimary
            type="submit"
            className={"mt-5 w-full px-5 py-2 " + (loading ? "opacity-60" : "")}
          >
            {!loading ? <span>Sign up</span> : ""}{" "}
            <div>
              {loading ? <ButtonLoadingSpinner></ButtonLoadingSpinner> : ""}
            </div>
          </ButtonPrimary>
        </form>
        <div className="mt-10 flex gap-4 items-center">
          <div className="flex-grow h-px bg-gray-300"></div>
          <div className="text-sm font-bold text-center">Or</div>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>
        <ButtonPrimaryOpen className="mt-8 w-full px-5 py-2 flex justify-center !border !border-gray-300 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="24px"
            height="24px"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
            />
            <path
              fill="#FF3D00"
              d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
            />
          </svg>
          <span>Sign up with Google</span>
        </ButtonPrimaryOpen>
        <h3 className="mt-6 font-bold text-center">
          Already on Job finder?{" "}
          <Link
            href={{
              pathname: "/signin",
              query: { redirect: `${router.query.redirect}` },
            }}
          >
            <a className="text-blue-500">Sign in</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
