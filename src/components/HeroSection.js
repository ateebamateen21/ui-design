import React from 'react'
//Gonna use reactstrap here
import { Container } from 'reactstrap';
import Navigation from './Navigation';
import MainSection from './MainSection';

export const HeroSection = () => {

    const Styling = {
        backgroundImage: 'url("https://droidbot-official.web.app/static/media/hero-background.f96dfe576230a9ebefca.png")',
    }
    return (
        <>
            <Container className='' fluid style={Styling}>
                <Navigation />
                <MainSection />
            </Container>
        </>
    )
}
