import React from 'react';
import { Container, Form, Button, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-between mt-5 mb-3">
                    <div>
                        <div className="my-1">
                            <h2>Our Office Address</h2>
                            <h5>Middle Paikpara, Mirpur-1, Dhaka-1216</h5>
                        </div>
                        <div className="my-1">
                            <h2>General Enquiries</h2>
                            <h5>info@aayat-ambulance.bd</h5>
                        </div>
                        <div className="my-1">
                            <h2>Call Us</h2>
                            <h5>+8801644985364</h5>
                        </div>
                        <div className="my-1">
                            <h2>Our Timing</h2>
                            <h5>24/7</h5>
                        </div>
                    </div>
                    <div>
                        <form>
                            <Form.Floating className="mb-3 w-100">
                                <Form.Control
                                    type="text"
                                    placeholder="John Doe"
                                    required
                                />
                                <label htmlFor="floatingInputCustom">Name</label>
                            </Form.Floating>
                            <Form.Floating className="mb-3 w-100">
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    required
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments" className="mb-3 w-100">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '150px' }}
                                />
                            </FloatingLabel>
                            <Button variant="info" type="submit" className="p-2 px-4 fw-bold">SEND</Button>
                        </form>
                    </div>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.835700167296!2d90.3596525536072!3d23.788864338240185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1089c485f%3A0x646b6cc49f14a469!2sMiddle%20Paikpara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634657432397!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" className="map mt-5" title="map"></iframe>
                </div>
            </Container>
        </div>
    );
};

export default Contact;