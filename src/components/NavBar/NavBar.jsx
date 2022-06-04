import React from "react";

import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import "./NavBar.css";

function NavBar() {
  return (
    <Menu>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
        <li>
          <Link to="articles">Articles</Link>
        </li>
      </ul>
    </Menu>
  );
}

export default NavBar;
