import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div id="container">
      <div id="screen">
        <div id="screen__content">
          <form id="login" action="/login">
            <div id="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Your Full name"
              />
            </div>
            <div id="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            <div id="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Password"
              />
            </div>
            <div id="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                className="login__input"
                placeholder="Confirm-Password"
              />
            </div>
            <button id="button__submit">
              <span id="button__text">
                <Link to="/login">Register Now</Link>
              </span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
          <div id="social-login">
            <h3>log in via</h3>
            <div id="social-icons">
              <a href="#" className="social-login__icon fab fa-instagram"></a>
              <a href="#" className="social-login__icon fab fa-facebook"></a>
              <a href="#" className="social-login__icon fab fa-twitter"></a>
            </div>
          </div>
        </div>
        <div id="screen__background">
          <span id="screen_background_shape4"></span>
          <span id="screen_background_shape3"></span>
          <span id="screen_background_shape2"></span>
          <span id="screen_background_shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Register;
