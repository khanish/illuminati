import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AboutSecreteSociety() {
    return (
        <React-Fractor>
            <Helmet>
                <title>
                    about secrete society
                </title>
                <meta name='description' content=" The Illuminati operates in defense of you and all humans, in all places, and of all generations. Our duty to this planet has spanned across centuries and survived even the most established government entities. But the cultivation of trillions of human lives is a daunting responsibility, and while the human would not exist today without our protection, many uninformed masses mistake our guidance for a restriction of liberty." />
            </Helmet>
            <section className="aboutpurpose">
                <h1 className="aboutpurpose-title">
                    Freedom is an idol of the human species.
                </h1>
                <p className="aboutpurpose-del">
                    The Illuminati operates in defense of you and all humans, in all places, and of all generations. Our duty to this planet has spanned across centuries and survived even the most established government entities. But the cultivation of trillions of human lives is a daunting responsibility, and while the human would not exist today without our protection, many uninformed masses mistake our guidance for a restriction of liberty.
                    <br /><br />
                    Every human desires to be free of oppression, free of hardship, free of poverty, free of hunger, free of rules and laws — but as you understand, the nature of your species leaves true freedom impossible.
                    <br/><br/>
                    Are you free to murder? Are you free to steal? Are others free to murder and steal from you? Or are there certain freedoms that must be given up for the benefit of all?
                </p>
                <h1 className="aboutpurpose-title">
                    For happiness, the human desires freedom; for prosperity, the human requires leadership.
                </h1>
                <p className="aboutpurpose-del">
                    This is the reason behind our anonymity. To continue functioning throughout societal changes and generational differences, the Illuminati must remain behind the curtain — an outsider, belonging to none and loyal to all.
                    <br /><br />
                    You may never understand how your life can be free while guided by our organization. You may never fully comprehend our purpose and why you are safest and happiest with us. Simply open your mind and release your apprehensions, and you will find the relief of truth.
                    <br/><br/>
                    We will never take your hand and pull you down the path like a slave to our whims. You must find and travel the road on your own. But your quality of life is our greatest concern, and the reason our symbols are placed in your society as a map for you to follow if you desire.
                </p>
                <div className="aboutpurpose-links margin-top">
                    <NavLink to={'/join-the-illuminati'} className='learn-more margin-right'>
                        Join The Illuminati
                    </NavLink>
                    <NavLink to={'/illuminati-symbols'} className='learn-more margin-left'>
                        Illuminati Symbols
                    </NavLink>
                </div>
            </section>
        </React-Fractor>
    )
}

export default AboutSecreteSociety