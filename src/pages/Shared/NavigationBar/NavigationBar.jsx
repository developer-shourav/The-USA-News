import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {FaUserCircle} from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProviders';


const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then( () => {
            console.log("logout Successfully");
        })
        .catch( error => {
            console.log(error);
        })
    }
    return (
        <Container>
           
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    
                    <Link to='/category/0' className="text-decoration-none text-secondary">Home</Link>
                    <Link to="/about" className="text-decoration-none text-secondary mx-3">About</Link>
                    <Link to="/career" className="text-decoration-none text-secondary">Career</Link>
                </Nav>
                <Nav className="d-flex align-items-center">
                    {
                    user && <> <img className='rounded-circle' src={user?.photoURL} alt="" /> {user?.displayName}</>

                    }

                    
                    { user ? <Button onClick={handleLogOut} variant="secondary rounded-0"> Logout</Button> : <Link to='/login'><Button variant="secondary rounded-0"> Login</Button></Link>}
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar> 
        </Container>
    );
};

export default NavigationBar;