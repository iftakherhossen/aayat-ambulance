import { Button } from 'react-bootstrap';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import Register from '../Register/Register';

const Login = () => {
    const { signInUsingGoogle, user, logOut } = useAuth();

    return (
        <div className="text-center p-3">
            <div className="mb-3">
                <h3>Login | Register</h3>
                <h5>to get Services!</h5>
            </div>

            <div className="form mb-3">
                <Register></Register>
            </div>

            {user.email ? <Button variant="info" onClick={logOut} className="google-btn">Sign out from Google</Button> :
                <Button variant="info" onClick={signInUsingGoogle} className="google-btn">Sign in with Google</Button>}
        </div>
    );
};

export default Login;