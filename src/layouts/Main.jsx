import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import RightNav from '../pages/Shared/RightNav/RightNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import LatestNewsMarque from '../pages/Shared/LatestNewsMarque/LatestNewsMarque';

const Main = () => {

    return (
        <div>
            <Header></Header>
             <Container> <LatestNewsMarque></LatestNewsMarque></Container>
            <NavigationBar> </NavigationBar>
                <Container>
                    <Row>

                        <Col sm={3}>
                          <LeftNav> </LeftNav>
                        </Col>

                        <Col sm={6}>
                          <Outlet> </Outlet>
                        </Col>

                        <Col sm={3}>
                          <RightNav> </RightNav>
                        </Col>

                    </Row>
            </Container>
            <Footer> </Footer>
        </div>
    );
};

export default Main;

