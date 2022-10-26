import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container className='my-5'>
                <Row>
                    <Col lg="3">
                      <SideBar></SideBar>
                    </Col>
                    <Col lg="9">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;