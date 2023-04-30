import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";

const Register = () => {

  const {createEmailPassUser} = useContext(AuthContext);
  const navigate = useNavigate() ;


  const handleRegister = (event) => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     const photo = form.photo.value;
     const chake = form.chake.value;
     
     /* console.log({name}, {email}, {password}, {photo}, {chake}); */

     createEmailPassUser(email, password)
     .then( result => {
      const createdUser = result.user;
      console.log(createdUser)
      addUserNameAndImage(result.user, name, photo)
     })
     
     .catch( error => {
      console.log(error.massage);
     })
  }

  const addUserNameAndImage = (user, userName, imageUrl) => {
    updateProfile(user, {displayName: userName, photoURL:imageUrl})
    .then( () => {
      console.log('User update successful');
      navigate('/category/0')
    })
    .catch( error => {
      console.log(error);
    })
  }
    return (
        <Container className="w-25 mx-auto">
        <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Photo URL" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name='chake' label="Accept Terms and Conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
          
           Already Have an Account? <Link to='/login'>Login</Link>
        </Form.Text>
        <Form.Text className="text-success">
            
        </Form.Text>

        <Form.Text className="text-danger">
           
        </Form.Text>

      </Form>
    </Container>
    );
};

export default Register;