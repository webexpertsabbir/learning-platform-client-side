import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home/Home";
import SingleCourse from "../../components/SingleCourse/SingleCourse";
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
            element: <SingleCourse></SingleCourse>,
            loader: ({params}) => fetch(`http://localhost:5000/course/${params.id}`)
            
           },
           {
            path: '/courses',
            element: <Courses></Courses>
           }
        ]
    }
])