import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import Course from "../../course/Course";
import Courses from "../../Courses/Courses";
import Main from "../../layout/Main";


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
            element: <Course></Course>
            
           },
           {
            path: '/courses',
            element: <Courses></Courses>
           }
        ]
    }
])