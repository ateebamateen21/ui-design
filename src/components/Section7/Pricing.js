import React from 'react'
import { Container, Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem, Button } from 'reactstrap';

const Pricing = () => {

    const cardStyle = {
        maxheight: "100%",
    }
    return (
        <>
            <Container>
                
                    <h4 className='text-center m-4'>Pick the Perfect Plan:</h4>
                
                <Row>
                    {/* 1st Card Here */}
                    <Col className="col-12  col-sm-12 col-md-6 col-lg-3 text-center">
                        <Card style={cardStyle}>
                            <CardHeader>
                                <h5>Basic</h5>
                                <p>10,000 message credits/month</p>
                            </CardHeader>
                            <CardBody >
                                <div className="text-left">

                                    <ul>
                                        <li >Best for small businesses and small uses</li>
                                    </ul>
                                </div>

                                <h5>30$ per Month</h5>
                                <Button className="rounded-pill btn-outline-secondary text-secondary bg-transparent ">JOIN NOW</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* 2nd Card here */}
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                        <Card style={cardStyle}>
                            <CardHeader>
                                <h5>Standard</h5>
                                <p>10,000 message credits/month</p>
                            </CardHeader>
                            <CardBody>
                                <div className="text-left">

                                    <ul>
                                        <li>Best for small businesses and small uses</li>
                                    </ul>
                                </div>

                                <h5>60$ per Month</h5>
                                <Button className="rounded-pill btn-outline-secondary text-secondary bg-transparent ">JOIN NOW</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* 3rd Card here */}
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                        <Card style={cardStyle}>
                            <CardHeader>
                                <h5>Premium</h5>
                                <p>10,000 message credits/month</p>
                            </CardHeader>
                            <CardBody>
                                <div className="text-left">

                                    <ul>
                                        <li>Best for small businesses and small uses</li>
                                    </ul>
                                </div>

                                <h5>150$ per Month</h5>
                                <Button className="rounded-pill btn-outline-secondary text-secondary bg-transparent ">JOIN NOW</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* 4th Card here */}
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-3 text-center">
                        <Card style={cardStyle}>
                            <CardHeader>
                                <h5>Pay as you go</h5>
                                <p>10,000 message credits/month</p>
                            </CardHeader>
                            <CardBody>
                                <div className="text-left">

                                <ul>
                                    <li>
                                        Unlimited message credits
                                    </li>
                                    <li>
                                        Advanced chatbot functionality, including AI-driven features.
                                    </li>
                                    <li>
                                        Full customization and branding options.
                                    </li>
                                    <li>
                                        Comprehensive analytics and reporting with actionable insights.
                                    </li>
                                    <li>
                                        Extensive integration options with various third-party services.
                                    </li>
                                    <li>
                                        Dedicated account manager for personalized support.
                                    </li>
                                    <li>
                                        Access to ChatGPT 3.5 Turbo
                                    </li>
                                    <li>
                                        Customize and scale chatbot usage as needed
                                    </li>
                                    <li>
                                        Variable pricing based on usage
                                    </li>
                                </ul>

                                </div>
                                {/* <h5>30$ per Month</h5> */}
                                <Button className="rounded-pill btn-outline-secondary text-secondary bg-transparent ">CONTACT US</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Pricing