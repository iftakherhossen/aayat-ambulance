import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

    return (
        <div className="mt-5 mb-0 pb-0">
            <Container className="footer">
                <div className="footer-child px-4 pt-4">
                    <div className="my-auto">
                        <img src="https://i.ibb.co/jZvkrTM/logo.png" alt="logo" className="mt-1" />
                        <Link to="/home" className="text-decoration-none text-dark"><h3 className="my-3">Aayat Ambulance Service</h3></Link>
                        <img src="https://web.programming-hero.com/static/media/app-download.439edada.png" alt="playstore-link" />
                    </div>
                    <div className="d-flex pt-3">
                        <div className="d-flex flex-column me-3">
                            <a href="/home#services" className="text-decoration-none fs-5">Home</a>
                            <a href="/home" className="text-decoration-none fs-5">Services</a>
                            <a href="/home#about-us" className="text-decoration-none fs-5">About Us</a>
                            <a href="/home#gallery" className="text-decoration-none fs-5">Gallery</a>
                            <a href="/contact" className="text-decoration-none fs-5">Contact</a>
                        </div>
                        <div className="d-flex flex-column">
                            <a href="/home#about-us" className="text-decoration-none fs-5">About us</a>
                            <a href="/home" className="text-decoration-none fs-5">Success</a>
                            <a href="/home" className="text-decoration-none fs-5">Refund policy</a>
                            <a href="/home" className="text-decoration-none fs-5">Terms and Conditions</a>
                            <a href="/home" className="text-decoration-none fs-5">Privacy Policy</a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="footer-sm-icon mt-2">
                            <a href="https://www.facebook.com/hosseniftakher/" className="text-dark fs-4">{facebookIcon}</a>
                            <a href="https://www.instagram.com/hossen_iftakher/" className="text-dark fs-4">{instagramIcon}</a>
                            <a href="https://www.linkedin.com/in/iftakher-hossen/" className="text-dark fs-4">{linkedInIcon}</a>
                            <a href="https://twitter.com/iftakher_hossen" className="text-dark fs-4">{twitterIcon}</a>
                            <a href="mailto:info@aayat-ambulance.bd" className="text-dark fs-4">{mailIcon}</a>
                            <a href="tel:+8801644985364" className="text-dark fs-4">{phoneIcon}</a>
                        </div>
                    </div>
                </div>

                <p className="my-0 pb-1 text-center">© Aayat Ambulance Service 2021, a Programming Hero initiative.</p>
            </Container>
        </div>
    );
};

export default Footer;