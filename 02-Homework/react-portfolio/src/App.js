import React from 'react';
import{ Switch, Route, Link  } from 'react-router-dom';
import { Footer, Header, PageTitle } from './components/common'

import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
        <switch>
          <route path="/contact">
            <PageTitle title="contact"/>
          </route>
          <route path="/Portfolio">
            <PageTitle title="Portfolio"/>
          </route>
          <route path="/Code Portfolio">
            <PageTitle title="Code Portfolio"/>
          </route>
          <route path="/About Me">
            <PageTitle title="About Me"/>
          </route>
        </switch>
      <Footer />
    </div>
  );
}

export default App;
