import React from 'react';

import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';


function App() {
  return (
    <Router>
      <Switch>
      <NavBar className="App">
        <a>Learn React</a>
      </NavBar>
      </Switch>
    </Router>
  );
}

export default App;
