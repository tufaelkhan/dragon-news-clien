import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Register = () => {
const {createUser} = useContext(AuthContext)
const [accepted, setAccepted] = useState(false)

const handleRegister = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    createUser(email, password)
    .then(result => {
      const createdUser = result.user
      console.log(createdUser);
    })
    .catch(error =>{
      console.log(error);
    })
}

const handleAccepted = (event) => {
  setAccepted(event.target.checked);
}
    return (
        <Container className='mx-auto w-25'>
            <h2>Please Register!</h2>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" name='name'  placeholder="your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicphoto">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='photo'  placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email'  placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={handleAccepted} type="checkbox" 
        name='accept' label={<>Accept <Link to='/terms'>terms and conditions</Link></>}/>
      </Form.Group>
      <Button disabled={!accepted} variant="primary" type="submit">
        Register
      </Button><br />
      <Form.Text className="text-secondary" >
        Already have an account?
         <Link to='/login'>Login</Link>
        </Form.Text>
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-warning">
         
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Register;