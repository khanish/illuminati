import React from 'react';
import logo from '../../assests/images/logo2.png';

function HomeBelieves() {
    let believes = [
        {
            title: 'THE PYRAMID', content: 'Money is not the root of all evil,money is the route to all freedom.The selfish pursuit of money is a hollow goal, but the pursuit of the goodness that money can create is one of humanity’s greatest responsibilities.', to: ''
        },
        {
            title: 'THE EYE', content: 'Living humans evolve at a rapid pace and continue to advance in ability through study, practice, and self-improvement. The human species is guarded by a coalition of its most elite members called the Illuminati.', to: ''
        },
        {
            title: 'THE LIGHT', content: 'Every human is guided by an inner compass that points toward the Light, revealing truth and direction amidst decisions. All human spiritual beliefs ultimately seek the Light in ways differing only in form and function.', to: ''
        },
        {
            title: 'THE ETERNAL', content: 'Every human is one part of a larger, eternal design – individual gears in a clock that has no end. Though they may never realize it, a person’s actions have the power to alter the future of the entire world.', to: ''
        },
    ];

    return(
        <React-Fractor>
            <section className="home-believes">
                <div className="home-believes__title header__secondary">OUR CORE BELIEVES</div>
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
                                    <a href="#" className="learn-more">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            )
                    }
                </div>
                <div className="home-believes__foot"></div>
            </section>
        </React-Fractor>
    )
}

export default HomeBelieves