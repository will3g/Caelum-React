import React, { Fragment } from 'react';
import Cabecalho from './components/cabecalho/Cabecalho.js';
import Dashboard from './components/dashboard/Dashboard.js';
import Tweet from './components/dashboard/tweet/Tweet.js';
import './App.css';
import './styles.js';

function App() {
  return (
    <Fragment>
      <Cabecalho />
      <Dashboard/>
    </Fragment>
  );
}

export default App;