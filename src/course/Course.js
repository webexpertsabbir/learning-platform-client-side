import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FaUser } from "react-icons/fa";
import { FaHourglassStart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Course = ({ cours }) => {
    const { name, id, img, category, expartice, duration} = cours;
    return (
        <Col lg="4" className='p-1'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Text className='text-uppercase'>
                        {category}
                    </Card.Text>
                    <Link to={`/course/${cours.id}`} className="text-decoration-none"><Card.Title>{name}</Card.Title></Link>

                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <small className="text-muted"><FaUser></FaUser> {expartice}</small>
                    <small className="text-muted"><FaHourglassStart></FaHourglassStart> {duration}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;