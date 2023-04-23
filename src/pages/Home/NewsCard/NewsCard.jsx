import React from "react";
import {  Card } from "react-bootstrap";

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
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} /> 
          <Card.Text>
            {details}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
  );
};

export default NewsCard;
