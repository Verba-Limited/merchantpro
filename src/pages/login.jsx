import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../assets/vendor/fonts/circular-std/style.css';
import '../assets/libs/css/style.css';
import '../assets/vendor/fonts/fontawesome/css/fontawesome-all.css';

import '../App.css';

import { Link } from "react-router-dom";

  export default function Login() {
    return (
        <div className="splash-container">
            <div className="card ">
                <div className="card-header text-center"><a href="../index.html">
                    <img className="logo-img" src="../assets/images/logo.png" alt="logo" /></a>
                    <span className="splash-description">Please enter your user information.</span>
                </div>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input className="form-control form-control-lg" id="username" type="text" placeholder="Username" autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <input className="form-control form-control-lg" id="password" type="password" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <label className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" /><span className="custom-control-label">Remember Me</span>
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                    </form>
                </div>
                <div className="card-footer bg-white p-0  ">
                    <div className="card-footer-item card-footer-item-bordered">
                        {/* <a href="/register" className="footer-link">Create An Account</a> */}
                        <Link to="/register" className="footer-link">Create An Account</Link>
                    </div>
                    <div className="card-footer-item card-footer-item-bordered">
                        {/* <a href="/forgot-password" className="footer-link">Forgot Password</a> */}
                        <a href="/dashboard" className="footer-link">Show Dashboard</a>
                        {/* <Link to="about">About Us</Link> */}
                    </div>
                </div>
            </div>
        </div>
    )
}