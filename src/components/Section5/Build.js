import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap';
import chatbotscreen from "../../assets/img/chatbotscreen.png";
import sec5bg from "../../assets/img/sec5bg.png";
const Build = () => {
    const bgColor = {
        backgroundColor: "#eefafe",
    }
    return (
        <>
            <div style={bgColor} className='p-2'>

                <Container className="container-sm container-md container-lg container-xl p-3">
                    <Row className='mt-4'>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6 '>
                            <h4>Try DroidBot Today -
                                <br />
                                <span className='text-primary'>Build Your Chatbot </span> For Free!</h4>
                            <p className='text-justify text-sm'>Ready to experience the transformative power of DroidBot? We invite you to take our chatbot for a spin with our 90-day free trial. No strings attached, no commitments required. Start building your customized chatbot now and witness the difference in your internal processes and customer interactions. Join the PhDbot community and embark on a journey of innovation and efficiency. Don't miss this opportunity to revolutionize your business - try DroidBot today</p>
                            <Button className='rounded-pill btn-outline-secondary text-secondary' color="bg-transparent"  >CREATE YOUR CHATBOT</Button>
                            <img src={sec5bg} alt=" bg image" className='img-fluid d-block' />
                        </Col>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <img src={chatbotscreen} alt="mobile bot" className='img-fluid d-block ' />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Build;