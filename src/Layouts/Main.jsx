import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw]">
            <Navbar/>
            <Outlet/>
            <ToastContainer />
        </div>
    );
};

export default Main;