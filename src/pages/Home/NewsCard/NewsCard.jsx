import moment from "moment/moment";
import React from "react";
import {  Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsBookmark, BsShare} from "react-icons/bs";

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
        <Card.Header className="d-flex align-items-center">
          <Image style={{widows:'40px', height:'40px'}} src={author?.img} roundedCircle /> 
          <div className="ps-2 flex-grow-1">
            <p className="mb-0">{author?.name}</p>
            <p><small>{moment(author?.published_date).format('YYYY-MM-D')}</small></p>
          </div>
          <div>
            <BsBookmark className="me-2"/>
            <BsShare className="ms-1" />
          </div>
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
