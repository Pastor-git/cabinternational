import React from 'react';
import './Menu.css';

function Menu({ children }) {
  return (
    <nav  class="menu">
      { children }
    </nav>
  );
}

export default Menu;
