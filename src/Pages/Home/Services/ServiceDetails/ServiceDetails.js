import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { serviceId } = useParams();

    return (
        <div className="py-2">
            <Container>
                <h3 className="py-5 my-4 text-center">ID: {serviceId}</h3>
                {/* Can't load local json data, thats why I can't add any contant here*/}
            </Container>
        </div>
    );
};

export default ServiceDetails;