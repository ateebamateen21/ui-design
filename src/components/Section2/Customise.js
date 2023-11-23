import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import albertImg from '../../assets/img/albertImg.png';
import brushIcon from '../../assets/img/brushIcon.png';
import "../../assets/css/style.scss";
const Customise = () => {
    // console.log("I am section 2")

    return (
        <>
            <div className='Sec2Bg'>

                <Container className=" container-fluid ">
                    <Row>
                        <Col className="col-12 col-sm-12  col-md-12 col-lg-6 p-2  ">
                            <img src={brushIcon} alt="Brush" />
                            <h4 className='pt-3'>Customise your own <span className='text-primary'>Chatbot</span> in Minutes</h4>
                            <p className='text-justify'>
                                At DroidBot, we believe in putting the power in your hands. Whether you prefer a DIY approach or want our guidance, you can create and customize your chatbot effortlessly. In just minutes, transform your communication and support systems to suit your unique needs. We're here to help you every step of the way.
                            </p>
                            <Button className='rounded-pill btn-outline-secondary text-secondary' color="bg-transparent"  >CREATE YOUR CHATBOT</Button>
                        </Col>
                        <Col className=" col-12 col-sm-12  col-md-12 col-lg-6 p-md-4 mt-lg-5 ">
                            <div className='d-flex align-content-center justify-content-center'>
                                <img src={albertImg} alt="Create your chatbot" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Customise;