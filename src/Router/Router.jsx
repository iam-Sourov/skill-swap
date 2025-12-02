import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root";
import Home from "../Pages/home/Home";
import Details from "../Pages/Details/Details";
import Profile from "../Pages/myProfile/Profile";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/signUp/SignUp";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ForgetPassword from "../Pages/forgetPassword/ForgetPassword";
import AllSkills from "../Pages/allSkills/AllSkills";
import MainSpinner from "../Components/spinner/MainSpinner";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        hydrateFallbackElement: <MainSpinner></MainSpinner>,
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
                element: <Details></Details>,
                loader: () => fetch('/skills.json'),
            },
            {
                path: '/allskills',
                element: <AllSkills></AllSkills>,
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