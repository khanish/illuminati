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
        title: 'THE LIGHT', content: 'Every human is guided by an inner compass that points toward the Light, revealing truth and direction amidst decisions. All human spiritual beliefs ultimately seek the Light in ways differing only in form and function.', to: '/the-light'
    },
    {
        title: 'THE ETERNAL', content: 'Every human is one part of a larger, eternal design – individual gears in a clock that has no end. Though they may never realize it, a person’s actions have the power to alter the future of the entire world.', to: '/eternal-circle'
    },
];

function BelieveEye() {

    return (
        <React-Fractor>
            <Helmet>
                <title>
                    illuminati eye
                        </title>
                <meta name='description' content="Though you may not fully understand your purpose, your part is just as important as the greatest kings and queens of this planet. Some feel as though their temporary lack of wealth or influence makes them powerless to create change" />
            </Helmet>
            <section className="believe-eye">
                <section className="believe-eye__head">
                    <img src={logo} alt="illuminati-logo" className="believe-eye__head--logo" />
                    <h1 className="believe-eye__head--title">THE eye</h1>
                    <blockquote className="believe-eye__head--title-sub">
                        We Are Always Watching Out For You
               </blockquote>
                </section>
                <section className="believe-eye__main">
                    <h3 className="aboutpurpose-title">
                        The human species is guarded and preserved by a coalition of its most elite members called the Illuminati.
                </h3>
                    <p className="aboutpurpose-del">
                        Since our origination, Illuminati members have guided Earth’s most dominant creature through periods of interpersonal chaos, environmental outbreaks, and other mass attacks that threaten humanity with extinction.
                    <br /><br />
                    The human has made itself this planet’s most dominant and advanced species. Even the weakest human is born master of the strongest of all other species on Earth. Through natural selection, every human generation is made of a genetic structure that is stronger and more advanced than the previous.
                </p>
                    <h3 className="aboutpurpose-title">
                        Living humans evolve at a rapid pace, and can continue to advance in ability through study, practice, and a commitment to self-improvement.
                </h3>
                    <p className="aboutpurpose-del">
                        As a human absorbs knowledge and wisdom, some will experience their Awakening: a pivotal moment when their minds evolve to a level of understanding that is higher than the majority. They begin to see themselves as strings in a universal tapestry with a duty to uplift their fellow humans, and quickly understand the inner workings of wealth, power, and authority. Those who have experienced their Awakening often describe it as the moment their Eye was opened.
                    <br /><br />
                    The Illuminati is made of individuals who have reached this Awakening. Leaders, innovators, and other influential members of this planet have joined together to shape the face of human society and guide its masses into finding their own individual place in the Universal Design.
                </p>
                    <h3 className="aboutpurpose-title">
                        To create a better world, unique beings with unique objectives and beliefs must forgo their differences and work together for the good of all.
                </h3>
                    <p className="aboutpurpose-del">
                        Progress requires cooperation. Humans must suppress their natural defensive selfishness and aid others who appear, believe, or act in ways that are different from themselves.
                    <br /><br />
                    Unfortunately, many humans are only concerned with their own wellbeing and thus cannot understand the positive intentions of a higher authority. Many would rather this planet remain in turmoil instead of following the directions that will lead them to happiness. Historically, the greatest enemies of human progression have been humans themselves. For this reason, those who have experienced their Awakening understand the need for it to remain secret – for their own safety and the ultimate good of a humanity that often does not know what is best for it.
                    <br /><br />
                    It is the Illuminati’s responsibility to ensure the ongoing survival and advancement of the human species, so that all people, in all places, can live in Abundance.
                </p>
                    <ApplicationForm />
                    <div className="believe-eye__other-links">
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

export default BelieveEye


