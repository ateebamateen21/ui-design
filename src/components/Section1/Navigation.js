import React from 'react'
import { Button, Col, Container, NavbarBrand, Row } from 'reactstrap'
import { FaUser } from 'react-icons/fa';
import "../../assets/css/style.scss";
const Navigation = () => {
  return (
    <>
      <Container  className='pt-3 pb-3 p-0'>
        <Row >
          <Col  >
          
            <NavbarBrand className=' text-light font-weight-bold font '>
              DroidBot
            </NavbarBrand>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Button className="rounded-pill bg-white text-dark truncate-text" >
              LOGIN
              <FaUser />
            </Button >
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Navigation;