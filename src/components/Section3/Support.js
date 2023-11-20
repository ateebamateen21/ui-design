import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap';

const Support = () => {
    // console.log("I am section 3")

    const div3color = {
        backgroundColor: "#fef7ee",
       }
   
    return (
        <>
            <div style={div3color}>

                <Container>
                    <Row className='p-2'>
                        <Col className="col-12 col-sm-12 p-5">
                            <h3 className='text-center'>Elevate Employee Support with DroidBot</h3>
                        </Col>

                    </Row>
                    <Row className='rounded-lg outline p-4' style={{ backgroundColor: '#f2b456' }}>
                        <Col className="col-12 col-sm-12 col-md-12 col-lg-6  ">
                            <div className='m-5'>

                                <img src="data:image/png;base64,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" alt="" className='img-fluid d-block  ' />
                                <h4>Streamlined Internal Chatbot Services</h4>
                            </div>
                        </Col>
                        <Col className=" col-12 col-sm-12 col-md-12 col-lg-6 p-0">
                            <img className="img-fluid" src="https://droidbot-official.web.app/static/media/maskRight.fc5a1ac99b216e05a47f.png" alt="Collage usage of bots" />
                        </Col>
                    </Row>


                    <Row className='p-4'>

                        <Col className='col-12 col-sm12 col-md-12 col-lg-6  mt-4 mb-4' >
                            <img src="https://droidbot-official.web.app/static/media/discoverFrame.0e10e04be746520bb60f.png" alt="robot" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-sm12 col-md-12 col-lg-6 mt-4 mb-4'>
                            <p>
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