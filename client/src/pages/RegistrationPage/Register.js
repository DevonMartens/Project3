iimport React, { Component } from 'react';
import 'whatwg-fetch';
//may need to go to compents folder
import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage.js';
​
class Register extends Component {
  constructor(props) {
    super(props);
​
    this.state = {
     isLoading: true,
     token: '',
     signUpError:'',
     signInError:'',
     signInEmail:'',
     signInPassword:'', 
     signUpUsername:'', 
     signUplocation:'', 
     signUpUserType:'', 
     signUpGithubLink:'', 
     signUpEmail:'',   
     signUpPassword:'',  
     signUpPhone:'',  
     SignUpLang: ''
    //  ,
    //  masterError: ''
    };
    this.onTextboxChangeSignInEmail  = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangesignUpUsername = this.onTextboxChangesignUpUsername.bind(this);
    this.onTextboxChangesignUplocation = this.onTextboxChangesignUplocation.bind(this);
    this.onTextboxChangesignUpUserType  = this.onTextboxChangesignUpUserType.bind(this);
    this.onTextboxChangesignUpGithubLink = this.onTextboxChangesignUpGithubLink.bind(this);
    this.onTextboxChangesignUpEmail = this.onTextboxChangesignUpEmail.bind(this);
    this.onTextboxChangesignUpPassword = this.onTextboxChangesignUpPassword.bind(this);
    this.onTextboxChangesignUpPhone = this.onTextboxChangesignUpPhone.bind(this);
    this.onTextboxChangeSignUpLang = this.onTextboxChangeSignUpLang.bind(this);
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp= this.onSignUp.bind(this);
    this.onlogout= this.onlogout.bind(this);
  }
  componentDidMount() {
  const obj = getFromStorage('the_main_app');
​
  if(obj && obj.token){
    const {token} = obj;
    fetch('/api/account/verify?token' + token)
      .then(res => res.json())
      .then(json => {
        if (json.success){
this.setState({
  token,
  isLoading: false
}); 
  } else {
    this.setState({
      isLoading: false,
    });
  };
});
  };
};
​
// sign in on change
  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }
​
  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }
​
  // sign up on change
  onTextboxChangesignUpUsername(event) {
    this.setState({
      signUpUsername: event.target.value,
    });
  }
  onTextboxChangesignUplocation(event) {
    this.setState({
      signUplocation: event.target.value,
    });
  }
  onTextboxChangesignUpUserType(event) {
    this.setState({
      signUpUserType: event.target.value,
    });
  }
  onTextboxChangesignUpGithubLink(event) {
    this.setState({
      signUpGithubLink: event.target.value,
    });
  }
  onTextboxChangesignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  } 
  onTextboxChangesignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }
  onTextboxChangesignUpPhone(event) {
    this.setState({
      signUpPhone: event.target.value,
    });
  }
  onTextboxChangeSignUpLang(event) {
    this.setState({
      SignUpLang: event.target.value,
    });   
  }
