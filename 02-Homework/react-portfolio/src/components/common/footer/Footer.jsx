import React from 'react';

import './Footer.css';

function Footer() {

    return (
        <section className="footer">
            <hr className="footer-seperator" />
            <section className="footer-social-media">
                <a href="/">Social</a>
            </section>
            <section className="footer-info">
                <section className="footer-info-left">
                    <section className="footer-info__name">
                        Created by Noah Schlag
        </section>
                    <section className="footer-info__">
                        
            <br />
            
        </section>
                </section>
                <section className="footer-info-center">
                    <section className="footer-info__email">
                        noahschlag12@gmail.com
        </section>
                    <section className="footer-info__terms">
                        Terms and Conditions
            <br />
            Copyright info
        </section>
                </section>
                <section className="footer-info-right">
                    <section className="footer-info__number">
                        651-784-2097
        </section>
                    <section className="footer-info__contact">
                        About Me
            <br />
                        Get in Contact with me
        </section>
                </section>
            </section>
            <hr className="footer-seperator" />
        </section>
    )

}

export default Footer;