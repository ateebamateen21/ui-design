import React from 'react'
import usingbot from "../../assets/img/usingbot.png";
import { Button, Col, Container, Row } from 'reactstrap';

const Working = () => {
    const WorkingColor = {
        backgroundColor: "#fbdef6",
    }

    return (
        <>
            <div style={WorkingColor} >

                <Container className="container-sm container-md container-lg  p-4 ">
                    <h4 className='text-center'>How DroidBot works?</h4>
                    <Row className='m-lg-4'>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6 mt-2 mb-2 text-center '>
                            <img src={usingbot} alt="using the bot" className='img-fluid' />
                        </Col>
                        <Col className='col-12 col-sm-12 col-md-12 col-lg-6'>
                            <p className='text-justify'>
                                DroidBot simplifies the process of creating and deploying your customized chatbot. With a user-friendly interface and intuitive tools, you can have your chatbot up and running in just a few simple steps. Begin by selecting your chatbot's purpose – whether it's for internal support or external customer engagement. Then, customize it to match your brand and preferences. DroidBot integrates seamlessly with your existing systems, ensuring a smooth transition. Finally, launch your chatbot and watch as it enhances your communication and support capabilities. It's that easy!
                                <br />
                                <br />
                                If you have questions or require assistance in setting up your chatbot, our dedicated support team is here to help. Feel free to reach out to us anytime by clicking below or emailing us at info@PhDbot.co. We're committed to ensuring your success with DroidBot, and we're just a message away. Don't hesitate to contact us for guidance and support on your journey to enhanced communication and support.
                            </p>
                            <Button className='rounded-pill btn-outline-secondary text-secondary' color="bg-transparent" >CREATE YOUR CHATBOT</Button>
                        </Col>
                    </Row>

                </Container>
            </div>
        </>
    )
}

export default Working