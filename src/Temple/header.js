import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
function Header() {
    return (
        <div>
            <header id="header" className="fixed-top d-flex align-items-center">
                    <div className="container d-flex align-items-center">

                        <div className="logo me-auto">
                            {/* <a className='shiv'><img src="https://cdn.newsnationtv.com/resize/360_-/images/2021/03/10/mahashivratri-2021-38.jpg" alt="" className="img-fluid" /></a> */}
                            <h1 ><a href='index.html'> Rohkaleshwar Trust</a></h1>
                        </div>

                        <nav id="navbar" className="navbar">
                            <ul>
                                <li><NavLink className="nav-link scrollto active" to="/">Home</NavLink></li>
                                <li><NavLink className="nav-link scrollto" to="/about">About Us</NavLink></li>
                                <li><NavLink className="nav-link scrollto" to="/services">Services</NavLink></li>
                                <li><NavLink className="nav-link scrollto" to="/portfolio">Portfolio</NavLink></li>
                                <li><NavLink className="nav-link scrollto" to="/team">Team</NavLink></li>
                                <li><NavLink className="nav-link scrollto" to="/contact">Contact Us</NavLink></li>
                            </ul>
                            <i className="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
        </div>
    )
}

export default Header;