​
onSignUp() {
// grab state and post to backend
const { 
  signUpUsername,
  signUplocation,
  signUpUserType,
  signUpGithubLink,
  signUpEmail,    
  signUpPassword,  
  signUpPhone,  
  SignUpLang,
} = this.setState;
fetch('/api/account/signup',
{
  method: 'POST',
body: JSON.stringify({
  userName: signUpUsername,
  location: signUplocation,
  userType: signUpUserType,
  githubLink: signUpGithubLink,
  email: signUpEmail,
  phone: signUpPhone,
  password: signUpPassword,
  languages: SignUpLang,
}),
})
.then(res => res.json())
.then(json => {
if (json.success){
    this.setState({
      signUpError: json.message,
      isLoading: false,
      signUpUsername:'',
  signUplocation:'',
signUpUserType:'',
  signUpGithubLink:'',
signUpEmail:'',
  signUpPhone:'',
signUpPassword:'',
    });
  } else {
  this.setState({
    signUpError: json.message,
    isLoading: false,
  });
}
});
​
  onSignIn()
    const { 
      signInPassword, 
     signInPassword,
    } = this.setState;
    fetch('/api/account/signin',
    {method: 'POST',
    body: JSON.stringify}
​
​
    .setInStorage ('the_main_app', {token:json.token}),
     { email: signIpEmail,
      password: signInPassword,
    }
    .then(res => res.json()) 
    .then(json => {
    if (json.success){
        this.setState({
    signInError: json.message,
    signInEmail:'',
    signInPassword:'',
    token: json.token,
        });
      } else {
      this.setState({
        signInError: json.message,
        isLoading: false,
      });
    }
    })
  
  
  
  
  
  logout();

  const {signInPassword, signInPassword} = this.setState;
  fetch('/api/account/logout?token=' + token),
  {
    method: 'POST',
  body: JSON.stringify({setInStorage('the_main_app'{token: json,token}); 
    email: signIpEmail,
    password: signInPassword,
  }
  .then(res => res.json()) 
  .then(json => {
  if (json.success){
      this.setState({
  token: '',
  isLoading: false
      });
    }
}
​
  
  
  {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpUsername,
      signUplocation,
      signUpUserType,
      signUpGithubLink,
      signUpEmail,   
      signUpPassword,  
      signUpPhone,  
      SignUpLang
  } = this.state 
​
​
   if (isLoading) {
    return (<div><p>Loading...</p></div>);
if (token)
    return (
​
<div className ="login-box">  <div>
​
{
  (signInError) ? (
  <p>{signInError}</p>
  ) : (null)
}
          <p> className="Login-text">Sign In</p>
        {/* sign in email */}
            <div className="input-group">
              <p htmlFor="=email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="login-input"
                placeholder="Email" value={signInEmail} 
                onChange={this.onTextboxChangesignInEmail}/>
                {/* sign in password */}
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value={signInPassword}
                onChange={this.onTextboxChangeSignInPassword}/>
                <br></br>
                <button className="signin-btn">Sign In</button>
            </div>
            </div>
            </div>
            /* <button
              type="button"
              className="login-btn"
              onClick={this.submitLogin
              .bind(this)}>Login</button> 
              go to componets for button attributes*/}
​
              {/* Registration Section */}
        
          <div className="outter-container" ></div>
          <div className="header">
          New User Registeration
          </div>
          <div className="Registration-box"> </div>
          <div className="input-group">
          <label htmlFor="username">Please Enter a Username(Be Professional)</label>
          <input
                type="text"
                name="username"
                className="signin-input"
                placeholder="Username"
                value={signUpUsername}
                onChange={this.onTextboxChangesignUpUsername}/>
 </div>
 <div className="input-group">
          <label htmlFor="username">Please Enter the Location You Would Like to Work In</label>
          <input
                type="text"
                name="location"
                className="signin-input"
                placeholder="Location"
                value={signUplocation}
                onChange={this.onTextboxChangesignUplocation}/>
 </div>
 <div className="input-group">
          <label htmlFor="username">Please Enter What Type of User You Are (Student, Professional, Job Seeker)</label>
          <input
                type="text"
                name="userType"
                className="signin-input"
                placeholder="User Type"
                value={signUpUserType}
                onChange={this.onTextboxChangesignUpUserType}/>
 </div>
 <div className="input-group">
          <label htmlFor="username">Please Enter a Valid Github Link</label>
          <input
                type="text"
                name="GithubLink"
                className="signin-input"
                placeholder="Github Link"
                value={signUpGithubLink}
                onChange={this.onTextboxChangesignUpGithubLink}/>
 </div>
            <div className="input-group">
              <p htmlFor="=email">Enter email associated with your Github</p>
            <label htmlFor="Email">Github Email</label>
            <input
                type="text"
                name="Email"
                className="login-input"
                placeholder="Email"
                value={signUpEmail}
                onChange={this.onTextboxChangesignUpEmail}/>
​
            </div>
​
​
           /* <div className="input-group">
              <p className="register-username">Enter your character's name</p>
              <label htmlFor="register-username">Username</label>
              <input
                type="text"
                name="Character's Name"
                className="login-input"
                placeholder="Character's name"/>
            </div> */
​
​
             <div className="input-group">
          <label htmlFor="username">If you wish to be contacted via phone please enter your phone number(optional)</label>
          <input
                type="text"
                name="PhoneNumber"
                className="signin-input"
                placeholder="Username"
                value={signUpPhone}/>
 </div>
            <div className="input-group">
              <p className="register-password">Create a password</p>
              <label htmlFor="register-password">Password</label>
              <input
                type="password"
                name="register-password"
                className="register-password"
                placeholder="Register password"
                value={signUpPassword}
                onChange={this.onTextboxChangesignUpPassword}/>
                </div>
                <br></br>
                <div className="input-group">
          <label htmlFor="username">Please list the programming langauges you are firmiliar with:</label>
          <input
                type="text"
                name="username"
                className="signin-input"
                placeholder="Programming Languages You Would Like to Test On"
                value={SignUpLang}
                onChange={this.onTextboxChangeSignUpLang}/>
 </div>
<div>
 <button className="signin-btn">Sign Up</button>
 </div>        
 <div>    
  <button onclick={this.logout}>logout</button>
   </div>    
  {/* </div>    
 
   
  }
  return (
    <div>
<p>
Account
</p> */}
    {/* </div> */}
          
          );
        }
    
    
export default Register;
