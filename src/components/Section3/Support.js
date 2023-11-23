import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
import collage from '../../assets/img/collage.png';
import gear from '../../assets/img/gear.png';
import botchat from '../../assets/img/botchat.png';
import "../../assets/css/style.scss";
const Support = () => {
    // console.log("I am section 3")


    return (
        <>
            <div className='Sec3Bg'>

                <Container>
                    <Row className='p-2'>
                        <Col className="col-12 col-sm-12 p-md-4">
                            <h4 className='text-center'>Elevate Employee Support with DroidBot</h4>
                        </Col>

                    </Row>
                    <Row className='rounded-lg outline p-md-4 m-sm-3 ' style={{ backgroundColor: '#f2b456' }}>
                        <Col className="col-12 col-sm-12 col-md-12 col-lg-6  ">
                            <div className='m-sm-3 m-md-5'>

                                <img src={gear} alt="gear" className='img-fluid d-block ' />
                                <h4>Streamlined Internal Chatbot Services</h4>
                            </div>
                        </Col>
                        <Col className=" col-12 col-sm-12 col-md-12 col-lg-6 p-1">
                            <img className="img-fluid" src={collage} alt="Collage usage of bots" />
                        </Col>
                    </Row>


                    <Row className='p-md-4'>

                        <Col className='col-12 col-sm12 col-md-12 col-lg-6  mt-4 mb-4' >
                            <img src={botchat} alt="robot" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-sm12 col-md-12 col-lg-6 mt-4 mb-4'>
                            <p className='text-justify'>
                                Discover the power of PhDbot's comprehensive internal chatbot services designed to elevate employee support to new heights. Our team of experts is dedicated to crafting customized solutions that seamlessly integrate HR policy assistance, client support, process inquiries, and onboarding excellence. With PhDbot as your trusted ally, employees have a single, reliable resource for all company-related questions and support needs. Say goodbye to siloed communication and welcome an era of streamlined efficiency, allowing your team to focus on what truly matters—your company's growth and success.
                                </p>
                                <Button className='rounded-pill btn-outline-secondary text-secondary' color="bg-transparent"  >CREATE YOUR CHATBOT</Button>
                                </Col>
                        
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Support;