import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home/Home";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
import Course from "../../course/Course";
import Courses from "../../Courses/Courses";
import Main from "../../layout/Main";
import SignIn from "../../SignIn/SignIn";
import SignUp from "../../SignUp/SignUp";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course/:id',
                element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => fetch(`https://mark-server-side-webexpertsabbir.vercel.app/course/${params.id}`)

            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <SignUp></SignUp>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]

    }
])