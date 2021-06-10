import React from 'react';
import { Navbar } from '../../common';

import './Header.css';

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top-logo">
                    <a href="/" className="header-logo">logo</a> 
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom_phone-number">
                    651-784-2097
                </section>
                <section className="header-bottom_email">
                    noahschlag12@gmail.com

                </section>

            </section>
        </section>
    )
}

export default Header;
