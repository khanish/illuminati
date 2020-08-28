import React from 'react';
import logo from '../../assests/images/logo2.png';
import ApplicationForm from '../home/applicationform';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';

let believes = [
    {
        title: 'THE PYRAMID', content: 'Money is not the root of all evil,money is the route to all freedom.The selfish pursuit of money is a hollow goal, but the pursuit of the goodness that money can create is one of humanity’s greatest responsibilities.', to: '/the-pyramid'
    },
    {
        title: 'THE EYE', content: 'Living humans evolve at a rapid pace and continue to advance in ability through study, practice, and self-improvement. The human species is guarded by a coalition of its most elite members called the Illuminati.', to: '/the-eye',
    },
    {
        title: 'THE LIGHT', content: 'Every human is guided by an inner compass that points toward the Light, revealing truth and direction amidst decisions. All human spiritual beliefs ultimately seek the Light in ways differing only in form and function.', to: '/the-light'
    },
];

function BelieveEternal() {

    return (
        <React-Fractor>
            <Helmet>
                <title>
                    illuminati circle
                </title>
                <meta name='description' content="Though you may not fully understand your purpose, your part is just as important as the greatest kings and queens of this planet. Some feel as though their temporary lack of wealth or influence makes them powerless to create change" />
            </Helmet>
            <section className="believe-eternal">
                <section className="believe-eternal__head">
                    <img src={logo} alt="illuminati-logo" className="believe-eternal__head--logo" />
                    <h1 className="believe-eternal__head--title">THE ETERNAL CIRCLE</h1>
                    <blockquote className="believe-eternal__head--title-sub">
                        Every human is one part of a larger, <br /> eternal design – individual gears in a <br /> clock that has no end.
               </blockquote>
                </section>
                <section className="believe-eternal__main">
                    <h3 className="aboutpurpose-title">
                        Your actions have the power to alter the future of the entire world.
                </h3>
                    <p className="aboutpurpose-del">
                        Though you may not fully understand your purpose, your part is just as important as the greatest kings and queens of this planet. Some feel as though their temporary lack of wealth or influence makes them powerless to create change. But does a clockmaker favor the larger gears over the smaller? Does the hour hand become jealous of the minutes because it turns slower? Every part has a role in the functioning of a timepiece. Every part supports those around it in ways it may never see. Your absence would undo the Order of our universe, even if you do not realize your importance.
                </p>
                    <h3 className="aboutpurpose-title">
                        The world began before you and will continue after you, but it will be different because of the decisions you made.
                </h3>
                    <p className="aboutpurpose-del">
                        Every generation inherits the world left by the one before it, just as a king inherits the crown of his father. Your pursuit of wisdom and goodness could lay the foundation for your great-great-grandchild’s rise into power – the same descendant who might steer a country from war and save lives by the millions. Did the ancestors of Aristotle or Alexander The Great know who their actions would create?
                </p>
                    <h3 className="aboutpurpose-title">
                        Though you will never understand the full influence of your actions, the results of your dedication to humanity are still yours to claim.
                </h3>
                    <p className="aboutpurpose-del">
                        As you climb the great Pyramid seeking the Light at its top, you will look down and see that you are an integral part of our universe’s most intricate mechanism. Though our human members may perish and fade into the annals of time, the Illuminati will continue to stand into eternity.
                </p>
                    <ApplicationForm />
                    <div className="believe-eternal__other-links">
                        <h3 className="related-topics">Related Topics</h3>
                        <div className="home-believes__ctn">
                            {
                                believes.map(
                                    believe =>
                                        <div className="home-believes__ctn-believe">
                                            <img src={logo} alt="logo" className="home-believes__ctn-believe-logo" />
                                            <h3 className="home-believes__ctn-believe-title header__secondary">{believe.title}</h3>
                                            <p className="home-believes__ctn-believe-detail">
                                                {believe.content}
                                            </p>
                                            <div className="home-believes__ctn-believe-more">
                                                <NavLink to={believe.to} className="learn-more">
                                                    Learn More
                                            </NavLink>
                                            </div>
                                        </div>
                                )
                            }
                        </div>
                    </div>

                </section>

            </section>
        </React-Fractor>
    )
}

export default BelieveEternal


