import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Advantage = () => {
    const bgImage={
        backgroundImage: "url(https://droidbot-official.web.app/static/media/advantageRectangle.f6259d8691e918105c57.png)"
    }
  return (
    <>
    <Container  fluid style={bgImage}>
        <Row className='p-3'>
            <Col className='text-center'>
            <img src="https://droidbot-official.web.app/static/media/advantageBowl.1bd10dbccebb9f8cbf3e.png" alt="benefits of droidbot" className="img-fluid mx-auto " />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Advantage;