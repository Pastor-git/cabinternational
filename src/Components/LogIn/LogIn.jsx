import React from "react";

import './LogIn.css';

export const LogIn = () => {
  return (
    <div class="login">
      <p>
        <input type="text" id="login" value="login"></input>
      </p>
      <p>
        <input type="text" id="pass" value="password"></input>
      </p>
      <button type="submit">Login</button>
    </div>
  );
};

export default LogIn;
