import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
       <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><img src="https://websitedemos.net/online-coding-course-02/wp-content/uploads/sites/713/2020/10/online-programming-course-logo-light.svg" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav className='py-3'>
                        
                        <Link to='/' className='text-light text-decoration-none'>Home</Link>
                        <Link to='/courses' className='text-light text-decoration-none ps-3'>Course</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       </div>
    );
};

export default Header;