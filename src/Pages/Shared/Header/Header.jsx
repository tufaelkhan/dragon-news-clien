import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className='text-center mt-4'>
            <img src={logo} alt="" />
            <p className='text-secondary'>Journalism without fear or favour</p>
            <p>{moment().format("dddd, MMMM D YYYY")}</p>
            </div>
            <div className='d-flex'>
            <Button variant="danger">latest</Button>
            <Marquee speed={100} className='text-danger'>
  I can be a React component, multiple React components, or just some text.
</Marquee>
            </div>
       
        </Container>
    );
};

export default Header;