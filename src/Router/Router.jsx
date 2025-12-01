import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root.jsx";
import Home from "../Pages/Home.jsx";
import Details from "../Pages/Details.jsx";
import Profile from "../Pages/Profile.jsx";
import Login from "../Pages/Login.jsx";
import SignUp from "../Pages/SignUp.jsx";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout.jsx";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes.jsx";
import ForgetPassword from "../Pages/ForgetPassword.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
                loader: () => fetch('/skills.json'),
            },
            {
                path: '/profile',
                element: <PrivateRoutes>
                    <Profile></Profile>
                </PrivateRoutes>
            },
            {
                path: '/details/:id',
                element: <PrivateRoutes>
                    <Details></Details>
                </PrivateRoutes>,
                loader: () => fetch('/skills.json'),
            }
        ]
    },
    {
        path: '/auth',

        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/auth/forgetpassword',
                element: <ForgetPassword></ForgetPassword>
            },
        ]
    }

]);