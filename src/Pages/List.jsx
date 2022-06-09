import React from "react";
import CounterButton from "../Components/CounterButton/CounterButton";

import './Wrapper.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  render() {
    return (
      <div class="wrap">
        <CounterButton />
      </div>
    );
  }
}

export default List;
