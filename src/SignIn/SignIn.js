import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignIn = () => {
    const { providerLogin, signIn } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
        })
        .catch(error => console.log(error))

    }

    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()

    const handelGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handelGitHubSignIn = () => {
        providerLogin(gitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
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

                <p>I have not a accout <Link to='/register'>Please Register</Link> </p>

                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
            <hr />
            <Button onClick={handelGoogleSignIn} variant="outline-primary">
                <FaGoogle className='me-1'></FaGoogle>
                Google
            </Button>
            <Button className='ms-2' onClick={handelGitHubSignIn} variant="outline-primary">
                <FaGithub className='me-1'></FaGithub>
                Github
            </Button>

        </div>
    );
};

export default SignIn;