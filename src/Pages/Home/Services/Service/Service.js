import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { title, img, description } = service;
    console.log(title)

    return (
        <div className="service-card">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                            <Button variant="info" className="fw-bold px-3">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
};

export default Service;