import React from 'react';
import {  Link  } from 'react-router-dom';

import './Navbar.css'

function Navbar () {

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/Contact" className="navbar-item">Contact</Link>
            <Link to="/Portfolio" className="navbar-item">Portfolio</Link>
            <Link to="/Code-Portfolio" className="navbar-item">Code portfolio</Link>
            <Link to="/About-Me" className="navbar-item">About Me</Link>
    </section>

    )

}

export default Navbar;