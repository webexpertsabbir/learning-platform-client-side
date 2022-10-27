import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

const [courses, setCourses] = useState([]);
// console.log(courses)

useEffect(() => {

    fetch('https://mark-server-side-webexpertsabbir.vercel.app/course')
    .then(res => res.json())
    .then(data => setCourses(data))

}, [])
    return (
        <div className='py-4 p-3 border rounded'>
            {
                courses.map(course => <p key={course.id}>
  
                <Link to={`/course/${course.id}`} className="text-decoration-none fw-semibold"> {course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideBar;