import React from "react";
import {  Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    image_url,
    details,
  } = news;
  return (
      <Card className=" mb-4">
        <Card.Header>
          <Image src={author?.img} roundedCircle /> 
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} /> 
          <Card.Text>
            {details.length < 250 ? <>{details}</> : <> {details.slice(0, 250)} ... <Link to ={`/news/${_id}`} >Read More</Link> </>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
  );
};

export default NewsCard;
