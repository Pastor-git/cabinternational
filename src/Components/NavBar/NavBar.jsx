import React from "react";

import { NavLink } from "react-router-dom";

import Menu from "../Menu/Menu";
import "./NavBar.css";

function NavBar() {
  return (
    <Menu>
      <table>
        <tr>
          <NavLink to="/">
            <button class="navbutton">Home</button>
          </NavLink>
          </tr>
          <tr>
          <NavLink to="/list">
            <button class="navbutton">Reports</button>
          </NavLink>
          </tr>
          <tr>
          <NavLink to="articles">
            <button class="navbutton">Articles</button>
          </NavLink>
        </tr>
      </table>
    </Menu>
  );
}

export default NavBar;
