import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Articles from "./Pages/Articles";
import List from "./Pages/List";
import NavBar from "./Components2/NavBar/NavBar";
import Header from "./Components2/Header/Header";

import "./App.css";

function App() {
  return (
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/articles">
            <Articles />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
