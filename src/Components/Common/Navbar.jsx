import { Link } from "react-router-dom";
import logo from "../../assets/nav_logo.png";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth();

  return (
    <div className="w-full flex items-center justify-between py-4">
      <Link
        to="/"
        className="flex items-center gap-2 text-[20px] font-semibold">
        <img src={logo} alt="" className="w-8" />
        SoloSphere
      </Link>
      <ul className="flex items-center gap-6 text-[20px]">
        <Link to="/">Home</Link>
        {user ? (
          <div className="relative group">
            {user?.photoURL && (
              <img
                referrerPolicy="no-referrer"
                src={user?.photoURL}
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            )}
            <div
              className={`absolute w-32 border px-4 py-2 right-[-5px] top-10 shadow-sm rounded-sm space-y-2 text-[18px] hidden group-hover:block`}>
              <p onClick={logOut} className="cursor-pointer">Logout</p>
            </div>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
