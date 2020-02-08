import React from "react";
import "./style.css";
import {gameUser} from 'routes/api/github.js';
// import userInfo from ('./routes/api/github.js');

function ProfilePages() {
  return (
    <div className="profilecontainer">
      <h1 className="welcomemessage">Welcome Character #1</h1>
      <div className="charactercontainer">
       <p>*character picture will go inside div*</p>
      </div>
      <div className="stackdeveloper">
        <p>stack devloper position will go here******MAYBE*****</p>
      </div>
      {/* <div className="githubLink">{userInfo.html_url}
      </div> */}
    </div>
  );
  
}

export default ProfilePages;
