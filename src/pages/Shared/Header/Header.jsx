import React from "react";
import Logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
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

      <div className="d-flex bg-secondary bg-opacity-25 py-3 px-3">
        <Button className="rounded-0 me-2" variant="danger">
          Latest
        </Button>
        <Marquee className="font-bold  fw-semibold" speed={50} gradient={false}>
         Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>




    </Container>
  );
};

export default Header;
