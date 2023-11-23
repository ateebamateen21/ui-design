import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import advantageBowl from '../../assets/img/advantageBowl.png';
import "../../assets/css/style.scss";

const Advantage = () => {
  
  return (
    <>
    <Container  fluid className='advantageBg'>
        <Row className='p-md-3'>
            <Col className='text-center'>
            <img src={advantageBowl} alt="benefits of droidbot" className="img-fluid mx-auto " />
            </Col>
        </Row>
    </Container>
    </>
  )
}

export default Advantage;