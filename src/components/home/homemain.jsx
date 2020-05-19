import React from 'react';
import HomeHead from './homehead/homehead';
import HomeBriefIntro from './homebriefintro';
import HomeBelieves from './homebelieves';
import HomeEternalOath from './homeeternal';
import Testimoney from './hometestimony';
import ApplicationForm from './applicationform';


function HomeMain() {
    return(
        <React-Fractor>
            <HomeHead />
            <HomeBriefIntro />
            <HomeBelieves />
            <HomeEternalOath />
            <Testimoney />
            <ApplicationForm />
        </React-Fractor>
    )
}

export default HomeMain