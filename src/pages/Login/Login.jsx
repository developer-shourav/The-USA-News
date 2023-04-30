import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

  const {signInUserWithEmail} = useContext(AuthContext);

  const handleEmailPassSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUserWithEmail(email, password)
    .then( result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
    })
    .catch( error =>{
      console.log( error)
    })
  }

  return (
    <Container className="w-25 mx-auto">
        <h3>Please Login</h3>
      <Form onSubmit={handleEmailPassSignIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          
           Don't Have an Account? <Link to='/register'>Register</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>

        <Form.Text className="text-danger">
           
        </Form.Text>

      </Form>
    </Container>
  );
};

export default Login;
