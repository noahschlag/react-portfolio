import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle, Contact, AboutMe, CodePortfolio, Portfolio } from './components/common'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />  
          <Switch>
            <Route path="/contact">
              <PageTitle title="Contact"/>
                <div className="Contact-html">
                  <Contact />
                </div>
            </Route>
            <Route path="/Portfolio">
              <PageTitle title="Portfolio"/>
              <Portfolio />
            </Route>
            <Route path="/Code-Portfolio">
              <PageTitle title="Code Portfolio"/>
              <CodePortfolio />
            </Route>
            <Route path="/Contact">
              <PageTitle title="Contact"/>
            </Route>
            <Route path="/About-me">
              <PageTitle title="About-Me"/>
                <AboutMe />
            </Route>
            <Route path="/">
              <PageTitle title="home"/>
            </Route>
          </Switch>
      <Footer />
    </div>
  );
}

export default App;