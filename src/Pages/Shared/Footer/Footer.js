import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-5">
            <Container className="footer mb-0 p-4 d-flex justify-content-between">
                <div>
                    <img src="https://i.ibb.co/jZvkrTM/logo.png" alt="logo" />
                    <h3>Aayat Ambulance <br /> Service</h3>
                    <nav>
                        <Link to="/home" className="text-decoration-none me-1 text-dark">Home</Link>
                        <Link to="/home#services" className="text-decoration-none mx-1 text-dark">Services</Link>
                        <Link to="/home#about-us" className="text-decoration-none mx-1 text-dark">About Us</Link>
                        <Link to="/home#gallery" className="text-decoration-none ms-1 text-dark">Gallery</Link>
                        <Link to="/contact" className="text-decoration-none ms-1 text-dark">Contact</Link>
                    </nav>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-column">

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;