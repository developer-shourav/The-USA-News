import React from "react";
import Logo from "../../../assets/logo.png";
import moment from "moment";
import { Container } from "react-bootstrap";
const Header = () => { 
  


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
    </Container>
  );
};

export default Header;
