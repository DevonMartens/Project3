const superagent = require('superagent');
require('dotenv').config()
const clientID = process.env.clientID
const clientSecret = process.env.clientSecret
const accesstoken = process.env.accessToken

module.exports = (app) => {
    app.get('/user/signin/callback', (req, res, next) => {
    const { query } = req;
    const { code } = code;
    if (!code)
    return res.send ({
      success: false,  
      message: 'error no code'
    });

//post
request
.post('https://github.com/login/oauth/access_token')
.send({ client_id: clientID,
client_secret: clientSecret,
code: code
  })
.set('Accept', 'application/json')
.then(function (result) {
  const data = result.body
  res.send(data);

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
}

app.get('/user/', req, res, next) => {
      //this needs to be grabbed from backend based on who the user is help

   //follow get user instruction
   //request
  // .get('https://api.github.com/user')
//.set('Authorization: token ' +accesToken)
//   .then(function(result){
//res.send(result.body);
//}

 //  });
   
 // }
});
});
};