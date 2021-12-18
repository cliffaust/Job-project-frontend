import React, { useState } from "react";
import InternSignup from "../../components/SignupForm/InternSignup";
import CompanySignup from "../../components/SignupForm/CompanySignup";

export default function Signup() {
  const [companySignupFormState, setCompanySignupFormState] = useState(false);
  const changeToCompanySignup = () => {
    setCompanySignupFormState(true);
  };

  const changeToInternSignup = () => {
    setCompanySignupFormState(false);
  };
  return (
    <div>
      <div className="mx-auto">
        <div style={{ display: companySignupFormState ? "block" : "none" }}>
          <CompanySignup
            changeToInternSignup={changeToInternSignup}
            changeToCompanySignup={changeToCompanySignup}
          ></CompanySignup>
        </div>
        <div style={{ display: !companySignupFormState ? "block" : "none" }}>
          <InternSignup
            changeToInternSignup={changeToInternSignup}
            changeToCompanySignup={changeToCompanySignup}
          ></InternSignup>
        </div>
      </div>
    </div>
  );
}
