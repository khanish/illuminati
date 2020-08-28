import React from 'react';
import Head from './components/head/head';
import HomeMain from './components/home/homemain';
import Footer from './components/foot/foot';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPurpose from './components/about/aboutpurpose';
import AboutSymbols from './components/about/aboutsymbols';
import AboutMarkBook from './components/about/aboutsymbolmarks';
import AboutSecreteSociety from './components/about/aboutsecretesociety';
import AboutWealth from './components/about/aboutwealth';
import AboutAge from './components/about/aboutilluage';
import AboutBillionaires from './components/about/aboutbillionaires';
import BelievePyramid from './components/our-believes/pyramid';
import BelieveEye from './components/our-believes/eye';
import BelieveLight from './components/our-believes/light';
import BelieveEternal from './components/our-believes/circle';
import ScrollToTop from './components/scrolltop';
import JoinUs from './components/Joinus';
import TenetOfValueAndTrade from './components/our-believes/tenet-of-value-&-trade';
import TenetOfMoneyAboundance from './components/our-believes/tenet-of-money-&-abondance';

function App() {
  let path = '/illuminati';
  return (
    <React-Fractor>
      <BrowserRouter>
        <ScrollToTop />
        <Head />
        <Switch>
          <Route path={'/' } exact component={HomeMain} />
          <Route path={'/purpose-of-the-illuminati'} component={AboutPurpose} />
          <Route path={'/illuminati-symbols'} component={AboutSymbols} />
          <Route path={'/illuminati-symbols-and-mask'} component={AboutMarkBook} />
          <Route path={'/why-a-secrete-society'} component={AboutSecreteSociety} />
          <Route path={'/wealth-of-the-illuminati'} component={AboutWealth} />
          <Route path={'/the-age-of-illuminati'} component={AboutAge} />
          <Route path={'/billionaires-giving-pledge'} component={AboutBillionaires} />
          <Route path={'/the-pyramid'} component={BelievePyramid} />
          <Route path={'/the-eye'} component={BelieveEye} />
          <Route path={'/the-light'} component={BelieveLight} />
          <Route path={'/eternal-circle'} component={BelieveEternal} />
          <Route path={'/tenet-for-money-and-aboudance'} component={TenetOfMoneyAboundance} />
          <Route path={'/tenet-for-value-and-trade'} component={TenetOfValueAndTrade} />
          <Route path={'/join-the-illuminati'} component={JoinUs} />
          
        </Switch>
        <Footer />
      </BrowserRouter>

    </React-Fractor>
  );
}

export default App;
