import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    },
])


export default router