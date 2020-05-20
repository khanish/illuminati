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

function App() {
  let path = '/illuminati';
  return (
    <React-Fractor>
      <BrowserRouter>
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
          
        </Switch>
        <Footer />
      </BrowserRouter>

    </React-Fractor>
  );
}

export default App;
