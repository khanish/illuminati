import React from 'react';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function AboutWealth() {
    return (
        <React-Fractor>
            <Helmet>
                <title>
                    about waelth
                </title>
            </Helmet>
            <section className="aboutpurpose">
                <h1 className="aboutpurpose-title">
                    It is no coincidence that all world leaders possess vast networks of wealth.
                </h1>
                <p className="aboutpurpose-del">
                    There are no poor kings or queens or presidents. Even pontiffs are richer than most on this planet. The absence of a need for money removes many of its threats: someone with wealth is costlier to bribe than someone without, and this financial clarity is needed to effectively manage your planet.
                </p>
                <h1 className="aboutpurpose-title">
                    Money means nothing to those who print it.
                </h1>
                <p className="aboutpurpose-del">
                    The Illuminati’s financial foundation is built upon liquid assets and various holdings across the planet, with income derived from multiple other sources. The societal replacement of physical currency with numerical-based finances — digital banking where money is viewed as a number instead of paper or stones — has made unlimited funding available with merely a keyboard. A number of our operations carry no costs due to our unique relationship with agencies and influential business executives, further reducing our need for financial resources.
                </p>
                <h1 className="aboutpurpose-title">
                    Where true effort is made, true wealth is given.
                </h1>
                <p className="aboutpurpose-del">
                    A person who is unwise with a little will do worse with a lot. Those who are entrusted with little and use it for good can be entrusted with more. Our organization assists every willing member with tools required for success and offers assistance to those who display their dedication to the betterment of humanity.
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

export default AboutWealth;