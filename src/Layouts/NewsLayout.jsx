import React from 'react';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
      <Row>
        <Col lg={9}>
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

export default NewsLayout;