import React from 'react';
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    return (
        <div>
            <h2 className="text-center mb-4">Testimonials</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50 bg-gradient"
                        src="https://i.ibb.co/dWZVj0Y/photo-1600456899121-68eda5705257-ixlib-rb-1-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <img src="https://i.ibb.co/yfL6Py6/unnamed.jpg" alt="user profile" className="mb-3 user-profile" />
                        <h3>Iftakher Hossen</h3>
                        <h5>I was amaze at the speed at which the ambulance came!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/dWZVj0Y/photo-1600456899121-68eda5705257-ixlib-rb-1-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <img src="https://i.ibb.co/vBDCqxc/IMG-20210526-203457-615.jpg" alt="user profile" className="mb-3 user-profile" />
                        <h3>Mehrima Sara</h3>
                        <h5>Awesome service, I'm so glad!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-50"
                        src="https://i.ibb.co/dWZVj0Y/photo-1600456899121-68eda5705257-ixlib-rb-1-2.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className="text-dark">
                        <img src="https://i.ibb.co/x85b6ck/smart.jpg" alt="user profile" className="mb-3 user-profile" />
                        <h3>Shafi Alam</h3>
                        <h5>Response was fast and professional!</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Testimonial;