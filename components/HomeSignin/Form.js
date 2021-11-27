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
      <BaseInput
        name="email"
        type="email"
        value={state.email}
        handleChange={handleChange}
      ></BaseInput>
      <BaseInput
        name="password"
        type="password"
        value={state.password}
        handleChange={handleChange}
      ></BaseInput>
    </div>
  );
}
