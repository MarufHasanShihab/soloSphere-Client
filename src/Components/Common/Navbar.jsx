import { Link } from "react-router-dom";
import logo from "../../assets/nav_logo.png"


const Navbar = () => {
    return (
        <div className="w-full flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2 text-[20px] font-semibold"><img src={logo} alt="" className="w-8" />SoloSphere</Link>
            <ul className="flex items-center gap-6 text-[20px]">
                <Link>Home</Link>
                <Link>Login</Link>
            </ul>
        </div>
    );
};

export default Navbar;