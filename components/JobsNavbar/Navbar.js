import Logo from "../HomeNavbar/Logo";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ user_profile }) => {
  const router = useRouter();
  const signin = () => {
    router.push({
      pathname: "signin",
      query: {
        redirect: `${router.pathname}`,
      },
    });
  };

  const signup = () => {
    router.push({
      pathname: "signup",
      query: {
        redirect: `${router.pathname}`,
      },
    });
  };
  return (
    <div className="flex px-20 py-4 justify-between items-center">
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
      {user_profile ? (
        <div>
          <img
            src={user_profile.profile_pic}
            className="rounded-full w-10 h-10 object-cover"
            alt="Profile Image"
          />
        </div>
      ) : (
        <div className="flex items-center gap-6">
          <div onClick={signin} className="text-base cursor-pointer">
            Sign in
          </div>
          <div onClick={signup} className="text-base cursor-pointer">
            Sign up
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
