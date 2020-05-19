import React from 'react';
import eye from '../../assests/images/symbols-eye.png';
import pyramid from '../../assests/images/symbol-pyramid.png';
import copperEarth from '../../assests/images/symbols-copper-earth.png';
import symbolsGoldSun from '../../assests/images/symbols-gold-sun.png';
import light from '../../assests/images/symbols-light.png';
import symbolsMoon from '../../assests/images/symbols-moon.png';
import symbolsOwl from '../../assests/images/symbols-owl.png';
import symbolsPendulum from '../../assests/images/symbols-pendulum.png';
import symbolsSnakeOuroboros from '../../assests/images/symbols-snake-ouroboros.png';
import symbolExplainer from '../../assests/images/symbol-explainer.jpg';
import symbolsCrossedKeys from '../../assests/images/symbols-crossed-keys.png';
import symbolsEternaCircle from '../../assests/images/symbols-eternal-circle.png';
import symbolsObelisk from '../../assests/images/symbols-obelisk.png';

let symbols = [pyramid, eye, light, symbolsEternaCircle, symbolsCrossedKeys, symbolsObelisk, symbolsPendulum, symbolsSnakeOuroboros, symbolsOwl, symbolsGoldSun, symbolsMoon, copperEarth ]

function AboutSymbols() {
    return(
        <section className="about-symbols">
            <section className="about-symbols-top">
                <h1 className="about-symbols-top__title">
                    <span className='about-symbols-top__title-1'>SYMBOLS</span>
                    <span className='about-symbols-top__title-2'>OF THE</span>
                    <span className='about-symbols-top__title-3'>ILLUMINATI</span>
                </h1>
                <p className="about-symbols-top__des">
                    SELECT A SYMBOL BELOW TO LEARN MORE ABOUT ITS MEANING, HISTORY, AND SIGNIFICANCE IN ILLUMINATI TRADITIONS.
                </p>
                <section className="about-symbols-top__symbols">
                    {
                        symbols.map(
                            symbol =>
                                <img src={symbol} alt="symbol" className="about-symbols-top__symbols--img"/>
                            )
                    }
                </section>
            </section>
        </section>
    )

}

export default AboutSymbols;