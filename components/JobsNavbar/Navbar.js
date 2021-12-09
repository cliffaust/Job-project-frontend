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
          <Link href="/post-job">
            <a className="text-base cursor-pointer">Post a job</a>
          </Link>
          <div className="text-base cursor-pointer">Companies</div>
          <div className="text-base cursor-pointer">Guidelines</div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/signin">
          <a className="text-base cursor-pointer">Sign in</a>
        </Link>
        <Link href="/signup">
          <a className="text-base cursor-pointer">Sign up</a>
        </Link>
      </div>
    </navbar>
  );
};

export default Navbar;
