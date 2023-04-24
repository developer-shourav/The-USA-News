import React, { useContext } from "react";
import Logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import {FaUserCircle} from 'react-icons/fa';
const Header = () => { 
  
  const {user} = useContext(AuthContext);
  console.log(user);

  return (
    <Container className="mt-4">
      <div className="text-center ">
        <img className="img-fluid" src={Logo} alt="" />
        <p className="text-secondary">
          Journalism Without Fear or Favour<small></small>
        </p>
        <p>
          {moment().format("dddd")},{" "}
          <span className="text-secondary">
            {moment().format("MMMM D, YYYY")}
          </span>
        </p>
      </div>

      <div className="d-flex bg-secondary bg-opacity-25 py-3 px-3">
        <Button className="rounded-0 me-2" variant="danger">
          Latest
        </Button>
        <Marquee className="font-bold  fw-semibold" speed={50} gradient={false}>
         Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>


      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            
            <Nav.Link ><Link to='/' className="text-decoration-none text-secondary">Home</Link></Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            {
              user && <Nav.Link > 
              <FaUserCircle className="fs-2 text-black" /> {user?.displayName}
              </Nav.Link>
            }

            <Nav.Link eventKey={2} href="#memes">
              { user ? <Button variant="secondary rounded-0"> Logout</Button> : <Link to='/login'><Button variant="secondary rounded-0"> Login</Button></Link>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </Container>
  );
};

export default Header;
