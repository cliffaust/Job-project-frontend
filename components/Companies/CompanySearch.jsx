import React, { useState } from "react";
import BaseInput from "../DefaultComponents/BaseInput";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";

function CompanySearch() {
  const [state, setState] = useState({
    company_name: "",
  });

  const onChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">Find places to work</h1>
      <div className="mt-4">
        <div className="flex items-center justify-center gap-4">
          <div className="w-4/5">
            <BaseInput
              name="company_name"
              type="text"
              value={state.company_name}
              placeholder="Search company"
              onChange={onChange}
            ></BaseInput>
          </div>
          <ButtonPrimary className="px-4 py-2 !rounded-md">
            Search
          </ButtonPrimary>
        </div>
      </div>
    </div>
  );
}

export default CompanySearch;
