import { createBrowserRouter } from "react-router-dom";
import Main from "../layOut/Main";
import Home from "../pages/home/Home";
import LogIn from "../pages/User/LogIn";
import SignUp from "../pages/User/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },

    {
        path: '/login',
        element: <LogIn></LogIn>
    },

    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
]);


export default router;