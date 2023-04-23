import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import InSightImg1 from '../../../assets/editorsInsight1.png';
import InSightImg2 from '../../../assets/editorsInsight2.png';
import InSightImg3 from '../../../assets/editorsInsight3.png';

const EditorsInSight = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className=''>
              <Card.Img variant="top" src={InSightImg1} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className=''>
              <Card.Img variant="top" src={InSightImg2} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className=''>
              <Card.Img variant="top" src={InSightImg3} />
              <Card.Body>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInSight;