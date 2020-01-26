import React from "react";
import "./style.css";
function LoginPages() {
  // return (
  //   <div>
  //     <h1>Hey There!!</h1>
  //   </div>
  // ************************ ADD THE HEADER DIV AND NAVIGATION DIV *******************************
  // );
      return (
        <div className="github-container">
          <div className="header">
            <h1 className="game-intro">Sign In or Register to play!</h1>
          </div>
          <div className="inner-container">
          <p className="signin-text">Sign In</p>
            <div className="input-group">
              <label htmlFor="username" className="githubusername">Username</label>
              <input
                type="text"
                name="username"
                className="signin-input"
                placeholder="Username"/>
            </div>
  
            <div className="input-group">
              <label htmlFor="password" className="githubpassword">Password</label>
              <input
                type="password"
                name="password"
                className="password-input"
                placeholder="Password"/>
                <br></br>
                <button a href="https://github.com/login/oauth/authorize?client_id=f2effb81e7b98417a023" 
                className="signin-btn" type="submit">Sign In</button>
            </div>
  
            {/* <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin
              .bind(this)}>Login</button> 
              go to componets for button attributes*/}
          </div>
          <div className="outter-container">
          {/* <div className="header">
          <p className="register-text">Register account associated with Github</p>
          </div> */}
          <div className="Registration-box">
            <div className="input-group">
            <p htmlFor="github-email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="email-input"
                placeholder="Github Email"/>
            </div>
            <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="username-input"
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
                <br></br>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
                <button className="register-btn character-img">Register</button>
            </div>
          </div>
          </div>
        </div>
      );
    }

export default LoginPages;