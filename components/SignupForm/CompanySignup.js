import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";
import ButtonLoadingSpinner from "../DefaultComponents/ButtonLoadingSpinner";
import Logo from "../HomeNavbar/Logo";

import { useDispatch } from "react-redux";
import { companySignup } from "../../redux/actions/auth";

import Link from "next/link";

export default function InternSignup(props) {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const changeShowPasswordToFalse = () => {
    setState({ ...state, showPassword: false });
  };

  const changeShowPasswordToTrue = () => {
    setState({ ...state, showPassword: true });
  };

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignup = async () => {
    setLoading(true);
    await dispatch(
      companySignup({
        first_name: state.first_name,
        last_name: state.last_name,
        email: state.email,
        password1: state.password,
        password2: state.password,
        is_company: true,
      })
    );
    // location.reload();
  };
  return (
    <div className="flex flex-col items-center py-10">
      <Logo type="large"></Logo>
      <div className="bg-gray-100 px-8 py-4 rounded-xl flex flex-col w-500 mt-8">
        <h3 className="font-bold mb-2">
          What account are you creating? Please choose one
        </h3>
        <div className="p-2 w-full flex gap-2 items-center mb-4 rounded-full bg-white">
          <div
            onClick={props.changeToInternSignup}
            className="w-2/4 cursor-pointer hover:bg-gray-100 transition-all text-center py-2 text-black font-bold rounded-full"
          >
            Intern
          </div>
          <div
            onClick={props.changeToCompanySignup}
            className="w-2/4 cursor-pointer bg-purple-800 text-white font-bold text-center py-2 rounded-full"
          >
            Company
          </div>
        </div>
        <BaseInput
          name="first_name"
          type="text"
          value={state.first_name}
          placeholder="First name"
          className="mb-6"
          label="First name"
          onChange={onChange}
        ></BaseInput>
        <BaseInput
          name="last_name"
          type="text"
          value={state.last_name}
          placeholder="Last name"
          label="Last name"
          className="mb-6"
          onChange={onChange}
        ></BaseInput>
        <BaseInput
          name="email"
          type="email"
          value={state.email}
          placeholder="Email"
          label="Email"
          className="mb-6"
          onChange={onChange}
        ></BaseInput>
        <BaseInput
          name="password"
          type={state.showPassword ? "text" : "password"}
          placeholder="Password"
          label="Password"
          value={state.password}
          onChange={onChange}
          showPassword={state.showPassword}
          changeShowPasswordToFalse={changeShowPasswordToFalse}
          changeShowPasswordToTrue={changeShowPasswordToTrue}
        ></BaseInput>
        <h3 className="mt-3 font-bold text-center">
          By clicking sign up, you agree to the job finder{" "}
          <span className="text-blue-500">Terms and condition</span>
        </h3>
        <ButtonPrimary
          onClick={handleSignup}
          className={"mt-5 w-full px-5 py-2 " + (loading ? "opacity-60" : "")}
        >
          {!loading ? <span>Sign up</span> : ""}{" "}
          <div>
            {loading ? <ButtonLoadingSpinner></ButtonLoadingSpinner> : ""}
          </div>
        </ButtonPrimary>
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
          <Link href="/signin">
            <a className="text-blue-500">Sign in</a>
          </Link>
        </h3>
      </div>
    </div>
  );
}
