import React from 'react';
import { NavLink } from 'react-router-dom';

function TenetOfMoneyAboundance() {
    return (
        <React-Fractor>
            <section className="aboutpurpose">
                <h1 className="aboutpurpose-title">
                    Money is a mathematical measurement of a person’s earthly influence.
                </h1>
                <p className="aboutpurpose-del">
                    Wealth is commonly vilified by those who have never met it. Many people journey through life believing that the pursuit of money is the cause of all evil — forgoing the fact that often money can solve life’s most harrowing tribulations.
                    <br/><br/>
                    Is the money a mother uses to care for her child evil? Is the money an artist is provided in return for years of practice and hardship evil? Is the money a corrupted corporation pays to its employees evil?
                </p>
                <h1 className="aboutpurpose-title">
                    Money's choice between good or evil is decided by those who use it.
                </h1>
                <p className="aboutpurpose-del">
                    Money has no feeling, no voice, no soul. When one is hungry, they cannot eat paper or gold. The same money that can be used to hurt can also be used to heal. To the dictator, money is a means for weapons and death. To the beggar, money is a means for food and life.
                </p>
                <h1 className="aboutpurpose-title">
                    Pursue a life of Abundance.
                </h1>
                <p className="aboutpurpose-del">
                    This planet is rich enough for all people in all places to live in the joys of plenty. A life of Abundance is one filled to the brim, spilling over its edges — a freedom to help those around you because you no longer need to help yourself.
                    <br/><br/>
                    The value of money is measured in the hands of those who hold it. To a beggar, a hundred is a lot; to a millionaire, a hundred is little. A billionaire can save hundreds of thousands of lives simply by giving food and medicine and shelter to those who have none. How many lives can the poor save?
                </p>
                <h1 className="aboutpurpose-title">
                    With effort, poverty is impermanent.
                </h1>
                <p className="aboutpurpose-del">
                    The path of every person’s life is hidden: the rich are born with no knowledge of their wealth, as are the poor and their poverty. Though you may feel that the struggles you face in this moment are undeserved, know that these are merely impermanent and temporary. An empire will fall so greater empires can be made from its ashes; a life will crumble so a greater future may be built with its pieces. Find peace in knowing that the darkest moments in your life are merely prerequisites for the life of Abundance you are meant to have.
                </p>
                
                <div className="aboutpurpose-links margin-top">
                    <NavLink to={'/tenet-of-god-and-satan'} className='learn-more margin-left'>
                        Value & Trade
                    </NavLink>
                    <NavLink to={'/join-the-illuminati'} className='learn-more margin-right'>
                        Join The Illuminati
                    </NavLink>
                </div>
            </section>
        </React-Fractor>
    )
}

export default TenetOfMoneyAboundance;