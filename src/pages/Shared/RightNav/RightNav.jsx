import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { BsGoogle, BsGithub, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Qzone from "../QZone/Qzone";
import Bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="">
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

      <Qzone> </Qzone>

      <div className="my-4 position-relative">
        <img className="w-100" src={Bg} alt="" />
        <div className="text-center mt-5 pt-5 text-white  px-3 position-absolute  top-0 left-0">
            <h2 className="fw-bold ">Create an Amazing Newspaper</h2>
            <p className="my-4">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <Button style={{backgroundColor:'#D72050'}} className="border-0 rounded-0 py-3 text-white">Learn More</Button>
        </div>  
      </div>

      
    </div>
  );
};

export default RightNav;
