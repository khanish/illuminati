import React from 'react';
import {NavLink} from 'react-router-dom';

function AboutPurpose() {
    return(
        <React-Fractor>
            <section className="aboutpurpose">
                <h1 className="aboutpurpose-title">
                    The Illuminati’s purpose is to secure the ongoing survival of the human species.
                </h1>
                <p className="aboutpurpose-del">
                    Like all organisms, the human species naturally strives against extinction. Though your countries have borders and your languages have barriers, all people in all places are members of the same biological family. All humans are pieces of a collective that keeps humanity in existence.
                    <br/><br/>
                    Though you are merely a speck on the back of a grain of sand when compared to the vast number of humans born and decomposed for millennia, you are as important to your species’ survival as the greatest kings and queens.
                </p>
                <h1 className="aboutpurpose-title">
                    But by nature, the human is affected by instinct, emotion, and imbalance.
                </h1>
                <p className="aboutpurpose-del">
                    A human will turn on one of its own species for reasons that will never matter in a thousand years, and likely not matter in even a hundred or ten. While you have seen the Light in the distance and chosen to follow it — even if from mere curiosity — there are millions more whose backs are turned against its glow.
                    <br/><br/>
                    The Illuminati operates various departments and programs for the benefit of all people, in all places, from all generations. By protecting the interests of humanity as a whole, our organization has ensured the ongoing dominance of the human species over every other creature and predator on this planet.
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

export default AboutPurpose;