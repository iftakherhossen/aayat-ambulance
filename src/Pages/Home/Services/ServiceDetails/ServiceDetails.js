import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className="py-2">
            <Container>
                <h3 className="py-5 my-4 text-center">ID: {serviceId}</h3>
            </Container>
        </div>
    );
};

export default ServiceDetails;