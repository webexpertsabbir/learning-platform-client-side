import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {

const [courses, setCourses] = useState([]);
// console.log(courses)

useEffect(() => {

    fetch('http://localhost:5000/course')
    .then(res => res.json())
    .then(data => setCourses(data))

}, [])
    return (
        <div>
            {
                courses.map(course => <p key={course.id}>

                   <Link to={`/course/${course.id}`}> {course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default SideBar;