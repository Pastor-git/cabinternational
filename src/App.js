import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Pages/Home'
import Articles from './Pages/Articles';
import List from './Pages/List';
import NavBar from './components/NavBar/NavBar';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route path ="/articles">
          <Articles />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
