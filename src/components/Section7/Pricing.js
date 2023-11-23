import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from 'reactstrap';
import "../../assets/css/style.scss";

const cardsData = [
  {
    title: 'Basic',
    description: '10,000 message credits/month',
    details: ['Best for small businesses and small uses'],
    price: '$30/Month',
    buttonLabel: 'JOIN NOW',
  },
  {
    title: 'Standard',
    description: '10,000 message credits/month',
    details: ['Best for small businesses and small uses'],
    price: '$60/Month',
    buttonLabel: 'JOIN NOW',
  },
  {
    title: 'Premium',
    description: '10,000 message credits/month',
    details: ['Best for small businesses and small uses'],
    price: '$150/Month',
    buttonLabel: 'JOIN NOW',
  },
  {
    title: 'Pay as you go',
    description: '10,000 message credits/month',
    details: [
      'Unlimited message credits',
      'Advanced chatbot functionality, including AI-driven features.',
      'Full customization and branding options.',
      'Comprehensive analytics and reporting with actionable insights.',
      'Extensive integration options with various third-party services.',
      'Dedicated account manager for personalized support.',
      'Access to ChatGPT 3.5 Turbo',
      'Customize and scale chatbot usage as needed',
      'Variable pricing based on usage',
    ],
    price: '', // You can leave it empty or provide a custom label
    buttonLabel: 'CONTACT US',
  },
];

const Pricing = () => {
  return (
    <>
      <Container>
        <h4 className='text-center m-4'>Pick the Perfect Plan:</h4>
        <Row>
          {cardsData.map((card, index) => (
            <Col key={index} className='col-12 col-sm-12 col-md-6 col-lg-3 text-center p-2'>
              <Card className='card'>
                <CardHeader className='bg-transparent'>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                </CardHeader>
                <CardBody>
                  <div className='text-left CardPoints'>
                    <ul>
                      {card.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  {card.price && <h5 className='pricingLabel'>{card.price}</h5>}
                  <Button className='rounded-pill btn-outline-secondary text-secondary bg-transparent  '>{card.buttonLabel}</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
