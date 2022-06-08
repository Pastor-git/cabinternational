import React from "react";

import { Link } from "react-router-dom";

import Menu from "../Menu/Menu";
import "./NavBar.css";

function NavBar() {
  return (
    <Menu>
      <table>
        <tr>
          <Link to="/">
            <button class="navButton">Home</button>
          </Link>
          </tr>
          <tr>
          <Link to="/list">
            <button class="navButton">List</button>
          </Link>
          </tr>
          <tr>
          <Link to="articles">
            <button class="navButton">Articles</button>
          </Link>
        </tr>
      </table>
    </Menu>
  );
}

export default NavBar;
