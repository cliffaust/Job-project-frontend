import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";

export default function Form() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <div className="w-2/5">
        <h1 className="text-3xl font-standardTT mb-5 text-center">
          A new way of finding a job
        </h1>
        <BaseInput
          name="email"
          type="email"
          value={state.email}
          placeholder="Email"
          className="mb-6"
          handleChange={handleChange}
        ></BaseInput>
        <BaseInput
          name="password"
          type="password"
          placeholder="Password"
          value={state.password}
          handleChange={handleChange}
        ></BaseInput>
      </div>
      <div></div>
    </div>
  );
}
