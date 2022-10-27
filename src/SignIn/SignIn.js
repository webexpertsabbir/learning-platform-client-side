import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SignIn = () => {
    return (
        <div>
            <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <span className='ms-3'>or</span>
            <Form.Text className="text-danger">
                
            </Form.Text>
        </Form>
        <hr />
            <Button variant="outline-primary">
                <FaGoogle className='me-1'></FaGoogle>
                Google
            </Button>{' '}
            <Button variant="outline-primary">
                <FaGithub className='me-1'></FaGithub>
                Github
            </Button>{' '}

        </div>
    );
};

export default SignIn;