import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="services-container mt-5">
            {
                services.map(service => <Service
                    key={services.id}
                    service={service}
                ></Service>)
            }
        </div>
    );
};

export default Services;