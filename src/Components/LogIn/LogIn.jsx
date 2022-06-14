import React from "react";

import './LogIn.css';

export const LogIn = () => {
  return (
    <div class="login">
      <p>
        <input type="text" id="login" title="login"></input>
      </p>
      <p>
        <input type="text" id="pass" title="password"></input>
      </p>
      <button type="submit">Login</button>
    </div>
  );
};

export default LogIn;
