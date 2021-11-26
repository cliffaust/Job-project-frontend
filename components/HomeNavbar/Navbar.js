import Logo from "./Logo";
import ButtonPrimary from "../DefaultComponents/ButtonPrimary";
import ButtonPrimaryOpen from "../DefaultComponents/ButtonPrimaryOpen";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex px-20 py-4 justify-between items-center">
      <Link href="/">
        <Logo type="small"></Logo>
      </Link>
      <div className="flex items-center gap-8">
        <div className="text-base cursor-pointer">Find jobs</div>
        <div className="text-base cursor-pointer">About us</div>
        <div className="text-base cursor-pointer">Contact us</div>
        <ButtonPrimary className="!px-6 !py-1">Join us</ButtonPrimary>
        <ButtonPrimary className="!px-6 !py-1">Find an intern</ButtonPrimary>
        <ButtonPrimaryOpen className="!px-6 !py-1">Sign up</ButtonPrimaryOpen>
      </div>
    </div>
  );
};

export default Navbar;
