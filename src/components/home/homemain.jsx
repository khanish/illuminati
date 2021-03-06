import React from 'react';
import HomeHead from './homehead/homehead';
import HomeBriefIntro from './homebriefintro';
import HomeBelieves from './homebelieves';
import HomeEternalOath from './homeeternal';
import Testimoney from './hometestimony';
import ApplicationForm from './applicationform';
import { Helmet } from 'react-helmet';


function HomeMain() {
    return(
        <React-Fractor>
            <Helmet>
                <title>
                    illuminati grand lodge
                </title>
                <meta
                    name="description"
                    content="Officiel website of the Illuminati Grand Lodge. The Grand Lodge is an Illuminati lodge made up of Illuminati Grand Masters and Lords. Initiation into the is only possible through this website"
                />
                <meta name='keyword' content='illumiti members, how to join the illuminati, how to become a member of the illuminati, becoming a member of the illuminati, join the illuminati, inlluminati in brazil, how to join the illuminati in brazil, how to join the illuminati in ghana, inlluminati in ghana, how to join the illuminati in angola, inlluminati angola, how to join the illuminati in south africa, inlluminati in south africa, how to join the illuminati in  dubia, inlluminati in dubia, how to join the illuminati in guinee conakry, inlluminati in guinee conajry, how to join the illuminati in mozambique, inlluminati in mozambique, how to join the illuminati in chile, inlluminati in chili, how to join the illuminati in uganda, inlluminati in uganda, how to join the illuminati in rowanda, inlluminati in rowanda' />
            </Helmet>
            <HomeHead />
            <HomeBriefIntro />
            <HomeBelieves />
            <HomeEternalOath />
            <Testimoney />
            <section className="application-form">
                <ApplicationForm />
            </section>
        </React-Fractor>
    )
}

export default HomeMain