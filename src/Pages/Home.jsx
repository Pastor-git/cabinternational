import React from "react";

import CounterButton from "../Components/CounterButton/CounterButton";
import LogIn from "../Components/LogIn/LogIn"

import "./Wrapper.css";

class Home extends React.Component {
  render() {
    return (
      <div class="wrap">
        <CounterButton />
        <CounterButton id="h1" />
        <LogIn />
      </div>
    );
  }
}

export default Home;
