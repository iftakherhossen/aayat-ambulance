import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import initializeAuthentication from '../../../Firebase/Firebase.initialize';

initializeAuthentication();

const Register = () => {
    const auth = getAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleName = event => {
        setName(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const toggleLogin = event => {
        setIsLogin(event.target.checked);
    }

    const handleRegistration = event => {
        event.preventDefault();
        console.log(email, password)

        if (password.length < 8) {
            setError('Password must be at least 8 Characters long!');
            return;
        }
        else {
            isLogin ? processLogin(email, password) : registerNewUser(email, password);
        }
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
                alert('Registration Completed Successfully!');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setError('');
                alert('Welcome to our Planet');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                alert('check your inbox')
            })
    }

    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => { })
        alert('Check your inbox')
    }

    return (
        <div>
            <form onSubmit={handleRegistration}>
                {!isLogin && <Form.Floating className="mb-4 w-100">
                    <Form.Control onBlur={handleName}
                        type="text"
                        placeholder="John Doe"
                        required
                    />
                    <label htmlFor="floatingInputCustom">Name</label>
                </Form.Floating>}
                <Form.Floating className="mb-4 w-100">
                    <Form.Control onBlur={handleEmail}
                        type="email"
                        placeholder="name@example.com"
                        required
                    />
                    <label htmlFor="floatingInputCustom">Email address</label>
                </Form.Floating>
                <Form.Floating className="w-100">
                    <Form.Control onBlur={handlePassword}
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <label htmlFor="floatingPasswordCustom">Password</label>
                </Form.Floating>
                <button className="text-danger border-0 bg-light mt-1" onClick={handleResetPassword}>Forget Password!</button>
                <div className="text-danger fw-bold">
                    <p>{error}</p>
                </div>
                <Form.Check
                    inline
                    label="Already Registered?"
                    name="toggleLogin"
                    type="checkbox"
                    id={`inline-checklist-1`}
                    onChange={toggleLogin}
                    className="mb-3"
                />
                <br />
                <Button type="submit" className="p-2 px-4 fw-bold">
                    {isLogin ? 'Login' : 'Register'}
                </Button>
            </form>
        </div>
    );
};

export default Register;