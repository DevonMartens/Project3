const mongoose = require("mongoose");
const db = require("../models");

// This file empties the User collection and inserts the Users below

mongoose.connect(
  process.env.MONGODB_URI
);


db.User
  .remove({})
  .then(() => db.User.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
