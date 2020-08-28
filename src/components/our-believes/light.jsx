import React from 'react';
import logo from '../../assests/images/logo2.png';
import ApplicationForm from '../home/applicationform';
import { NavLink } from 'react-router-dom';
import {Helmet} from 'react-helmet';

let believes = [
    {
        title: 'THE PYRAMID', content: 'Money is not the root of all evil,money is the route to all freedom.The selfish pursuit of money is a hollow goal, but the pursuit of the goodness that money can create is one of humanity’s greatest responsibilities.', to: '/the-pyramid'
    },
    {
        title: 'THE EYE', content: 'Living humans evolve at a rapid pace and continue to advance in ability through study, practice, and self-improvement. The human species is guarded by a coalition of its most elite members called the Illuminati.', to: '/the-eye',
    },
    {
        title: 'THE ETERNAL', content: 'Every human is one part of a larger, eternal design – individual gears in a clock that has no end. Though they may never realize it, a person’s actions have the power to alter the future of the entire world.', to: '/eternal-circle'
    },
];

function BelieveLight() {

    return (
        <React-Fractor>
            <Helmet>
                <title>
                    illuminati light
                </title>
                <meta name='description' content="Every human is guided by an inner compass that points toward the Light, revealing truth and direction when facing decisions." />
            </Helmet>
            <section className="believe-light">
                <section className="believe-light__head">
                    <img src={logo} alt="illuminati-logo" className="believe-light__head--logo" />
                    <h1 className="believe-light__head--title">THE Light</h1>
                    <blockquote className="believe-light__head--title-sub">
                        Follow The Light
               </blockquote>
                </section>
                <section className="believe-light__main">
                    <h3 className="aboutpurpose-title">
                        Every human is guided by an inner compass that points toward the Light, revealing truth and direction when facing decisions.
                </h3>
                    <p className="aboutpurpose-del">
                        Given many names by spiritual leaders and unexplainable by science, the Light is an invisible guide that many believe has led them to joy, success, and lives of Abundance. It communicates directly to every human, urging them to strive for goodness and forgo their natural selfishness.
                </p>
                    <h3 className="aboutpurpose-title">
                        All human religions and spiritual beliefs ultimately seek the Light in ways differing only in form and function.
                </h3>
                    <p className="aboutpurpose-del">
                        Some religions refer to the Light with a name, such as God or Elohim. The core of every religion is founded on the human species’ innate desire to understand this invisible force. Even without a formal religious affiliation, every human is naturally drawn to the Light. Individual members of the Illuminati adhere to every variety of personal spiritual beliefs –– but by recognizing that all of our paths lead to the same destination, we find that the Light brings all people into an ultimate unity.
                </p>
                    <h3 className="aboutpurpose-title">
                        There is no proof that a God exists but there is also no proof that a God does not.
                </h3>
                    <p className="aboutpurpose-del">
                        The Illuminati’s spiritual foundation is based upon this universal conundrum of faith and doubt. Our organization does not question whether a god does or does not exist but instead focuses on the betterment of the humans living on this planet.
                    <br /><br />
                    Though the human mind in its physical form is not capable of fully understanding the Light, conscious thought and intention reveal many of its inner workings and effects. By studying the wisdom of this planet’s greatest minds, humans can discover ways to increase the Light’s powerful influence in their lives.
                </p>
                    <h3 className="aboutpurpose-title">
                        The Light, under many names, has been attributed to supernatural changes in the physical realm, including increases in wealth, power, prestige, health, and happiness.
                </h3>
                    <p className="aboutpurpose-del">
                        Miracles, attraction, and the belief in unseen powers that can alter the physical world have some basis in truth. Though scientific advancements have explored both this planet’s environment and the inner workings of the human mind, there are still countless mysteries that remain unsolved. Thus many occurrences that are attributed to the supernatural are merely the result of the human mind processing a concept it cannot explain naturally.
                    <br /><br />
                    Some humans attempt to form a deeper connection with the Light through rituals that have been passed down for centuries. Though these ceremonies often involve complicated steps and requirements, their true effect is not found in their directions or decorations but rather in the state of mind that results within its participants. Many of the Illuminati’s traditions include rituals and oaths designed to explain higher concepts, and use the power of focused repetition to strengthen the ability of the human consciousness.
                </p>
                    <div className="symbolcallout">
                        The Illuminati prohibits rituals that include human sacrifices.
                </div>
                    <h3 className="aboutpurpose-title">
                        A desire to understand the Light is an integral part of the path to illumination.
                </h3>
                    <p className="aboutpurpose-del">
                        By rising through the levels of illumination, Illuminati members discover more about their world and the true power that hides within their minds. Whatever you seek, whatever you dream, whatever you hope: all is possible if you follow the Light.
                </p>
                    <ApplicationForm />
                    <div className="believe-light__other-links">
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

export default BelieveLight


