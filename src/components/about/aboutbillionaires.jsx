import React from 'react';
import { NavLink } from 'react-router-dom';
import ApplicationForm from '../home/applicationform';

function AboutBillionaires() {
    return (
        <React-Fractor>
            <section className="aboutbillionaire">
                <section className="about-billi-title">
                    THE BILLIONAIRES GIVING PLEDGE
                </section>
                <h1 className="aboutpurpose-title">
                    "The Giving Pledge is a commitment by the world's wealthiest individuals and families to dedicate the majority of their wealth to philanthropy."
                </h1>
                <p className="aboutpurpose-del">
                    The Illuminati supports the positive efforts of this planet’s elite and the initiative of the Giving Pledge. Originally conceived by Bill and Melinda Gates and Warren Buffett, the Giving Pledge encourages those with much to consider the needs of those with less.
                    <br/><br/>
                    By taking the Giving Pledge, wealthy members of the human species promise to donate the majority of their monetary worth to charitable causes that support positive changes in the lives of those who need it.
                </p>
                <p className="about-symbols-mid__del--foot">
                    The Giving Pledge is intended for billionaires or those who would be billionaires if not for their donations to charity. The Illuminati is not directly affiliated with this charity and cannot accept donations of any kind.
                </p>
                <div className="aboutpurpose-links margin-top">
                    <NavLink to={'/join-the-illuminati'} className='learn-more margin-right'>
                        Join The Illuminati
                    </NavLink>
                    <a href='https://givingpledge.org/' className='learn-more margin-left' target="_blank">
                        List of Current Pledgers
                    </a>
                    <a href='https://givingpledge.org/' className='learn-more margin-right' target="_blank">
                        Take a Pledge
                    </a>
                </div>
                <div className="biliapplform">
                    <ApplicationForm />
                    <div class="notejoining">
                        <h4>The Illuminati is an elite organization of world leaders, business authorities, innovators, artists, and other influential members of this planet. To apply for membership, complete the form on this page.</h4>
                        <h5>All people, in all places, are eligible to apply for Illuminati membership. Initiates are required to take vows of loyalty for eternity.</h5>
                    </div>
                </div>
            </section>
        </React-Fractor>
    )
}

export default AboutBillionaires;