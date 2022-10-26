import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Course from '../course/Course';

const Courses = () => {

    const [course, setCourse] = useState([]);
    // console.log(course)

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourse(data));

    }, [])


    return (
        <div>
            <CardGroup>
                {
                    course.map(cours => <Course
                        key={cours.id}
                        cours={cours}
                    ></Course>)
                }
            </CardGroup>
        </div>
    );
};

export default Courses;