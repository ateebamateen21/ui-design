import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import robot from '../../assets/img/robot.png';
import "../../assets/css/style.scss";


const MainSection = () => {
    return (
        <>
            <Container className=' pt-5 pb-5 p-0   '>
                <Row>
                    {/* Added margin and padding from top only for large screens to make text aligned with image. */}
                    <Col className='text-light mt-lg-5 pt-lg-5' xs="12" md="6">
                        <h4>Introducing <span className='text-primary'>DroidBot:</span>
                        <br />
                        Your Chatbot Revolution</h4>
                        <p className='text-justify'>
                            Meet DroidBot – your all-in-one chatbot solution. Revolutionize internal processes, empower employees, and engage customers like never before. Welcome to the future of business communication.
                        </p>
                        <Button className="rounded-pill bg-primary text-light text-truncate">CREATE YOUR CHATBOT</Button>
                    </Col >
                    <Col className=" " xs="12" md="6">
                        <img className="img-fluid" src={robot} alt="robot" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainSection