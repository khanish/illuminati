import React from 'react';
import { NavLink } from 'react-router-dom';

function AboutAge() {
    return (
        <React-Fractor>
            <section className="aboutpurpose">
                <h1 className="aboutpurpose-title">
                    Your life's journey has led you to this moment.
                </h1>
                <p className="aboutpurpose-del">
                    Hope is in the distance. Terrors that have plagued humanity for millennia will soon be obsolete and forgotten. Every year is a thread in a rich and glorious tapestry that is approaching its completion. Your ancestors lived through the darkness of night, but your descendants will live in the new dawn of Abundance.
                </p>
                <h1 className="aboutpurpose-title">
                    The age of War is coming to an end. The age of Illuminatiam approaches.
                </h1>
                <p className="aboutpurpose-del">
                    We bring order to a world battled with chaos, lighting a candle for all who travel the path as the night reaches its darkest point. The Illuminatiam is a promise that even as you bear every hardship that slams against you like gusts of wind fighting to turn you around, each step forward brings you closer to the joy of Abundance.
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

export default AboutAge;