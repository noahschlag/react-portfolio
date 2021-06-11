import React from 'react';

import './CodePortfolio.css';

function CodePortfolio() {

    return (
        <section className="code-portfolio">
            <section>
                <section className="project-1">
                    <a href="https://markkimeyer.github.io/RechargeCarApp/">Recharge</a>
                </section>
                    <section className="project-1_description">
                        The app allows you to put in your location, and figure out where the closest electric car charger
                        is near you. In some areas of the world, electric car chargers can be very difficult to find.
                        Even in the United States! This app allows you to plan out road trips more effectively if you're
                        driving an electric vehicle
                    </section>
            </section>
            <section>
                <section className="project-2">
                    <a href="https://park-finder-stp.herokuapp.com/">Park Finder</a>
                </section>
                    <section className="project-2_description">
                        Were you ever looking for something specific at a park? For example, a basketball court, but you haven't been able to find one? Park finder not only helps you find parks near you, but it also tells you what kind of amenities the specific park offered. All you have to do is create an account. log in and than get to work by setting search parameters in place
                    </section>
            </section>
                <section className="project-3">
                    <a href="https://news-app-5.herokuapp.com">WWW News</a>
                </section>
                    <section className="project-3_description">
                        Our thought process behind this app was to help people find articles from all different types of news sites. We wanted to create a completely bias free site. One that had all thoughts and opinions on it, and one where when you went on it; you knew you were getting the full story on something. It's fairly simple to use, you can search by the categorieson the sidebar, you can search for something specific using the search bar and finally you can sort every category or specific search by using the date selector in the top of the navBar
                    </section>
            </section>

                
    )

}

export default CodePortfolio;