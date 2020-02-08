const express = require("express");
// require('dotenv').config()
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//added for google Oauth test 
const cookieSession = require('cookie-session');
//add google keys
const keys = require('./config/keys.js');
require('./models/User.js'); 
require('./services/passport.js');
mongoose.connect(keys.mongoURI);
///end

const app = express();

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:['fdfvfgnhrfb']
}));

app.use(passport.initialize());
app.use(passport.session());

///end

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/millionaire"
);

//may need 
require('./routes/authRoutes.js')(app);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
