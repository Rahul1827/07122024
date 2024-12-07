import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

export default function Header() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Check admin login status when the component mounts
    useEffect(() => {
        const adminLoggedIn = localStorage.getItem('adminLoggedIn');
        if (adminLoggedIn === 'true') {
            setIsAdminLoggedIn(true);
        }
    }, []);

    // Handle admin logout
    const handleAdminLogout = () => {
        // Remove admin login status from localStorage
        localStorage.removeItem('adminLoggedIn');
        setIsAdminLoggedIn(false);
        navigate('/'); // Optionally, redirect to homepage after logout
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/cropdetails" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crop
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/">Cotton</Link></li>
                                    <li><Link className="dropdown-item" to="/">Soyabean</Link></li>
                                    <li><Link className="dropdown-item" to="/">Banana</Link></li>
                                    <li><Link className="dropdown-item" to="/">Gram</Link></li>
                                    <li><Link className="dropdown-item" to="/">Wheat</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/signinDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign-Up
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/farmerLogin">User Login</Link></li>
                                    <li><Link className="dropdown-item" to="/adminLogin">Admin Login</Link></li>
                                </ul>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li> */}

                               {/* <li className="nav-item dropdown">    
                                <Link className="nav-link dropdown-toggle" to="/service" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/nutritionRecommendation">Nutrition Recommendation</Link></li>
                                    <li><Link className="dropdown-item" to="/bookFieldVisit">Book Field Visit</Link></li>
                                </ul>
                            </li> */}

                                  <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contactus">Contact</Link>
                            </li>

                            {/* Show Admin Logged In link if logged in */}
                            {isAdminLoggedIn && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/adminDashboard">Admin Logged In</Link>
                                </li>
                            )}
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Show Logout button if admin is logged in */}
            {isAdminLoggedIn && (
                <button onClick={handleAdminLogout} className="btn btn-outline-danger">Logout</button>
            )}
        </div>
    );
}


