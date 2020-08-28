import React from 'react';
import logo from '../../assests/images/logo2.png';
import ApplicationForm from '../home/applicationform';
import {NavLink} from 'react-router-dom';
import { Helmet } from 'react-helmet';

let believes = [
    {
        title: 'THE EYE', content: 'Living humans evolve at a rapid pace and continue to advance in ability through study, practice, and self-improvement. The human species is guarded by a coalition of its most elite members called the Illuminati.', to: '/the-eye',
    },
    {
        title: 'THE LIGHT', content: 'Every human is guided by an inner compass that points toward the Light, revealing truth and direction amidst decisions. All human spiritual beliefs ultimately seek the Light in ways differing only in form and function.', to: '/the-light'
    },
    {
        title: 'THE ETERNAL', content: 'Every human is one part of a larger, eternal design – individual gears in a clock that has no end. Though they may never realize it, a person’s actions have the power to alter the future of the entire world.', to: '/eternal-circle'
    },
];

function BelievePyramid() {

   return(
    <React-Fractor>
           <Helmet>
               <title>
                   illuminati pyramid
                </title>
               <meta name='description' content="In popular culture, a great amount of focus is placed on the Illuminati’s belief that money is not evil. Some view our encouragement of work and wealth as a promotion of selfishness – overlooking the true meaning of the Pyramid and its underlying messages that motivate our diligence." />
           </Helmet>
           <section className="believe-pyramid">
               <section className="believe-pyramid__head">
                   <img src={logo} alt="logo" className="believe-pyramid__head--logo" />
                   <h1 className="believe-pyramid__head--title">THE PYRAMID</h1>
                   <blockquote className="believe-pyramid__head--title-sub">
                       Money Is Not The Root Of All Evil, <br /> Money Is The Route To All Freedom
               </blockquote>
               </section>
               <section className="believe-pyramid__main">
                   <p className="aboutpurpose-del">
                       In popular culture, a great amount of focus is placed on the Illuminati’s belief that money is not evil. Some view our encouragement of work and wealth as a promotion of selfishness – overlooking the true meaning of the Pyramid and its underlying messages that motivate our diligence.
                    <br /><br />
                   In the tenets of the Illuminati, wealth is not simply a means of personal enrichment. Instead, money is a tool that can be used to fulfill each person’s duty to the advancement of the human species.
                </p>
                   <h3 className="aboutpurpose-title">
                       The selfish pursuit of money is a hollow goal, but the pursuit of the goodness that money can create is one of humanity’s greatest responsibilities.
                </h3>
                   <p className="aboutpurpose-del">
                       The more money a person owns, the more ability they have to positively change the lives of those who are in need. If you are poor and of good heart, and your friend’s house is burned in a fire, you will remain a good person but have no ability to help them with what they need the most. If the same house burns but you are rich, you can give your friend a place to stay and a new home because you have more than enough for yourself and anyone around you who needs it.
                </p>
                   <h3 className="aboutpurpose-title">
                       Money has no feeling, no voice, and no soul – its choice between good or evil is decided by those who use it.
                </h3>
                   <p className="aboutpurpose-del">
                       Though it is not wrong to be poor, the celebration of poverty is rooted in selfishness. A person who is poor can save a life, but a person who is rich can build a hospital and save ten thousand. The poor can do little to help the poor, but the rich can help as many as they are able. If a person is rich, they have the opportunity to do good, but if they are poor they are unable to help anyone but themselves.
                    <br /><br />
                   Those with little can still do much. Money is merely paper and numbers that are traded for a person’s time and effort. Therefore if a person does not have money, they can instead use their time and efforts to further the advancement of humanity – positive actions that are of equal value to any charitable donations.
                    <br /><br />
                   The greater a person’s fortune, the greater their responsibility to their fellow humans. Like the Pyramid, those with the greatest power can do the greatest good for the largest number of those below them.
                </p>
                   <ApplicationForm />
                   <div className="believe-pyramid__other-links">
                       <h3 className="related-topics">Related Topics</h3>
                       <div className="home-believes__ctn">
                           {
                               believes.map(
                                   believe =>
                                       <div className="home-believes__ctn-believe">
                                           <img src={logo} alt="illuminati-logo" className="home-believes__ctn-believe-logo" />
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

export default BelievePyramid


