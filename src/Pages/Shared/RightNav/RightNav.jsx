import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithubAlt, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3 className='mt-4'>Login with</h3>
            <Button variant="outline-primary" className='mb-2'><FaGoogle/>Login With Google</Button>
            <Button variant="outline-secondary" className='mb-2'><FaGithubAlt/> Login With Github</Button>
            <div className='mt-3'>
                <h3>Find us on</h3>
                <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter> Twitter </ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram> Instagram </ListGroup.Item>
    </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;