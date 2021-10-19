import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
    const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />;
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
    const logOutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
    const logInIcon = <FontAwesomeIcon icon={faSignInAlt} />;

    return (
        <div>
            <div className="bg-light-skyblue text-dark d-flex justify-content-between p-0 m-0 upper-nav">
                <div className="half-width">
                    <Navbar.Text className="fs-5 ms-5 me-2 my-0 p-0">Follow Us</Navbar.Text>
                    <a href="https://www.facebook.com/hosseniftakher/" className="text-dark fs-5 mx-1">{facebookIcon}</a>
                    <a href="https://www.instagram.com/hossen_iftakher/" className="text-dark fs-5 mx-1">{instagramIcon}</a>
                    <a href="https://www.linkedin.com/in/iftakher-hossen/" className="text-dark fs-5 mx-1">{linkedInIcon}</a>
                    <a href="https://twitter.com/iftakher_hossen" className="text-dark fs-5 mx-1">{twitterIcon}</a>
                    <a href="mailto:info@aayat-ambulance.bd" className="text-dark fs-5 mx-1">{mailIcon}</a>
                    <a href="tel:+8801644985364" className="text-dark fs-5 ms-1">{phoneIcon}</a>
                </div>
                <Navbar.Text className="fs-5 me-5 p-0 half-width">
                    <Link to="/login" className="text-dark text-decoration-none">Hello <span className="fw-bold text-primary">{user?.displayName}</span> {userIcon}</Link>
                </Navbar.Text>
            </div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="site-info">
                        <img
                            src="https://i.ibb.co/jZvkrTM/logo.png"
                            width="100"
                            height="50"
                            className="d-inline-block align-top m-0"
                            alt="Logo"
                        />
                        <h2 className="d-inline-block ms-3 fw-bold mt-1">Aayat</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-5 me-3">
                            <Nav.Link as={HashLink} to="/home" className="link-hover">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="link-hover">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about-us" className="link-hover">About Us</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#gallery" className="link-hover">Gallery</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className="link-hover">Contact</Nav.Link>
                        </Nav>
                        {user.email ?
                            <Link to="/home"><Button onClick={logOut} variant="light" className="my-1 fs-5">{logOutIcon} Logout</Button></Link> :
                            <Link to="/login"><Button variant="light" className="my-1 fs-5">{logInIcon} Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;