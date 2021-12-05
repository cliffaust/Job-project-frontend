import Logo from "../HomeNavbar/Logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <navbar className="flex px-20 py-4 justify-between items-center">
      <div className="flex items-center gap-10">
        <Link href={{ pathname: "/" }}>
          <a>
            <Logo type="small"></Logo>
          </a>
        </Link>
        <div className="flex items-center gap-8">
          <div className="text-base cursor-pointer">Jobs</div>
          <div className="text-base cursor-pointer">Post a job</div>
          <div className="text-base cursor-pointer">Companies</div>
          <div className="text-base cursor-pointer">Guidelines</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="text-base cursor-pointer">Sign in</div>
        <div className="text-base cursor-pointer">Sign up</div>
      </div>
    </navbar>
  );
};

export default Navbar;
