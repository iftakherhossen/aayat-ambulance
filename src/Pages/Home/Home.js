import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs/AboutUs';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Container>
                <div id="home" className="mt-5 mb-4 text-center banner">
                    <div className="banner-txt">
                        <h2>Prompt and Efficient Ambulance & Airambulance Services</h2>
                        <Link to="#services"><Button variant="info" className="mt-3">Learn More</Button></Link>
                    </div>
                </div>

                <div id="services" className="my-3 text-center">
                    <h2>Services We Offer</h2>
                    <Services></Services>
                </div>

                <div id="about-us" className="pt-5 pb-3">
                    <AboutUs></AboutUs>
                </div>

                <div id="gallery" className="pt-5 pb-3">
                    <Gallery></Gallery>
                </div>
            </Container>
        </div>
    );
};

export default Home;