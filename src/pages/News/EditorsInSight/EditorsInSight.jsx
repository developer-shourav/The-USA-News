import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import InSightImg1 from '../../../assets/editorsInsight1.png';
import InSightImg2 from '../../../assets/editorsInsight2.png';
import InSightImg3 from '../../../assets/editorsInsight3.png';
import {BsCalendar4} from 'react-icons/bs';
import moment from 'moment/moment';

const EditorsInSight = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <Card className='border-0'>
              <Card.Img variant="top" src={InSightImg1} />
              <Card.Body className='ps-0'>
                <Card.Title>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                <div className='d-flex align-items-center fw-semibold text-secondary '>
                  <BsCalendar4> </BsCalendar4>
                   <span className='ms-2'>{moment().format('ll')}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='border-0'>
              <Card.Img variant="top" src={InSightImg2} />
              <Card.Body>
                <Card.Title>35 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                <div className='d-flex align-items-center fw-semibold text-secondary '>
                  <BsCalendar4> </BsCalendar4>
                   <span className='ms-2'>{moment().format('ll')}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className='border-0 '>
              <Card.Img variant="top" src={InSightImg3} />
              <Card.Body className='ps-0'>
                <Card.Title> The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                <div className='d-flex align-items-center fw-semibold text-secondary '>
                  <BsCalendar4> </BsCalendar4>
                   <span className='ms-2'>{moment().format('ll')}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
};

export default EditorsInSight;

