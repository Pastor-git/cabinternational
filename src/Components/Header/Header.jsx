import React from "react";
import "./Header.css";

import logo from "./logo.jpg";

class Header extends React.Component {
  render() {
    return (
      <div class="header">
        <img src={logo} alt="Logo" />
        <p>Company Name</p>
      </div>
    );
  }
}

export default Header;
