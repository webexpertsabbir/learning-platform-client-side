import React from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

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
                    <Card.Title>{name}</Card.Title>

                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <small className="text-muted">{expartice}</small>
                    <small className="text-muted">{duration}</small>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;