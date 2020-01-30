const superagent = require('superagent');
// require('dotenv').config()
const keys = require('../../client/src/config');
//  const clientSecret = require('client/src/config.js');
// const  accessToken = require('client/src/config.js');
// const clientSecret = process.env.clientSecret
// // const accesstoken = process.env.accessToken
// import {Profile} from ('./client/src/pages/ProfilePages/ProfilePages.js');

module.exports = (app) => {
    app.get('/user/signin/callback', (req, res, next) => {
    const { query } = req;
    const { code } = code;
    if (!code)
    return res.send ({
      success: false,  
      message: 'error no code'
    });

// post request written
request
.post('https://github.com/login/oauth/access_token')
.send({ client_id: keys.clientID, 
client_secret: keys.clientSecret,
code: code
  })
.set('Accept', 'application/json')
.then(function (result) {
  const data = result.body
  res.send(data); 

// })
 });
});
// });
app.get('/user/:username/hovercard/', req, res, next => {
//   //     this needs to be grabbed from backend based on who the user is help

//   //  follow get user instruction
request
.get('https://api.github.com/user/')
.set('Authorization', 'token ' +keys.accessToken)
  .then(function(result){
    console.log(result.body);
res.send(result.body);


  });
});
}; 


// // code works above this line
// const userInfo = result.body

// export default userInfo;




//post user info
// const oauth = new OAuth2Server({model: ...});

// function authenticateHandler(options) {
//   return function(req, res, next) {
//     let request = new Request(req);
//     let response = new Response(res);
//     return oauth.authenticate(request, response, options)
//       .then(function(token) {
//         res.locals.oauth = {token: token};
//         next();
//       })
//       .catch(function(err) {
//         // handle error condition
//       });
//   }

