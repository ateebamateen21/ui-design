import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import bar from "../../assets/img/bar.png";
import "../../assets/css/style.scss";

const Footer = () => {
    return (
        <>
        <div  className='img-fluid footerBg ' >

            <Container className="text-light text-center p-3">
                <Row>
                    <Col>
                        <h4>DroidBot</h4>
                        <p>Contact us</p>
                    </Col>
                </Row>
                <Row className='p-2'>
                    <Col>
                        <img src={bar} alt="" />
                        <br />
                        <p>@all rights reserved</p>
                    </Col>

                </Row>
            </Container>
        </div>
        </>
    )
}

export default Footer;