import React from 'react'
//Gonna use reactstrap here
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import MainSection from './MainSection';
import "../../assets/css/style.scss";

 const HeroSection = () => {


    return (
        <>
            <Container fluid className='heroBg' >
                {/* css applied in sass file */}

                <Navigation />
                <MainSection />
            </Container>
        </>
    )
}

export default HeroSection;
