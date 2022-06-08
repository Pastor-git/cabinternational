import React from "react";

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
        <button id="testbutton">Click me!</button>
      </div>
    );
  }
}

export default List;
