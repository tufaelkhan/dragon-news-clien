import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';


const Login = () => {
  const { signInUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const from = location?.state?.from?.pathname || '/category/0'

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        navigate(from, {replace: true})
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <Container className='mx-auto w-25'>
      <h2>Please Login!</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button><br />
        <Form.Text className="text-secondary" >
          Don't have an account?
          <Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success">

        </Form.Text>
        <Form.Text className="text-warning">

        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;