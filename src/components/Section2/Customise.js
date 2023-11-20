import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const Customise = () => {
    // console.log("I am section 2")

    const customstyle = {
        backgroundColor: "#c3dbeb",
    }

   
    
    return (
        <>
            <div style={customstyle}>

                <Container className=" container-fluid ">
                    <Row>
                        <Col className="col-12 col-sm-12  col-md-12 col-lg-6 p-5 ">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAqCAYAAAAqAaJlAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGiSURBVHgB1ZjBTcNAEEUfcOKWI8ftAOjAdAAVxFRAOnCoAK6cXAIcuSUdBCqwqYAcuYVdeaMYlBjP2ppdnvRlrTySv2Z3RrOGtLmwykiczGphtfGqrAyJMbF6YGeyrQUJkVt9st/oxr+LjuHnlidr9o7ubLY1JxKGftlsF9iECFzTP5tb5SjTVeldKlHG0GzlJkAGRabItz1KURWEmdwWlQrufJaEG1Xbfmd0xTCjcxQYw2iFEiXDjKptf85wozOUqBhmtESJnOHn1KDE0KK6QAnDP2hTW2aEG31EmWfCjK4QcsxwQobi2uoGIWOYlVJbXfmniDHMfvSMW1vdW10SYHQsMrrPpptl54xwhzrqGec+5O5O5379brVklyHXJwuaNuZi32gy/uLj1Oi6LhckhDPzVwtSGz66yOnXL13Wo9zp21T0b/A5ChxqXTmyKUgSG8whs1NkqByDfWYN8r/NaxTYZ1aaVceSCBjk15OKSJTIR72MCBTIM5qhjPRX5GiDiZQTqzOrU7/+8uvf1DRF9GR1a/XqY1U5NHVN2GWuJhG+AQGloSZoruR5AAAAAElFTkSuQmCC" alt="Brush" />
                            <h5 className='pt-3'>Customise your own <span className='text-primary'>Chatbot</span> in Minutes</h5>
                            <p>
                                At DroidBot, we believe in putting the power in your hands. Whether you prefer a DIY approach or want our guidance, you can create and customize your chatbot effortlessly. In just minutes, transform your communication and support systems to suit your unique needs. We're here to help you every step of the way.
                            </p>
                            <Button className='rounded-pill btn-outline-secondary text-secondary' color="bg-transparent"  >CREATE YOUR CHATBOT</Button>
                        </Col>
                        <Col className=" col-12 col-sm-12  col-md-12 col-lg-6 p-5 mt-lg-5 ">
                            <div className='d-flex align-content-center justify-content-center'>
                                <img src="https://droidbot-official.web.app/static/media/customizeImage.25c905d896444cfb9379.png" alt="Create your chatbot" className='img-fluid' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Customise;