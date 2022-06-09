import React from "react";

import CounterButton from '../Components/CounterButton/CounterButton'

import './Wrapper.css';

class Home extends React.Component {
  render() {
    return <div class="wrap">
      <CounterButton />
      <CounterButton />
      </div>;
  }
}

export default Home;
