import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return (
        <div className="img-not-found">
            <img src="https://previews.123rf.com/images/monuttanit/monuttanit1804/monuttanit180400062/99334573-404-error-page-not-found-vector-plug-graphic-background.jpg" alt="404 Page" />

            <Link to="/home"><Button variant="info px-3 fs-5">Go Back</Button></Link>
        </div>
    );
};

export default NotFound;