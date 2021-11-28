import Logo from "./Logo";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";
import Link from "next/link";

const Navbar = () => {
  return (
    <navbar className="flex px-20 py-4 justify-between items-center">
      <Link href={{ pathname: "/" }}>
        <a>
          <Logo type="small"></Logo>
        </a>
      </Link>
      <div className="flex items-center gap-8">
        <div className="text-base cursor-pointer">Find jobs</div>
        <div className="text-base cursor-pointer">About us</div>
        <div className="text-base cursor-pointer">Contact us</div>
        <ButtonPrimary className="!px-6 !py-1">Join us</ButtonPrimary>
        <ButtonPrimary className="!px-6 !py-1">Find an intern</ButtonPrimary>
        <Link href="/signup">
          <a>
            <ButtonPrimaryOpen className="!px-6 !py-1">
              Sign up
            </ButtonPrimaryOpen>
          </a>
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
