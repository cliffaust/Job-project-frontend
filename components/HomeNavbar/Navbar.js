import Logo from "./Logo";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";

import Link from "next/link";

const NavbarComponent = ({ user_profile }) => {
  return (
    <div className="flex px-20 py-4 justify-between items-center">
      <Link href={{ pathname: "/" }}>
        <a>
          <Logo type="small"></Logo>
        </a>
      </Link>
      <div className="flex items-center gap-8">
        <Link href="/jobs">
          <a className="text-base cursor-pointer">Find jobs</a>
        </Link>
        <div className="text-base cursor-pointer">About us</div>
        <div className="text-base cursor-pointer">Contact us</div>
        {user_profile ? (
          <div>
            {user_profile.is_company ? (
              <ButtonPrimary className="!px-6 !py-1">
                Find an intern
              </ButtonPrimary>
            ) : (
              <ButtonPrimary className="!px-6 !py-1">
                Find a company
              </ButtonPrimary>
            )}
          </div>
        ) : (
          <ButtonPrimary className="!px-6 !py-1">Find an intern</ButtonPrimary>
        )}
        {user_profile ? (
          <div>
            <img
              src={user_profile.profile_pic}
              className="rounded-full w-10 h-10 object-cover"
              alt="Profile Image"
            />
          </div>
        ) : (
          <Link
            href={{
              pathname: "/signup",
            }}
          >
            <a>
              <ButtonPrimaryOpen className="!px-6 !py-1">
                Sign up
              </ButtonPrimaryOpen>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavbarComponent;
