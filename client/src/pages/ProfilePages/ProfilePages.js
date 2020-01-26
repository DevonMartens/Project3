import React from "react";
import "./style.css";

function ProfilePages() {
  return (
    <div className="profilecontainer">
      <h1 className="profilemessage">Character Name</h1>
      <div className="charactercontainer">
       <p>*character picture will go inside div*</p>
       {/* <img className="character-img" src="" alt="john-doe" style="width:25%"></img> */}
      </div>
      <div className="logoutcontainer">
        <p><a href="/"><input className="signout-btn" value="Sign Out" type="button"></input></a></p>
      </div>
    </div>
  );
  
}

export default ProfilePages;