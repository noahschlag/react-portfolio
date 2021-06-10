import React from 'react';

import './Navbar.css'

function Navbar () {

    return (
        <section className="navbar">
        <a href="/" className="navbar-item">Home</a>
        <a href="/about" className="navbar-item">Contact</a>
        <a href="/portfolio" className="navbar-item">Portfolio</a>
        <a href="/Code Portfolio" className="navbar-item">Code portfolio</a>
        <a href="/Code Portfolio" className="navbar-item">About Me</a>
    </section>
    )

}

export default Navbar;