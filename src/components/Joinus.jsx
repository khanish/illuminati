import React from 'react';
import ApplicationForm from './home/applicationform';
import { Helmet } from 'react-helmet';

function JoinUs() {
    return(
        <React-Fractor>
            <Helmet>
                <title>
                    join the illuminati
                </title>
                <meta name='description' content="The Illuminati is an elite organization of world leaders, business authorities, innovators, artists, and other influential members of this planet. To apply for membership, complete the form on this page." />
                <meta name='keyword' content='illumiti members, how to join the illuminati, how to become a member of the illuminati, becoming a member of the illuminati, join the illuminati, inlluminati in brazil, how to join the illuminati in brazil, how to join the illuminati in ghana, inlluminati in ghana, how to join the illuminati in angola, inlluminati angola, how to join the illuminati in south africa, inlluminati in south africa, how to join the illuminati in  dubia, inlluminati in dubia, how to join the illuminati in guinee conakry, inlluminati in guinee conajry, how to join the illuminati in mozambique, inlluminati in mozambique, how to join the illuminati in chile, inlluminati in chili, how to join the illuminati in uganda, inlluminati in uganda, how to join the illuminati in rowanda, inlluminati in rowanda' />
            </Helmet>
            <section className="joinus-cover">
                <div className="joinus">
                    <ApplicationForm />
                    <div className="notejoining">
                        <h1>The Illuminati is an elite organization of world leaders, business authorities, innovators, artists, and other influential members of this planet. To apply for membership, complete the form on this page.</h1>
                        <h2>All people, in all places, are eligible to apply for Illuminati membership. Initiates are required to take vows of loyalty for eternity.</h2>
                    </div>
                </div>
            </section>
        </React-Fractor>
    )
}
export default JoinUs;