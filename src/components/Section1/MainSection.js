import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap'


const MainSection = () => {
    return (
        <>
            <Container className=' pt-5 pb-5  '>
                <Row>
                    <Col className='text-light mb-4' xs="12" md="6">
                        <h3>Creating you own Chatbot:</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat aliquam consectetur architecto praesentium ipsum qui culpa sunt optio, numquam recusandae. Click the button below for more details. 
                        </p>
                        <Button className="rounded-pill bg-primary text-light text-truncate">CREATE YOUR CHATBOT</Button>
                    </Col >
                    <Col className="mb-4" xs="12" md="6">
                        <img className=" img-fluid" src="https://droidbot-official.web.app/static/media/chatScreen.8138d0bf99bf889f4b15.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainSection