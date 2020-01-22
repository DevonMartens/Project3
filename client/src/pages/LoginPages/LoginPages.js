import React from "react";
import "./style.css";
function LoginPages() {
  // return (
  //   <div>
  //     <h1>Hey There!!</h1>
  //   </div>
  // );
      return (
        <div className="inner-container">
          <div className="header">
            Login
          </div>
          <div className="login-box">
  
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"/>
            </div>
  
            {/* <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin
              .bind(this)}>Login</button> 
              go to componets for button attributes*/}
          </div>
          <div className="outter-container">
          <div className="header">
            Register
          </div>
          <div className="Registration-box">
            <div className="input-group">
              <p htmlFor="github-email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="login-input"
                placeholder="Github Email"/>
            </div>
            <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="login-input"
                placeholder="Character's name"/>
            </div>
            <div className="input-group">
              <p className="register-password">Create a password</p>
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Register password"/>
            </div>
          </div>
          </div>
        </div>
      );
    }

export default LoginPages;