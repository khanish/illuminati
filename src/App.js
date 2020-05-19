import React from 'react';
import Head from './components/head/head';
import HomeMain from './components/home/homemain';
import Footer from './components/foot/foot';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPurpose from './components/about/aboutpurpose';
import AboutSymbols from './components/about/aboutsymbols';

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
        </Switch>
        <Footer />
      </BrowserRouter>

    </React-Fractor>
  );
}

export default App;
