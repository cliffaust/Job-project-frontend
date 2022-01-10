import Logo from "./Logo";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";
import Burger from "../DefaultComponents/Burger";

import Link from "next/link";

const NavbarComponent = ({ user_profile }) => {
  return (
    <div className="flex px-5 md:px-20 py-4 justify-between items-center">
      <div className="md:hidden">
        <Burger></Burger>
      </div>
      <Link href={{ pathname: "/" }}>
        <a>
          <Logo type="small"></Logo>
        </a>
      </Link>
      <div className="flex items-center md:gap-8">
        <Link href="/jobs">
          <a className="text-base cursor-pointer hidden md:block">Find jobs</a>
        </Link>
        <div className="text-base cursor-pointer hidden md:block">About us</div>
        <div className="text-base cursor-pointer hidden md:block">
          Contact us
        </div>
        {user_profile ? (
          <div>
            {user_profile.is_company ? (
              <ButtonPrimary className="!px-6 !py-1 hidden md:block">
                Find an intern
              </ButtonPrimary>
            ) : (
              <ButtonPrimary className="!px-6 !py-1 hidden md:block">
                Find a company
              </ButtonPrimary>
            )}
          </div>
        ) : (
          <ButtonPrimary className="!px-6 !py-1 hidden md:block">
            Find an intern
          </ButtonPrimary>
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
