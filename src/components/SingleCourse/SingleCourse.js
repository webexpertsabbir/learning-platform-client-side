import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaHourglassStart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

const SingleCourse = () => {
    const course = useLoaderData()
    const {title, img, description, category, expartice, duration} = course;

    return (
        <div>
            <img className='img-fluid rounded w-100' src={img} alt="" />
            <br />
            <br />
            <div className='d-flex justify-content-between'>
                <div>
                    <small className='text-uppercase'><b>{category}</b></small>
                    <small className='text-uppercase ms-5'><b>{expartice}</b></small>
                </div>
                <div>
                    <small className='text-uppercase'><b><FaHourglassStart></FaHourglassStart> {duration}</b></small>
                </div>
            </div>
            <hr />
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
            <Button variant="link">
                <Link to='/courses'>Back to Courses</Link>
            </Button>
            <Button variant="info">Proceed to checkout</Button>
           
        </div>
    );
};

export default SingleCourse;