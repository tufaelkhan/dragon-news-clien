import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
      <Row>
        <Col lg={3}>
        <LeftNav></LeftNav>
        </Col>
        <Col lg={6}>
            <Outlet></Outlet>
        </Col>
        <Col lg={3}>
            <RightNav></RightNav>
        </Col>
      </Row>
    </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;