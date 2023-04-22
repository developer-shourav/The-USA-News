import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
                <Container>
                    <Row>

                        <Col sm={3}>
                          <LeftNav> </LeftNav>
                        </Col>

                        <Col sm={6}>
                          <h2>Main Container Coming</h2>
                        </Col>

                        <Col sm={3}>
                          <RightNav> </RightNav>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
};

export default Main;

