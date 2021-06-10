import React from 'react';

import './Navbar.css'

function Navbar () {

    return (
        <section>
            <a href="/" className="navbar-item">Home</a>
            <br></br>
            <a href="/contact" className="navbar-item">Contact</a>
            <a href="/About Me" className="navbar-item">About Me</a>
            <a href="/Photography Portfolio" className="navbar-item">Photography Portfolio</a>
            <a href="/Code Portfolio" className="navbar-item">Code Portfolio</a>
        </section>
    )

}

export default Navbar;