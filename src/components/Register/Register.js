import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register-form">
            <div>
                <h1>Please Register</h1>
                <form onSubmit="">
                    <input type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Your Password" id="" />
                    <br />
                    <input type="password" name="password" placeholder="Re-enter Password" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------or----------</div>
                <button className="btn-regular">Google Sign In</button>
            </div>
        </div>
    );
};

export default Register;