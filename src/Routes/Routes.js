import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Home from "../Pages/Home/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignOut from "../Pages/SignOut/SignOut";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact_us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signout',
                element: <SignOut></SignOut>
            },
        ]
    }
]);