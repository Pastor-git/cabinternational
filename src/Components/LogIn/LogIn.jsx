import React from "react";

import "./LogIn.css";

export const LogIn = () => {
  return (
    <div class="login">
      <form>
      <label after="login">Login:</label>
        <p>
          <input type="text" id="login"></input>
        </p>
        <label for="pass">Password:</label>
        <p>
          <input type="text" id="pass"></input>
        </p>
      </form>
      <button type="submit">Login</button>
    </div>
  );
};

export default LogIn;
