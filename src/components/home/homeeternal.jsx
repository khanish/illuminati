import React from 'react';
import oath from '../../assests/images/eternal-oath.jpg'
import { NavLink } from 'react-router-dom';

function HomeEternalOath() {
    return(
        <React-Fractor>
            <section className="home-eternal-oath">
                <img src={oath} alt="the talisman" className="home-eternal-oath__img"/>
                <div className="home-eternal-oath__ctn">
                    <span className="header__primary eternal-aoth-head1">
                        THE ETERNAL OATH
                    </span>
                    <span className="heder__secondary eternal-aoth-head2">
                        OF THE ILLUMINATI
                    </span>
                    <p className="home-eternal-oath__cnt-detail">
                        Since our origination, Illuminati members have dedicated themselves to the advancement of the human species by taking oaths of commitment. These pledges are a core tradition of the Illuminati, formed as written contracts between a single person and all members of humanity. The first pledge of the Illuminati is called the Eternal Oath.
                    </p>
                    <NavLink to='/eternal-oath' className="learn-more">
                        Learn More
                    </NavLink>
                </div>
            </section>
        </React-Fractor>
    )
}

export default HomeEternalOath;