import React from "react";
import "@/assets/styles/globals.css"; // Ensure global styles are imported
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please enter your credentials to login.</p>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
