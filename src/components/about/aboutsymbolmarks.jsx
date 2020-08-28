import React from 'react';
import markBook from '../../assests/images/mark-book.png';
import { Helmet } from 'react-helmet';

function AboutMarkBook() {
    return(
        <React-Fractor>
            <Helmet>
                <title>
                   illuminati symbols
                </title>
                <meta name='description' content="Many citizens have noticed our symbology in artwork, architecture, and visual media. Such displays of loyalty are highly appreciated. However our symbols are not placed in your world for our own glorification, but instead serve as gentle instructions for those who look up from the rocks of Earth and choose to follow the Light." />
            </Helmet>
            <section className="about-mark">
                <section className="about-mark-head">
                    <img src={markBook} alt="illuminati-mark-book" className="about-mark-head__img"/>
                    <p className="about-mark-head__del">
                        <span>The Mark</span>
                        <span>of the Illuminati</span>
                        <span>Discover the meaning behind each</span>
                        <span>part of the Illuminati's symbol.</span>
                    </p>

                </section>
                <section className="aboutpurpose">
                    <h1 className="aboutpurpose-title">
                        Our symbols permeate human society as subtle directions to the truth.
                    </h1>
                    <p className="aboutpurpose-del">
                        Many citizens have noticed our symbology in artwork, architecture, and visual media. Such displays of loyalty are highly appreciated. However our symbols are not placed in your world for our own glorification, but instead serve as gentle instructions for those who look up from the rocks of Earth and choose to follow the Light.
                    <br /><br />
                        Perhaps it was one of these directions that brought you here, or maybe a hundred of them scattered throughout your streets and buildings and glowing screens since your childhood. An invisible chain reaction of events in your life, paired with similar events in the lives of those around you, have all fallen in perfect place like the toppling of countless lines of dominoes that meet in the center.
                    </p>
                    <h1 className="aboutpurpose-title">
                        While you pushed the dominoes, it was us who laid them in a line.
                    </h1>
                </section>
            </section>
        </React-Fractor>
    )
}
export default AboutMarkBook