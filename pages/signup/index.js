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
        {companySignupFormState ? (
          <CompanySignup
            changeToInternSignup={changeToInternSignup}
            changeToCompanySignup={changeToCompanySignup}
          ></CompanySignup>
        ) : (
          <InternSignup
            changeToInternSignup={changeToInternSignup}
            changeToCompanySignup={changeToCompanySignup}
          ></InternSignup>
        )}
      </div>
    </div>
  );
}
