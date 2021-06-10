import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header, Footer, PageTitle, Contact } from './components/common'

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
            </Route>
            <Route path="/Code-Portfolio">
              <PageTitle title="Code-Portfolio"/>
            </Route>
            <Route path="/Contact">
              <PageTitle title="Contact"/>
            </Route>
            <Route path="/About-me">
              <PageTitle title="About-Me"/>
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