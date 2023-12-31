// import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/shop";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login Page</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input className="btn-submit" type="submit" value="Login" />
        <p>
          <small>
            New to Ema-john ? <Link to="/signup">Create new account</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
