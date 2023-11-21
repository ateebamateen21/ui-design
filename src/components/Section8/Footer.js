import React from 'react'
import { Col, Container, Row } from 'reactstrap';
import bar from "../../assets/img/bar.png";
import footerImg from "../../assets/img/footerImg.png";

const Footer = () => {
    const footerBg = {
        backgroundImage: "url(https://droidbot-official.web.app/static/media/Footer-bg.23f51829408025366c5d.png)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',

    }
    return (
        <>
        <div style = {footerBg} className='img-fluid' >

            <Container className="text-light text-center p-3">
                <Row>
                    <Col>
                        <h1>DroidBot</h1>
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