import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";


const Main = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw]">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;