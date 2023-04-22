import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { BsGoogle, BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const RightNav = () => {
  return (
    <div>
      <h4 className="fw-semibold">Login With</h4>
      <Button className="w-100 mb-2" variant="outline-primary">
        {" "}
        <BsGoogle /> Login with Google
      </Button>
      <br />
      <Button className="w-100" variant="outline-dark">
        <BsGithub /> Login with Github
      </Button>

      <div className="mt-5"> 
        <h4 className="fw-semibold">Find Us On</h4>

        <ListGroup>
          <ListGroup.Item > <FaFacebookF/> Facebook </ListGroup.Item>
          <ListGroup.Item> <BsTwitter/> Twitter </ListGroup.Item>
          <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
